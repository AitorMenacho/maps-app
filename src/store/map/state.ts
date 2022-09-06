import Mapboxgl from 'mapbox-gl';

export interface MapState {
    map ?: Mapboxgl.Map;
    markers : Mapboxgl.Marker[];
    distance ?: number;
    duration ?: number;
    tiempo ?: string;
}

function state(): MapState {
    return {
        map: undefined,
        markers: [],
        distance: undefined,
        duration: undefined,
        tiempo: undefined,
    }
}

export default state;