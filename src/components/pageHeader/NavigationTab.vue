<template>
    <div @mouseover="isHovered = true" @mouseleave="isHovered = false">

        <a>{{ $t(getMainHeader) }} </a>
        <ul id="subheadings" v-if="isHovered" @click="isHovered = false">
            <li v-for="item in getSubHeading" :key="item">
                <a id="subheading"> 
                    {{ $t([this.reference, ".",item,".heading"].join('')) }}
                <p>{{ $t([this.reference, ".",item,".details"].join('')) }} </p>
                </a>
            </li>
        </ul>
    </div>
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
            if (!this.reference) return "headerNotFound";         // ✅ Return an empty array if undefined
            return this.reference + ".mainHeading"
        },
        getSubHeading(): Array<string> {
            if (!this.subHeading) return ['SubheadingNotFound'];
            return this.subHeading as string[]
        }
    },
    data() {
        return {
            isHovered: "false"
        }
    }
})
</script>