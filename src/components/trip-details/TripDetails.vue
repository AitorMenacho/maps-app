
<template>
  <div v-if="tiempo != undefined" class="trip-container column">
    <div class="col">
      Distancia: <strong>{{ distance }} Kms</strong>
    </div>
    <div class="col">
      Duración: <strong>{{ tiempo }}</strong>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMapStore } from "@/composables";

export default defineComponent({
  name: "TripDetails",
  setup() {
    const { distance, tiempo } = useMapStore();

    return {
      distance,
      tiempo,
    };
  },
});
</script>

<style scoped>
.trip-container {
  padding: 10px;
  position: fixed;
  bottom: 50px;
  left: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  font-size: 25px;
  width: 350px;
}

strong {
  color: #42b983;
}
</style>>