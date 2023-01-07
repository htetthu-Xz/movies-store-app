<template>
    <div :style="{
            backgroundImage:`linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),
                            url(https://image.tmdb.org/t/p/original${movies.moviesDetails.backdrop_path})`}" 
    >
        <div class="container"> 

            <div class="row">
                <div class="col-lg-4 col-sm-12 posterPic">
                    <img :src="'https://image.tmdb.org/t/p/original' + movies.moviesDetails.poster_path" class="poster mt-5">
                </div>
                <div class="col-lg-8 col-sm-12 detailCol">
                    <div class="header">
                        <h2 class="mt-5">
                            <a :href= "movies.moviesDetails.homepage">
                                {{ movies.moviesDetails.original_title }}
                            </a>
                            ( {{ moment(movies.moviesDetails.release_date).format( 'YYYY') }} )
                        </h2>
                    </div>
                    <div v-if="movies.moviesDetails.adult">
                        Adult
                    </div>
                    <div class="detail">
                        <p v-for="genre in movies.genres" :key="genre.id">
                            {{ genre.name }}
                        </p>
                        <span class="duration">
                            <i class="ri-time-line"></i>  
                            {{ Math.round(movies.moviesDetails.runtime / 60) }} h {{ Math.round(movies.moviesDetails.runtime % 60) }} m
                        </span>
                    </div>
                    <div class="release-date mt-4">
                        Language : {{ movies.moviesDetails.original_language }}
                    </div>
                    <div class="language mt-1">
                        <i class="ri-calendar-2-line"></i>
                        Release Date : {{ moment(movies.moviesDetails.release_date).format( 'ddd - d MMM  YYYY') }}
                    </div>
                    <div class="popularity mt-1">
                        Popularity :
                        {{ movies.moviesDetails.popularity }}
                    </div>
                    <div class="budget mt-1">
                        Budget : 
                        {{ movies.moviesDetails.budget }}
                    </div>
                    <div class="status mt-1">
                        Status :
                        {{ movies.moviesDetails.status }}
                    </div>
                    <div class="small-detail mt-3">
                        <div class="score">
                            <span class="mb-2">
                                User Score
                            </span> 
                            <div class="btn-list">
                                <div class="radial">
                                    <RadialProgress 
                                        :diameter="70"
                                        :completed-steps=movies.moviesDetails.vote_average
                                        :total-steps="totalSteps"
                                        :innerStrokeWidth="5"
                                        :strokeWidth="5"
                                    >
                                        <div class="rating">
                                            {{ Math.round(movies.moviesDetails.vote_average * 10) }} %
                                        </div>
                                    </RadialProgress>
                                </div>
                                <div class="mt-4">
                                    <i class="ri-list-check add-to-list" data-toggle="tooltip" data-placement="bottom" 
                                        title="Add To Watch List"></i> 
                                </div>
                                <div class="mt-4">
                                    <i class="ri-heart-line add-to-list" data-toggle="tooltip" data-placement="bottom" 
                                        title="Vote"></i> 
                                </div>
                                <div class="mt-4">
                                    <i class="ri-bookmark-line add-to-list" data-toggle="tooltip" data-placement="bottom" 
                                        title="Bookmark"></i>  
                                </div>
                                <div class="mt-4">
                                    <i class="ri-play-line trailer ml-3" data-toggle="tooltip" data-placement="bottom" 
                                        title="Play Trailer" @click="showTrailer()"></i>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="overview mt-4 mb-5">
                        <h4 class="overview-header">Overview</h4>
                        {{ movies.moviesDetails.overview }}
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import moment from 'moment'
import RadialProgress from "vue3-radial-progress"
import { useFlash } from '@/composables/useFlash'
import { useMoviesStore } from "@/stores/MoviesStore";

    export default {
        data() {
            return {
                key:{},
                data:[],
                moment: moment,
                genres: null,
                completedSteps: 0,
                totalSteps: 10,
                moveId: this.$route.params.id
            }
        },

        setup () {
            let {showTrailerFlash} = useFlash()
            const movies = useMoviesStore()
            return {showTrailerFlash, movies}
        },

        methods: {
            showTrailer() {
                const trailerArr = this.movies.trailerVideo.filter( trailer => trailer.type == 'Trailer' )
                const useTrailer = trailerArr[0]
                this.showTrailerFlash(useTrailer.key)
            }
        },

        mounted() {
            this.movies.getDetail(this.moveId)
            this.movies.getTrailer(this.moveId)
        },

        components: {
            RadialProgress
        }

    }
</script>
<style scoped>

.bg-cl {
    height: auto;
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
    background-size: cover;
    background-color: rgb(15 23 42);
}

.poster {
    width: 300px;
    height: 450px;
    border-radius: 10px;
}
.detailCol h2,a{
    color: #28bab0;
}
.detailCol a:hover {
    color: #349690;
    text-decoration: none;
}

.posterPic img{
    box-shadow: 3px 0px 5px 0px rgba(0, 0, 0, 0.3);
}

.detail p {
    display: inline;
    border: 1px solid rgb(200, 200, 200, 0.84);
    color: rgb(200, 200, 200, 0.84);
    margin-right: 10px;
    padding: 5px;
    font-size: 12px;
}

.duration {
    color: #bebebe;
}

.detail p:hover {
    border: 1px solid rgb(255, 255, 255);
    color: rgb(255, 255, 255);
}

.language,.release-date,.popularity,.status,.budget {
    color: #bebebe;
}

.score {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    color: rgb(224, 224, 224);
}

.radial {
    font-size: 12px;
}

.small-detail {
    display: flex;
    justify-content: space-between;

}

.btn-list {
    display: flex;
    justify-content: space-between;
}

.add-to-list {
    border: 1px solid #31807a;
    width: 40px;
    height: 43px;
    padding: 10px;
    border-radius:60%;
    margin-left: 20px;
    background-color: rgb(4, 16, 46);
    color: #1ed1c5;
    cursor: pointer;
}

.add-to-list:hover {
    background-color: #31807a;
    color: #b09191;
    transition: 0.2s;
}

.trailer {
    color: #796f6f;
    font-size: 22px;
    cursor: pointer;
}

.overview {
    color:#bebebe
}

.overview-header {
    color: rgb(224, 224, 224);;
}

@media (max-width: 412px) {
    .posterPic {
        text-align: center;
    }
}
</style>