import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";
import { checkForUser } from "../../services/checkForUser";

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();
  const [currentMessage, setCurrentMessage] = useState("Digite o username para pesquisa...");

  const submitGetUser = async () => {
    if (!usernameForSearch) return;

    let statusCode = await checkForUser(usernameForSearch);

    statusCode && handleStatusCode(statusCode)
  };

  const handleStatusCode = (statusCode) => {
    if (statusCode === 200) {
      setCurrentMessage("")
      return getUser(usernameForSearch);
    } else if (statusCode === 404) {
      setCurrentMessage("Usuário não encontrado.")
    } else {
      setCurrentMessage("Erro" + statusCode);
    }
  }


  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Digite o nome do usuário que deseja buscar"
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>
          <span>Buscar</span>
        </button>
      </S.Wrapper>
      <S.H1Wrapper>
        <h1>{currentMessage}</h1>
      </S.H1Wrapper>
    </header>
  );
};

export default Header;
