<template>
    <div>
        <NavigationTab 
            :reference=aboutsTab.refernece
            :subHeading=aboutsTab.subHeading>
        </NavigationTab>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationTab from "./NavigationTab.vue"
export default defineComponent({
    name: "NavigationBar",
    components: {
        NavigationTab
    },
    data() {
        return {
            aboutsTab: {
                refernece: "header.abouts",
                subHeading: ["aboutUs", "history", "retrospect", "team", "locations", "certifications"]
            }
        }
    }
});
</script>

<style scoped>
#menu {
  margin-top: 3%;
}
#menu a {
  font-size: 16px;
  font-weight: bold;
  color: #2c3e50;
}
#menu a.router-link-exact-active {
  color: #db1313;
}
#subheadings {
    list-style-type:none;
}
</style>