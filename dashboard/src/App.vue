<!--
 * @Author: NickXu
 * @LastEditors: NickXu <wenzi7777@icloud.com>
 * @Description: 遵守MPL2.0协议进行分发。
-->
<template>
  <div id="app">
    <router-view id="body" name="Body" />
    <router-view id="footernav" name="FooterNav" />
    <router-view id="footer" name="Footer" />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
a {
  color: #42b983;
  transition: 500ms;
}
a:hover{
  color: #157a4d;
  transition: 500ms;
}
i{
  font-weight: 400;
  color: #39c5bb;
  font-style: normal;
}
#body {
  /* background-color: aquamarine; */
  /* height: 100px; */
  /* width: 100%; */
}
#footernav {
  /* background-color: rgb(23, 146, 105); */
  /* height: 100px; */
  /* width: 100%; */
}
#footer {
  /* background-color: rgb(5, 20, 15); */
  /* height: 100px; */
  /* width: 100%; */
}
</style>
