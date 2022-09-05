import axios from "axios";


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoibWVuYWNob2FpdG9yIiwiYSI6ImNsN25sa2FyNzFjYnkzbnF6dmh0bjlhaGEifQ.OmIlPs_ouGWBBqmMGjI_-g'
    }
})

export default directionsApi

