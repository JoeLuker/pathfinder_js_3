<template>
  <q-page className="row items-center justify-evenly">
    <q-knob
      show-value
      :min="0"
      :max="120"
      class="text-light-blue q-ma-md"
      v-model="myNumber"
      size="50px"
      :color="myColor"
      :track-color="myTrackColor"
    />
  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const myNumber = ref(120);
    const myColor = computed(() => (myNumber.value >= 30 ? 'blue' : 'red'));
    const myTrackColor = computed(() => `${myColor.value}-3`);

    return {
      myNumber,
      myColor,
      myTrackColor,
    };
  },
});

</script>
