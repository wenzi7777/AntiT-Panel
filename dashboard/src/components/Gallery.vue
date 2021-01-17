<!--
 * @Author: NickXu
 * @LastEditors: NickXu <wenzi7777@icloud.com>
 * @Description: 遵守MPL2.0协议进行分发。
-->
<template>
  <div class="gallery_container">
    <h1 class="gallery_h1">图库</h1>
    <div class="gallery_first_take_box">
      <h2 class="gallery_title">
        最近一次抓拍：<span class="gallery_download_botton">下载</span
        ><span class="gallery_delete_botton">删除</span>
        <span class="gallery_view_botton">查看大图</span>
      </h2>
      <img class="gallery_imgs" src="../../static/yuki.jpg">
    </div>
    <div class="gallery_first_take_box">
      <h2 class="gallery_title">
        抓拍于[时间]：<span class="gallery_download_botton">下载</span
        ><span class="gallery_delete_botton">删除</span>
        <span class="gallery_view_botton">查看大图</span>
      </h2>
      <img class="gallery_imgs" src="../../static/yuki.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {};
  },
};
</script>

<style scoped>
.gallery_h1 {
  font-size: 2em;
  font-weight: 800;
  text-align: center;
}
.gallery_first_take_box {
  display: block;
  width: 70%;
  margin: 2% auto;
  border: 1px solid rgb(119, 0, 255);
}
.gallery_title {
  font-size: 1.5em;
  font-weight: 600;
}
.gallery_download_botton {
  margin: 0 5px 0 5px;
  font-weight: 800;
  color: green;
  cursor: pointer;
}
.gallery_delete_botton {
  margin: 0 5px 0 5px;
  font-weight: 800;
  color: red;
  cursor: pointer;
}
.gallery_view_botton{
      margin: 0 5px 0 5px;
  font-weight: 800;
  color: rgb(17, 0, 255);
  cursor: pointer;
}
.gallery_imgs{
    width: 10%;
}
</style>