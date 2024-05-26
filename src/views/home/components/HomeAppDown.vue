<script setup>

import assets from "@/views/home/assets/index.js";
</script>

<template>
  <div class="home-app-down">
    <div class="down-item">
      <div>
        <span>驾考宝典APP下载</span>
        <p>考驾照 用宝典</p>
      </div>
      <img :src="assets.appDownQR[0]">
    </div>
    <div class="down-item">
      <div>
        <span>驾考宝典微信小程序</span>
        <p>无需下载，驾考做题更方便！</p>
      </div>
      <img :src="assets.appDownQR[1]">
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-app-down {
  width: 1200px;
  margin: 0 auto;
  display: flex;

  .down-item {
    width: 50%;
    box-sizing: border-box;
    padding: 40px 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-right: 1px solid #e9e9e9;
    &:last-child {
      border-right: none;
    }

    span {
      font-size: 20px;
    }
    p {
      color: #999;
      font-size: 14px;
      margin-top: 5px;
    }
    img {
      width: 140px;
    }
  }
}
</style>
