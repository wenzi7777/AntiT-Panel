<!--
 * @Author: NickXu
 * @LastEditors: NickXu <wenzi7777@icloud.com>
 * @Description: 遵守MPL2.0协议进行分发。
-->
<template>
  <div class="footer_container">
    <p class="footer_p">
      基于树莓派4B的antiT安全系统控制台由<a href="http://www.ijustknowyou.com"
        >Akari Tsukimoto</a
      >(wenzi7777@icloud.com)编写
    </p>
    <p v-if="this.$route.path != '/about'" class="footer_p">
      Proudly powered by Vue.js /// Made with LOVE❤️ by Akari
    </p>
    <p class="footer_p">在MPL2.0协议下，于Github开源</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>

<style scoped>
.footer_container {
  display: block;
  padding: 30px;
}
.footer_p {
  display: block;
  font-size: 1em;
  text-align: center;
  font-weight: 800;
}
</style>
