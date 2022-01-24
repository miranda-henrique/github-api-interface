import axios from "axios";

const PinnedRepos = axios.create({
    baseURL: "https://gh-pinned-repos.egoist.sh/?username=",
});


export default PinnedRepos;