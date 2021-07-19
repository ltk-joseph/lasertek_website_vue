<template>
  <PageHeader></PageHeader>
  <router-view />
  <PageFooter></PageFooter>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import PageHeader from "@/components/PageHeader.vue"; // @ is an alias to /src
import PageFooter from "@/components/PageFooter.vue";

export default defineComponent({
  name: "app",
  components: {
    PageHeader,
    PageFooter,
  },
});
</script>


<style>
#app {
  border-left: 8px solid red;
  font-family: "Noto Sans TC", 微軟正黑體, sans-serif;
  /* font-size: 1.6rem; */
  color: rgb(46, 50, 51);
  background-color: rgb(255, 255, 255);
  overflow-x: hidden;
  letter-spacing: 1.5px;
}

body {
  margin: 0;
}
</style>