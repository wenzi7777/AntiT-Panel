<!--
 * @Author: NickXu
 * @LastEditors: NickXu <wenzi7777@icloud.com>
 * @Description: 遵守MPL2.0协议进行分发。
-->
<template>
  <div class="status_container">
    <h1 class="status_h1">系统状态</h1>
    <li class="status_items">电池剩余：<i>80</i>%</li>
    <li class="status_items">内存占用：<i>80</i>%</li>
    <li class="status_items">已拍摄照片：<i>80</i>张</li>
    <li class="status_items">IP地址：<i>80</i></li>
    <li class="status_items">端口号：<i>80</i></li>
    <li class="status_items">控制面板版本：<i>80</i></li>
  </div>
</template>

<script>
export default {
  name: "Status",
  data() {
    return {};
  },
};
</script>

<style scoped>
.status_h1 {
  font-size: 2em;
  font-weight: 800;
  text-align: center;
}
.status_items{
    display: inline-block;
    width: 48%;
    font-size: 1.5em;
    font-weight: 800;
    list-style: none;
    text-align: center;
    margin: 10px 0;
}
</style>