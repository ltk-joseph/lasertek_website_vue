<template>
    <div>
        <NavigationTab 
            :reference=aboutsTab.refernece
            :subHeading=aboutsTab.subHeading>
        </NavigationTab> | 
        <router-link to="/products">{{ $t("header.products.mainHeading") }}</router-link>
        <router-link to="/news">{{ $t("header.news") }}</router-link>
        <NavigationTab 
            :reference=socialRespTab.refernece
            :subHeading=socialRespTab.subHeading>
        </NavigationTab> | 
        <NavigationTab 
            :reference=investServicesTab.refernece
            :subHeading=investServicesTab.subHeading>
        </NavigationTab> | 
        <NavigationTab 
            :reference=managementTab.refernece
            :subHeading=managementTab.subHeading>
        </NavigationTab> | 
        <NavigationTab 
            :reference=humanResourceTab.refernece
            :subHeading=humanResourceTab.subHeading>
        </NavigationTab> | 
        <NavigationTab 
            :reference=staffTab.refernece
            :subHeading=staffTab.subHeading>
        </NavigationTab> | 
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
            },
            productTab: {
                department: "header.products",
                subDeptartment: []
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