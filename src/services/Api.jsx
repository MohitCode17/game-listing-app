import axios from "axios";

const key = "b5cd27131c6d4c65b0a859fc96ddbd7f";

const axiosCreate = axios.create({
    baseURL: "https://api.rawg.io/api"
});

const getGenreList = axiosCreate.get('/genres?key='+key);
const getAllGames = axiosCreate.get('/games?key='+key);

export default{
    getGenreList,
    getAllGames,
}