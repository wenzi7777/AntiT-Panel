<!--
 * @Author: NickXu
 * @LastEditors: NickXu <wenzi7777@icloud.com>
 * @Description: 遵守MPL2.0协议进行分发。
-->
<template>
  <div class="logs_container">
    <h1 class="logs_h1">日志</h1>
    <div class="logs_logs_box">
      <p class="logs_logs_detail">于时间抓拍照片「」，大小0M</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logs",
  data() {
    return {};
  },
};
</script>

<style scoped>
.logs_h1 {
  font-size: 2em;
  font-weight: 800;
  text-align: center;
}
.logs_logs_box {
  display: block;
  width: 70%;
  margin: 2% auto;
  border: 1px solid rgb(119, 0, 255);
}
.logs_logs_detail {
  display: block;
  font-size: 1em;
  font-weight: 800;
  padding: 2px 10px;
  box-sizing: border-box;
}
</style>