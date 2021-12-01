import axios from "axios";

const PinnedRepos = axios.create({
    baseURL: "https://gh-pinned-repos-5l2i19um3.vercel.app/?username=",
});


export default PinnedRepos;