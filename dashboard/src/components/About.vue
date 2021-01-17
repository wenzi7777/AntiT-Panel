<!--
 * @Author: NickXu
 * @LastEditors: NickXu <wenzi7777@icloud.com>
 * @Description: 遵守MPL2.0协议进行分发。
-->
<template>
  <div class="about_container">
    <h1 class="about_h1">关于</h1>
    <li class="about_l1">
      主要开发：<a href="http://www.ijustknowyou.com/">Akari Tsukimoto</a>
    </li>
    <li class="about_l1">
      软件编写：<a href="http://www.ijustknowyou.com/">Akari Tsukimoto</a>
    </li>
    <li class="about_l1">
      技术测试：<a href="http://www.ijustknowyou.com/">Akari Tsukimoto</a>
    </li>
    <li class="about_l1">
      硬件测试：<a href="http://www.ijustknowyou.com/">Akari Tsukimoto</a>
    </li>
    <p class="about_p" style="font-size: 1.5em; color: rgb(65, 225, 164); margin: 0;">项目开源于<a href="">此处</a></p>
    <p class="about_p">
      Made With LOVE❤️ By Akari Tsukimoto, All Right
      <i style="color: #39c5bb">Not</i> Reserved!
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  },
};
</script>

<style scoped>
.about_h1 {
  font-size: 2em;
  font-weight: 800;
  text-align: center;
}
.about_l1 {
  display: inline-block;
  width: 48%;
  font-size: 1.5em;
  font-weight: 800;
  list-style: none;
  text-align: center;
  margin: 10px 0;
}
.about_p {
  color: royalblue;
  font-weight: 800;
  font-size: 2em;
  text-align: center;
}
</style>