<!--
 * @Author: NickXu
 * @LastEditors: NickXu <wenzi7777@icloud.com>
 * @Description: 遵守MPL2.0协议进行分发。
-->
<template>
  <div class="settings_container">
    <h1 class="settings_h1">设定</h1>
    <li class="settings_li">关机</li>
    <li class="settings_li">检查面板更新</li>
    <li class="settings_li">
      延迟
      <input class="settings_numInput" v-model="delayNum" type="number"/>秒触发
    </li>
  </div>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {
        delayNum: 1
    };
  },
};
</script>

<style scoped>
.settings_h1 {
  font-size: 2em;
  font-weight: 800;
  text-align: center;
}
.settings_li{
    list-style: none;
    font-size: 1.5em;
    font-weight: 800;
    color: rgb(41, 40, 88);
    cursor: pointer;
    margin-left: 5%;
}
.settings_numInput{
    outline: none;
    font-weight: 800;
    color: rgb(42, 40, 141);
    font-size: 1.3em;
    text-align: center;
    padding: 5px;
    width: 15%;
    border: none;
    border-bottom: 2px solid rgb(41, 40, 88);
    margin: 0 10px 0 10px;
}
</style>
