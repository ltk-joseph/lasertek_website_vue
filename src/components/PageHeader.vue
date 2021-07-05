<template>
<h1>
  <img class="LasertekHeader" src="../assets/images/headerImage.jpeg">
</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageHeader',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  IMG.LasertekHeader {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
  h1 {
    width: 100%;

  }
</style>
