<template>
    <nav class="navBar">
        <NavigationTab 
            :reference=aboutsTab.refernece
            :subHeading=aboutsTab.subHeading
            :isClicked=isClicked
            @clickedTab="onClickedTab">
        </NavigationTab>
        <ProductTab 
            :reference=productTab.reference
            :departments=productTab.departments
            :isClicked=isClicked
            @clickedTab="onClickedTab">
        </ProductTab>
        <a class="latestNews" @click="minimiseTab">
            <router-link to="/news">
                {{ $t("header.news") }}
            </router-link>
        </a>
        <NavigationTab 
            :reference=socialRespTab.refernece
            :subHeading=socialRespTab.subHeading
            :isClicked=isClicked
            @clickedTab="onClickedTab">
        </NavigationTab>
        <NavigationTab 
            :reference=investServicesTab.refernece
            :subHeading=investServicesTab.subHeading
            :isClicked=isClicked
            @clickedTab="onClickedTab">
        </NavigationTab> 
        <NavigationTab 
            :reference=managementTab.refernece
            :subHeading=managementTab.subHeading
            :isClicked=isClicked
            @clickedTab="onClickedTab">
        </NavigationTab>
        <NavigationTab 
            :reference=humanResourceTab.refernece
            :subHeading=humanResourceTab.subHeading
            :isClicked=isClicked
            @clickedTab="onClickedTab">
        </NavigationTab>
        <NavigationTab 
            :reference=staffTab.refernece
            :subHeading=staffTab.subHeading
            :isClicked=isClicked
            @clickedTab="onClickedTab">
        </NavigationTab> 
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationTab from "./NavigationTab.vue"
import ProductTab from "./ProductTab.vue"
export default defineComponent({
    name: "NavigationBar",
    components: {
        NavigationTab, ProductTab
    },
    methods: {
        onClickedTab(reference: string){
            console.log("on ClickedTab Triggered");
            this.isClicked = reference;
        },
        minimiseTab(){
            this.isClicked = "";
        }
    },
    data() {
        return {
            isClicked: "",
            aboutsTab: {
                refernece: "header.abouts",
                subHeading: ["aboutUs", "history", "retrospect", "team", "locations", "certifications"]
            },
            productTab: {
                reference: "header.products",
                departments: [
                    { department: "SMT",
                      productCount: [2,4,0,0]
                    },
                    { department: "SMD",
                      productCount: [0,0,0,0]
                    },
                    { department: "Laser",
                      productCount: [4,0,0,0,0]
                    },
                    { department: "Renewable",
                      productCount: [0,0,0,0,0,0]
                    }
                ]
            },
            socialRespTab: {
                refernece: "header.social_responsibilities",
                subHeading: ["social_involvements","stakeholder", "csr_report"]
            },
            investServicesTab: {
                refernece: "header.investment_services",
                subHeading: ["financial_information","shareholders_information", "investment_service", "investment_q_n_a"]
            },
            managementTab: {
                refernece: "header.management",
                subHeading: ["corporate_structure","boards", "internal_audit", "corporate_information"]
            },
            humanResourceTab: {
                refernece: "header.hr",
                subHeading: ["hr_policy","welfare", "training_development", "retirement", "hr_faq","job_opportunities","interview_process"]
            },
            staffTab: {
                refernece: "header.staff",
                subHeading: ["mail","overseas_video", "domestic_video", "employee_factory_day", "year_end_event","other_event"]
            },

        }
    }
});
</script>

<style scoped>
.navBar {
    position:static;
    padding: 60px 50px 0px 0px;
    max-height: inherit;
    height: auto;
    width: auto;
    float: right;
    overflow: visible;
    text-align: right;
    background: transparent;
    bottom: 0;
}
.navBar a.router-link-exact-active {
  color: #db1313;
}
.latestNews{
    margin-left: 35px;
}
a {
    text-decoration: none;
    color: black;
}

/* add background to navtab on hover */
a:hover {
    color: crimson;
}
</style>