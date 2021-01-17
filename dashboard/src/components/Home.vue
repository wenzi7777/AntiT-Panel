<!--
 * @Author: NickXu
 * @LastEditors: NickXu <wenzi7777@icloud.com>
 * @Description: 遵守MPL2.0协议进行分发。
-->
<template>
  <div class="home_container">
    <h1 class="home_h1">基于树莓派4B的AntiT安全系统</h1>
    <h2 class="home_h2"><i>控制台</i></h2>
    <div class="home_grids">
      <div class="home_grids_inside">已监测到</div>
      <div class="home_grids_inside">系统状态</div>
      <div class="home_grids_inside">IP地址</div>
      <div class="home_grids_inside">工作延迟</div>
    </div>
    <div class="home_warning_container">
      <div class="home_warning_box">
          <p class="home_h2" style="color: rgb(112, 64, 0); padding: 5%;">监控状态 : <i style="color: black;">{{status}}</i></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
        status: "一切正常"
    };
  },
};
</script>

<style scoped>
.home_container {
  display: block;
  width: 80%;
  margin: 0.5% auto;
}
.home_h1 {
  display: block;
  text-align: center;
  font-weight: 800;
  font-size: 2em;
}
.home_h2 {
  display: block;
  text-align: center;
  font-weight: 400;
  font-size: 1.7em;
}
.home_grids {
  display: block;
  height: 100%;
  padding: 5px;
}
.home_grids_inside {
  display: inline-block;
  width: 24.5%;
  height: 100%;
  box-sizing: border-box;
  background-color: rgb(197, 197, 197);
  padding: 10px;
  border-radius: 5px;
  margin-top: 5px;
}
.home_warning_container {
  display: block;
  padding: 5px;
  height: 100%;
}
.home_warning_box {
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: rgb(211, 247, 157);
}
</style>
