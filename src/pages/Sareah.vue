<template>
  <div>
  </div>
</template>

<script setup>
// import BaseSheet4 from 'components/BaseSheet4';
import { useStore } from 'vuex';

const store = useStore();

console.log(store);

</script>

<style scoped lang="scss">

#page {
  text-shadow: 2px 2px 4px #000000;
  color: white;
  text-align: left;
  align-items: baseline;
  padding: 1vmin;
  background-image: url("../assets/sareah_placeholder.png");
  background-repeat: no-repeat;

  background-size: 100vmax;
  background-position: 50% 50%;
  background-attachment: fixed;
  justify-content: space-between;

}
</style>
