<template>
    <a class="navTab" @click="toggleClicked">
        {{ $t(getMainHeader) }}
        <ul class="dropdown" v-if="isClicked == reference">
            <li class="dropdown-content" v-for="item in getSubHeading" :key="item">
                <router-link :to="item">
                    <img :src="require('@/assets/images/navigationBar/' + $t([reference, '.',item,'.icon'].join(''))).default" alt="image cant be displayed"/>
                    <h3 class="dropdown-title">{{ $t([reference, ".",item,".heading"].join('')) }} </h3>
                    <p class="dropdown-paragraph">{{ $t([reference, ".",item,".details"].join('')) }} </p>
                </router-link>
            </li>
        </ul>
        <fa icon ="chevron-right" v-if="isClicked == reference"/>
        <fa icon ="chevron-down" v-else/>
    </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "NavigationTab",
    props: {
        reference: String,
        subHeading: Array,
        isClicked: String
    },
    emits: ["clickedTab"],
    methods: {
        toggleClicked() {
            if(this.isClicked != this.reference){
                this.$emit("clickedTab", this.reference)
            } else {
                this.$emit("clickedTab", "")
            }
        }
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
        }
    }
})
</script>

<style scoped>
.navTab {
    margin-left: 35px;
}
.dropdown-content {
    vertical-align: middle;
    display: table-cell;
    color: blue;
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

router-link{
    text-decoration: none;
}
</style>