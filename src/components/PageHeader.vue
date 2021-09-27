<template>
  <header class="cd-main-header">
    <!-- Language Header Options -->
    <div id="language">|
      <a
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        v-on:click="changeLanguage(`${locale}`)"
      >
        {{ language[locale] }} |
      </a>
    </div>
    <!-- Lasertek logo -->
    <a class="cd-header_logo" href="/"> <img src="../assets/images/header/lasertek_logo.svg"></a>
    <!-- Navigation Bar -->
    <NavigationBar></NavigationBar>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "@/components/pageHeader/NavigationBar.vue"; // @ is an alias to /src
export default defineComponent({
  name: "PageHeader",
  components: {
    NavigationBar
  },
  data() {
    return {
      language: {
        en: "EN",
        zh: "繁體",
      },
    };
  },
  methods: {
    changeLanguage: function (language: string) {
      this.$i18n.locale = language;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cd-main-header {
  position: relative;
  width: 100%;
  border-bottom: 1px solid rgb(107, 107, 107);
}

#language {
  font-size: 0.7em;
  margin: 8px 30px -4px 0px;
  text-align: right;
  letter-spacing: 10px;
  display: block;
  width: 100%;
  height: 0;
}

.cd-header_logo {
  display: inline-block;
  top: -3px;
}
</style>