import axios from "axios";


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        langguage: 'es',
        access_token: 'pk.eyJ1IjoibWVuYWNob2FpdG9yIiwiYSI6ImNsN25sa2FyNzFjYnkzbnF6dmh0bjlhaGEifQ.OmIlPs_ouGWBBqmMGjI_-g'
    }
})

export default searchApi

