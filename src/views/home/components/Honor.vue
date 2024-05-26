<script setup>

import DividerTitle from "@/views/home/components/DividerTitle.vue";
import assets from "@/views/home/assets/index.js";
</script>

<template>
  <div class="honor">
    <divider-title text="宝典荣誉"></divider-title>
    <p class="title">驾考宝典整合学车全流程，驾考宝典为用户提供全方位学车服务</p>
    <img :src="assets.homeHonor">
  </div>
</template>

<style scoped lang="scss">
.honor {
  width: 1200px;
  margin: 0 auto 60px;

  .title {
    text-align: center;
    font-size: 16px;
    color: #666;
    margin: -10px auto 60px;
  }
}
</style>
