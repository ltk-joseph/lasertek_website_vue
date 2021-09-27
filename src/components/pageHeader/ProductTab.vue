<template>
    <a class="prodTab" @click="isClicked = !isClicked">
        <a>{{ $t(getMainHeader) }} </a>
        <div class="dropdown" v-if="isClicked">
            <div class="dropdown-content" v-for="dept in getDepartment" :key="dept">
                <router-link :to="dept.department">
                    <h3>{{ $t([reference, ".", dept.department, ".subHeading"].join('')) }} </h3>
                </router-link>
                <div class="dropdown-two" v-for="(item,index) in dept.productCount" :key="index">
                    <h4> {{$t([reference, '.', dept.department ,'.subDepartment[', index ,'].product'].join(''))}}</h4>
                    <div class="dropdown-two-content" v-for="i in item" :key="i">
                        <p> {{$t([reference, '.', dept.department ,'.subDepartment[', index ,'].subProducts[',i - 1,']'].join(''))}}</p>
                    </div>
                </div>
            </div>
        </div>
        <fa icon ="chevron-right" v-if="isClicked"/>
        <fa icon ="chevron-down" v-else/>
    </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "ProductTab",
    props: {
        reference: String,
        departments: Array
    },
    computed: {
        getMainHeader(): string {
            if (!this.reference) return "headerNotFound";         // ✅ Return an empty array if undefined
            return this.reference + ".mainHeading"
        },
        getDepartment(): unknown {
            console.log(this.departments)
            return this.departments
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
    position:fixed;
    display: block;
    background:yellow;
    padding: 48px 64px 130px;
    z-index: 0;
}

/* add background to navtab on hover */
a:hover {
    color: crimson;
}

router-link{
    text-decoration: none;
}
</style>