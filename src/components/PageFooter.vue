<template>
  <div id="pageFooter">
    <div id="copyright">
      <p>Copyright© LaserTek Taiwan Co.,Ltd.</p>
      <p>
        雷科股份有限公司 |
        <a
          href="http://www.lasertek.com.tw/lasertek/company_privacy_policy.php"
          >{{ $t("footer.privacy") }}</a
        >
      </p>
    </div>
    <div id="contact">
      <p>
        80672 高雄市前鎮區新生路248之39號 |
        <a href="http://www.lasertek.com.tw/lasertek/company_office.php">{{
          $t("footer.locations")
        }}</a>
      </p>
      <p>【 TEL 】07-815-9877 【 FAX 】07-815-6711</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "PageFooter",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#pageFooter {
  display: flex;
  align-items: center;
  background-color: #d7d7d7;
}
#copyright {
  width: 50%;
  text-align: center;
}
#contact {
  width: 50%;
  text-align: center;
}
</style>