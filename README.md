## Search Github Users

This project was created as part of [DIO's](https://www.dio.me/) fullstack developer bootcamp. Its idea is to allow for github users search, retrieving the following data:
 - User info (username, company, location, blog, followers, followings, gists, repos)
 - User respositories
 - User starred repositories
 - User pinned repositories
 
 The base project was forked from [benits](https://github.com/benits/github-api-interface). It also uses an api created by [egoist](https://github.com/egoist/gh-pinned-repos).
 
 The project is live at: https://github-api-repos-starred-pinned.netlify.app/


## About the project

This project was built using [React](https://reactjs.org) with [create-react-app](https://create-react-app.dev/). It uses [axios](https://axios-http.com/) to fetch data from [Github's](https://api.github.com/) and [egoist's](https://github.com/egoist/gh-pinned-repos) APIs.

### React hooks used
- [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext) (along with [createContext](https://reactjs.org/docs/context.html#reactcreatecontext))
- [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
- [useState](https://reactjs.org/docs/hooks-reference.html#usestate)
- [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)

### Layout

Layout was built using [styled components](https://styled-components.com/)
