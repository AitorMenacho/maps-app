import { defineComponent, ref, watch } from 'vue';
import { usePlacesStore, useMapStore } from '@/composables';
import { Feature } from '@/interfaces/places';

export default defineComponent({
    name: 'SearchResults',
    setup() {

        const { isLoadingPlaces, places } = usePlacesStore()
        const { map, setPlaceMarkers } = useMapStore()

        const activePlace = ref('')

        watch( places, (newPlaces) =>  {
            activePlace.value = ''
            setPlaceMarkers( newPlaces )
        })

        return {
            isLoadingPlaces,
            places,
            activePlace,

            onPlaceClicked: ( place: Feature ) => {

                activePlace.value = place.id
                map.value.flyTo({
                    center: place.center,
                    zoom: 14
                })

            }

        }
    }
})