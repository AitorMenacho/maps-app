import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = 'pk.eyJ1IjoibWVuYWNob2FpdG9yIiwiYSI6ImNsN25sa2FyNzFjYnkzbnF6dmh0bjlhaGEifQ.OmIlPs_ouGWBBqmMGjI_-g';

if( !navigator.geolocation ) {

    throw new Error('Tu navegador no soporta el GeoLocation')

}

createApp(App).use(store).use(router).mount('#app')
