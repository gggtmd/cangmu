<script setup>

</script>

<template>
  <div class="home-app-ads">
    <div class="content">
      <div class="ads-1">
        <span>教练宝典APP</span>
        <div class="QR-image"></div>
      </div>
      <div class="ads-2">
        <span>驾考宝典APP</span>
        <div class="QR-image"></div>
      </div>
      <div class="ads-3">
        <span>买车宝典APP</span>
        <div class="QR-image"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-app-ads {
  background-color: #f5f5f5;
  margin-bottom: 40px;

  .content {
    position: relative;
    width: 1200px;
    height: 560px;
    margin: 70px auto 0;
    overflow: hidden;

    .ads-1{
      position: absolute;
      left: 30px;
      width: 300px;
      height: 500px;
      bottom: -40px;
      text-align: center;
      background: url('../assets/app_ads_1.png') center bottom no-repeat;
      font-size: 20px;
      transition: 0.3s;
      &:hover {
        bottom: 0;
      }
      .QR-image {
        width: 100%;
        height: 100%;
        margin-top: 37px;
        background: url('../assets/app_qr_1.png') center no-repeat;
        opacity: 0;
        transition: 0.2s;
        &:hover {
          opacity: 1;
        }
      }
    }

    .ads-2 {
      position: absolute;
      bottom: -40px;
      left: 400px;
      width: 430px;
      height: 540px;
      text-align: center;
      background: url('../assets/app_ads_2.png') center bottom no-repeat;
      font-size: 20px;
      transition: 0.3s;
      &:hover {
        bottom: 0;
      }
      .QR-image {
        width: 100%;
        height: 100%;
        margin-top: 37px;
        background: url('../assets/app_qr_2.png') center no-repeat;
        background-color: rgba(255, 255, 255, .5);
        background-size: 250px 250px;
        opacity: 0;
        transition: 0.2s;
        &:hover {
          opacity: 1;
        }
      }
    }

    .ads-3{
      position: absolute;
      left: 905px;
      width: 265px;
      height: 428px;
      bottom: -40px;
      text-align: center;
      background: url('../assets/app_ads_3.png') center bottom no-repeat;
      font-size: 20px;
      transition: 0.3s;
      &:hover {
        bottom: 0;
      }
      .QR-image {
        width: 100%;
        height: 100%;
        margin-top: 52px;
        background: url('../assets/app_qr_3.png') center no-repeat;
        opacity: 0;
        transition: 0.2s;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
