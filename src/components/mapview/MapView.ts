import { defineComponent, ref, onMounted, watch } from "vue";
import { usePlacesStore } from "@/composables/usePlacesStore";
import Mapboxgl from "mapbox-gl";

export default defineComponent({
  name: "MapView",
  setup() {
    const mapElement = ref<HTMLDivElement>();
    const { userLocation, isUserLocationReady } = usePlacesStore();

    const initMap = async() => {
      if (!mapElement.value) throw new Error("Div Element no exist");
      if (!userLocation.value) throw new Error("user location no exist");

      await Promise.resolve()

      const map = new Mapboxgl.Map({
        container: mapElement.value, // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: userLocation.value,
        zoom: 15, // starting zoom
      });
      map.on("style.load", () => {
        map.setFog({}); // Set the default atmosphere style
      });

      const myLocationPopup = new Mapboxgl.Popup()
        .setLngLat( userLocation.value )
        .setHTML(``)

      const myLocationMarker = new Mapboxgl.Marker()
        .setLngLat( userLocation.value )
        .addTo( map )

    };

    onMounted(() => {
      if (isUserLocationReady.value) return initMap();
    });

    watch(isUserLocationReady, (newVal) => {
      if (isUserLocationReady.value) initMap();
    });

    return {
      isUserLocationReady,
      mapElement,
    };
  },
});
