<template>
    <a class="navtab" @click="isClicked = !isClicked">
        {{ $t(getMainHeader) }}
        <div class="dropdown" v-if="isClicked">
            <div class="dropdown-content" v-for="item in getSubHeading" :key="item">
                <router-link :to="item">
                    <h3>{{ $t([reference, ".",item,".heading"].join('')) }} </h3>
                    <p>{{ $t([reference, ".",item,".details"].join('')) }} </p>
                </router-link>
            </div>
        </div>
        <fa icon ="chevron-right" v-if="isClicked"/>
        <fa icon ="chevron-down" v-else/>
    </a>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "NavigationTab",
    props: {
        reference: String,
        subHeading: Array
    },

    computed: {
        getMainHeader(): string {
            if (!this.reference) return "headerNotFound";
            return this.reference + ".mainHeading"
        },
        getSubHeading(): Array<string> {
            if (!this.subHeading) return ['SubheadingNotFound'];
            return this.subHeading as string[]
        }
    },
    data() {
        return {
            isClicked: false
        }
    }
})
</script>

<style scoped>

/* links inside the navbar */
.navtab {
    /* float: left;
    text-align: center; */
}
/* dropdown container */
.dropdown {
    float: left;
    overflow: hidden;
}

/* add background to navtab on hover */
a:hover {
    color: crimson;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
    /* display: none; */
    /* position: absolute; */
    z-index: 1;
}
</style>