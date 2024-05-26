<script setup>
import assets from '@/views/home/assets/index.js'
import {nextTick, ref} from "vue";

// 轮播图
import useInterval from "@/hooks/useInterval.js";
const bannerIndex = ref(0)
const swiperWrapperRef = ref(null)
const {next, start, stop} = useInterval(() => {
  // banner滚动从到最后一个滚动到第一个时
  if(bannerIndex.value === assets.banner.length - 1) {
    bannerIndex.value ++
    // 滚动时间为300,需要小于3000的切换时间
    setTimeout(() => {
      swiperWrapperRef.value.style.transition = '0s'
      nextTick(() => {
        bannerIndex.value = 0
        setTimeout(() => {
          swiperWrapperRef.value.style.transition = '0.3s'
        }, 0)
      })
    }, 300)
  } else {
    bannerIndex.value = (bannerIndex.value + 1) % assets.banner.length
  }
}, 3000)

// banner左侧列表——学车流程
const menuList = [
  {
    icon: assets.bannerIcon[0],
    title: '科目一',
    href: 'https://www.jiakaobaodian.com/mnks/kemu1/car.html',
    info: '2024新题库'
  },
  {
    icon: assets.bannerIcon[1],
    title: '科目二',
    href: 'https://www.jiakaobaodian.com/mnks/kemu1/car.html',
    info: '2024新题库'
  },
  {
    icon: assets.bannerIcon[2],
    title: '科目三',
    href: 'https://www.jiakaobaodian.com/mnks/kemu1/car.html',
    info: '2024新题库'
  },
  {
    icon: assets.bannerIcon[3],
    title: '科目四',
    href: 'https://www.jiakaobaodian.com/mnks/kemu1/car.html',
    info: '2024新题库'
  },
]
</script>

<template>
  <div class="home-banner">
    <div class="swiper-container" @mouseover="stop" @mouseleave="start">
      <div class="swiper-wrapper" ref="swiperWrapperRef">
        <div
          class="swiper-item"
          v-for="image in assets.banner"
          :key="image">
          <img class="image" :src="image" alt="">
        </div>
        <div class="swiper-item">
          <img class="image" :src="assets.banner[0]" alt="">
        </div>
      </div>
      <div class="swiper-pagination">
        <span
          class="swiper-pagination-dot"
          v-for="(item, index) in assets.banner"
          :key="index"
          :class="{'active-dot': index === bannerIndex % assets.banner.length}"
          @click="bannerIndex = index"
        ></span>
      </div>
    </div>
    <div class="menu-container">
      <div class="banner-menu">
        <p class="menu-title">学车流程</p>
        <ul>
          <li v-for="menu in menuList">
            <img class="image" :src="menu.icon" alt="">
            <div>
              <p class="title">
                <a :href="menu.href">{{menu.title}}</a>
              </p>
              <p class="info">{{menu.info}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 100%;

  .swiper-container {
    width: 100%;
    height: 380px;
    overflow: hidden;
    position: relative;

    .swiper-wrapper {
      width: 100%;
      height: 100%;
      transition: 0.3s;
      transform: translateX(calc(v-bind(bannerIndex) * -100%));
      display: flex;
      .swiper-item {
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        .image {
          width: 100%;
          height: 100%;
          vertical-align: top;
        }
      }
    }

    .swiper-pagination {
      position: absolute;
      left: 50%;
      bottom: 10px;
      transform: translateX(-50%);

      .swiper-pagination-dot {
        display: inline-block;
        margin: 0 5px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.2);
        cursor: pointer;
      }
      .active-dot {
        background-color: #e9e9e9;
      }
    }
  }

  .menu-container {
    position: relative;
    width: 1200px;
    margin: 0 auto;

    .banner-menu {
      position: absolute;
      top: -355px;
      left: 0;
      width: 280px;
      z-index: 1;
      box-sizing: border-box;
      padding: 0 20px;
      background-color: rgba(255, 255, 255, .9);

      .menu-title {
        line-height: 50px;
        font-size: 20px;
        border-bottom: 1px dotted #ddd;
        text-align: center;
      }

      ul {
        list-style: none;
        li {
          height: 35px;
          display: flex;
          padding: 18px 20px 18px 0;

          .image {
            margin-right: 10px;
          }
          div .title a {
            font-size: 16px;
            color: #37B5F8;
          }
          .info {
            //margin-top: 5px;
            color: #666;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
