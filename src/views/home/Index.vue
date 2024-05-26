<script setup>
import LayoutHome from "@/views/home/components/LayoutHome.vue";
import HomeBanner from "@/views/home/components/HomeBanner.vue";
import HomeKmksMenu from "@/views/home/components/HomeKmksMenu.vue";
import DrivingSchool from "@/views/home/components/DrivingSchool.vue";
import Processing from "@/views/home/components/Processing.vue";
import Honor from "@/views/home/components/Honor.vue";
import HomeAppAds from "@/views/home/components/HomeAppAds.vue";
import HomeAppDown from "@/views/home/components/HomeAppDown.vue";
</script>

<template>
  <layout-home></layout-home>
  <div class="layout-article">
    <home-banner></home-banner>
    <home-kmks-menu></home-kmks-menu>
    <div class="banner-mid-ad">
      <a><img src="https://www.jiakaobaodian.com/core-assets/static/images/common/banner-jxb.png"></a>
    </div>
    <driving-school></driving-school>
    <processing></processing>
    <honor></honor>
    <home-app-ads></home-app-ads>
    <home-app-down></home-app-down>
  </div>
</template>

<style lang="scss" scoped>
.layout-article {
  padding-bottom: 100px;

  .banner-mid-ad {
    width: 1200px;
    margin: 30px auto 90px;
  }
}
</style>
