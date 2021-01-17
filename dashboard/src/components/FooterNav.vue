<!--
 * @Author: NickXu
 * @LastEditors: NickXu <wenzi7777@icloud.com>
 * @Description: 遵守MPL2.0协议进行分发。
-->
<template>
  <div class="footerNav_container">
    <li class="footerNav_li">
      <div @click="GoTo(1)">
        <span v-if="homePageFlag" class="footerNav_tick"
          >✔<span style="color: '#39c5bb'">主页</span></span
        ><span v-if="!homePageFlag">主页</span>
      </div>
    </li>
    <li class="footerNav_li">
      <div @click="GoTo(2)">
        <span v-if="settingsFlag" class="footerNav_tick"
          >✔<span style="color: '#39c5bb'">设定</span></span
        ><span v-if="!settingsFlag">设定</span>
      </div>
    </li>
    <li class="footerNav_li">
      <div @click="GoTo(3)">
        <span v-if="galleryFlag" class="footerNav_tick"
          >✔<span style="color: '#39c5bb'">图库</span></span
        ><span v-if="!galleryFlag">图库</span>
      </div>
    </li>
    <li class="footerNav_li">
      <div @click="GoTo(4)">
        <span v-if="logsFlag" class="footerNav_tick"
          >✔<span style="color: '#39c5bb'">日志</span></span
        ><span v-if="!logsFlag">日志</span>
      </div>
    </li>
    <li class="footerNav_li">
      <div @click="GoTo(5)">
        <span v-if="statusFlag" class="footerNav_tick"
          >✔<span style="color: '#39c5bb'">状态</span></span
        ><span v-if="!statusFlag">状态</span>
      </div>
    </li>
    <li class="footerNav_li">
      <div @click="GoTo(6)">
        <span v-if="aboutFlag" class="footerNav_tick"
          >✔<span style="color: '#39c5bb'">关于</span></span
        ><span v-if="!aboutFlag">关于</span>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "FooterNav",
  data() {
    return {
      homePageFlag: false,
      settingsFlag: false,
      galleryFlag: false,
      logsFlag: false,
      statusFlag: false,
      aboutFlag: false,
    };
  },
  mounted() {
    switch (this.$route.path) {
      case "/dashboard":
        this.homePageFlag = true;
        this.settingsFlag = false;
        this.galleryFlag = false;
        this.logsFlag = false;
        this.statusFlag = false;
        this.aboutFlag = false;
        break;
      case "/settings":
        this.homePageFlag = false;
        this.settingsFlag = true;
        this.galleryFlag = false;
        this.logsFlag = false;
        this.statusFlag = false;
        this.aboutFlag = false;
        break;
      case "/gallery":
        this.homePageFlag = false;
        this.settingsFlag = false;
        this.galleryFlag = true;
        this.logsFlag = false;
        this.statusFlag = false;
        this.aboutFlag = false;
        break;
      case "/logs":
        this.homePageFlag = false;
        this.settingsFlag = false;
        this.galleryFlag = false;
        this.logsFlag = true;
        this.statusFlag = false;
        this.aboutFlag = false;
        break;
      case "/status":
        this.homePageFlag = false;
        this.settingsFlag = false;
        this.galleryFlag = false;
        this.logsFlag = false;
        this.statusFlag = true;
        this.aboutFlag = false;
        break;
      case "/about":
        this.homePageFlag = false;
        this.settingsFlag = false;
        this.galleryFlag = false;
        this.logsFlag = false;
        this.statusFlag = false;
        this.aboutFlag = true;
        break;
      default:
        alert("找不到路由路径(Error0x001)");
        this.homePageFlag = true;
        this.settingsFlag = false;
        this.galleryFlag = false;
        this.logsFlag = false;
        this.statusFlag = false;
        this.aboutFlag = false;
        break;
    }
  },
  methods: {
    GoTo: function (way) {
      switch (way) {
        case 1:
          this.$router.push("/dashboard");
          this.UpdateNav(this.$route.path);
          break;
        case 2:
          this.$router.push("/settings");
          this.UpdateNav(this.$route.path);
          break;
        case 3:
          this.$router.push("/gallery");
          this.UpdateNav(this.$route.path);
          break;
        case 4:
          this.$router.push("/logs");
          this.UpdateNav(this.$route.path);
          break;
        case 5:
          this.$router.push("/status");
          this.UpdateNav(this.$route.path);
          break;
        case 6:
          this.$router.push("/about");
          this.UpdateNav(this.$route.path);
          break;
        default:
          this.$router.push("/dashboard");
          this.UpdateNav(this.$route.path);
          break;
      }
    },
    UpdateNav: function (path) {
      console.log(1);
      switch (path) {
        case "/dashboard":
          this.homePageFlag = true;
          this.settingsFlag = false;
          this.galleryFlag = false;
          this.logsFlag = false;
          this.statusFlag = false;
          this.aboutFlag = false;
          break;
        case "/settings":
          this.homePageFlag = false;
          this.settingsFlag = true;
          this.galleryFlag = false;
          this.logsFlag = false;
          this.statusFlag = false;
          this.aboutFlag = false;
          break;
        case "/gallery":
          this.homePageFlag = false;
          this.settingsFlag = false;
          this.galleryFlag = true;
          this.logsFlag = false;
          this.statusFlag = false;
          this.aboutFlag = false;
          break;
        case "/logs":
          this.homePageFlag = false;
          this.settingsFlag = false;
          this.galleryFlag = false;
          this.logsFlag = true;
          this.statusFlag = false;
          this.aboutFlag = false;
          break;
        case "/status":
          this.homePageFlag = false;
          this.settingsFlag = false;
          this.galleryFlag = false;
          this.logsFlag = false;
          this.statusFlag = true;
          this.aboutFlag = false;
          break;
        case "/about":
          this.homePageFlag = false;
          this.settingsFlag = false;
          this.galleryFlag = false;
          this.logsFlag = false;
          this.statusFlag = false;
          this.aboutFlag = true;
          break;
        default:
          alert("找不到路由路径(Error0x001)");
          this.homePageFlag = true;
          this.settingsFlag = false;
          this.galleryFlag = false;
          this.logsFlag = false;
          this.statusFlag = false;
          this.aboutFlag = false;
          break;
      }
    },
  },
};
</script>

<style scoped>
.footerNav_container {
  display: block;
  width: 70%;
  margin: 2% auto;
}
.footerNav_li {
  display: inline-block;
  font-weight: 800;
  width: 16%;
  text-align: center;
  font-size: 1em;
  cursor: pointer;
}
.footerNav_tick {
  font-weight: 800;
  display: inline-block;
  margin-right: 5px;
  color: rgb(132, 194, 39);
  font-size: 1em;
}
</style>
