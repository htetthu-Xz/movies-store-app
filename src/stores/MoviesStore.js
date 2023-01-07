import { defineStore } from 'pinia'
import axios from 'axios'

export const useMoviesStore = defineStore('movies', {
    state: () => ({
        data: {},
        moviesDetails: {},
        trailerVideo:[],
        genres: null
    }),
    actions: {
        getData(page) {
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.VUE_APP_MOVIE_API_KEY}&page=${page}`)
                .then((res) => {
                    const finalRes =  res.data;
                    this.data = finalRes;
                })
            },
            getDetail(id) {
                axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.VUE_APP_MOVIE_API_KEY}`)
                    .then((res) => {
                        const finalResult =  res.data;
                        this.moviesDetails = finalResult;
                        this.genres = this.moviesDetails.genres
                    }
            )},
            getTrailer(mid) {
                axios.get(`https://api.themoviedb.org/3/movie/${mid}/videos?api_key=${process.env.VUE_APP_MOVIE_API_KEY}`)
                    .then((res) => {
                        const finalRest =  res.data;
                        this.trailerVideo = finalRest.results;
                    }
            )},
    }
})