<template>
    <a class="navtab" @click="isClicked = !isClicked">
        {{ $t(getMainHeader) }}
        <ul class="dropdown" v-if="isClicked">
            <li class="dropdown-content" v-for="item in getSubHeading" :key="item">
                <router-link :to="item">
                    <img :src="require('@/assets/images/navigationBar/' + $t([reference, '.',item,'.icon'].join(''))).default" alt="image cant be displayed"/>
                    <h3 class="dropdown-title">{{ $t([reference, ".",item,".heading"].join('')) }} </h3>
                    <p class="dropdown-paragraph">{{ $t([reference, ".",item,".details"].join('')) }} </p>
                </router-link>
            </li>
        </ul>
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
.dropdown-content {
    vertical-align: middle;
    display: table-cell;
}
a {
    text-decoration: none;
}
.dropdown-title{
    color: #00a7ee;
    font-weight:bold;
}
.dropdown-paragraph{
    color: #2e3233;
    font: 1.3rem;
}
/* dropdown container */
.dropdown {
    position:absolute;
    display: table;
    background:white;
    padding: 48px 64px 130px;
    z-index: 0;
    width: 100vw;
    right: 0;
}

/* add background to navtab on hover */
a:hover {
    color: crimson;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
    color: blue;
    /* display: none; */
    /* position: absolute; */
}

router-link{
    text-decoration: none;
}
</style>