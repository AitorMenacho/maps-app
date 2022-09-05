import { defineComponent, ref } from 'vue';
import { usePlacesStore, useMapStore } from '@/composables';
import { Feature } from '@/interfaces/places';

export default defineComponent({
    name: 'SearchResults',
    setup() {

        const { isLoadingPlaces, places } = usePlacesStore()
        const { map } = useMapStore()
        const activePlace = ref('')

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