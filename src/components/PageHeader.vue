<template>
  <header>
    <a class="header_logo" href="/">
      <img
        class="LasertekHeader"
        src="../assets/images/header/lasertek_logo.svg"
      />
    </a>
    <nav>
      <div id="language">
        |
        <a
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          v-on:click="changeLanguage(`${locale}`)"
        >
          {{ language[locale] }} |
        </a>
      </div>
      <div id="menu">
        <NavigationBar></NavigationBar>

        <router-link to="/products">{{ $t("header.products") }}</router-link> |
        <router-link to="/news">{{ $t("header.news") }}</router-link> |
        <router-link to="/social_responsibilities">{{
          $t("header.social_responsibilities")
        }}</router-link>
        |
        <router-link to="/investment_services">{{
          $t("header.investment_services")
        }}</router-link>
        |
        <router-link to="/management">{{
          $t("header.management")
        }}</router-link>
        | <router-link to="/hr">{{ $t("header.hr") }}</router-link> |
        <router-link to="/staff">{{ $t("header.staff") }}</router-link> |
      </div>
    </nav>
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
header {
  border-bottom: 1px solid rgb(107, 107, 107);
  display: flex;
}

nav {
  position: relative;
  margin-left: auto;
}

#language {
  font-size: 0.7em;
  /* margin: 8px 30px -4px 0px; */
  letter-spacing: 10px;
  text-align: right;
}
</style>