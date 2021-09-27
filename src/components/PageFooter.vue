<template>
  <footer>
    <div id="pageFooter">
      <div id="copyright">
        <p>Copyright© LaserTek Taiwan Co.,Ltd.</p>
        <p>
          雷科股份有限公司 |
          <a
            href="http://www.lasertek.com.tw/lasertek/company_privacy_policy.php"
            >{{ $t("footer.terms_conditions") }}</a
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
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "PageFooter",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  width: 100%;
  align-items: center;
  background-color: rgb(215,215,215);
}
#pageFooter {
  width: 100%;
  background-color: rgb(215,215,215);
  margin: 0px auto;
  /* padding: 20px 0px; */
  float: left;

}
#copyright {
  width: 50%;
  float: left;
  text-align: center;
}
#contact {
  width: 50%;
  float: right;
  text-align: center;
}
</style>