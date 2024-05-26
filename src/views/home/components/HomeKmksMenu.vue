<script setup>
import assets from "@/views/home/assets/index.js";
import DividerTitle from "@/views/home/components/DividerTitle.vue";

const contentList = [
  {
    href: '',
    title: '顺序练习',
    info: '按照顺序练习做题'
  },
  {
    href: '',
    title: '随机练习',
    info: '按随机顺序做题'
  },
  {
    href: '',
    title: '专项练习',
    info: '分门别类重点突破'
  },
  {
    href: '',
    title: '难题攻克',
    info: '准确把握考试难点'
  },
]
</script>

<template>
  <div class="com-home-kmks-menu">
    <divider-title text="2024小车理论考试"></divider-title>
    <div class="content">
      <div class="item left">
        <div class="title">
          <a>
            <img class="image" :src="assets.kmksTitle" alt="">
            科目一交规
          </a>
        </div>
        <div class="wrapper">
          <div class="content-item" v-for="(item, index) in contentList">
            <img class="image" :src="assets.kmksItem[index]" alt="">
            <span style="display: inline-block">
              <a>{{item.title}}</a>
              <p>{{item.info}}</p>
            </span>
          </div>
        </div>
        <div class="btn-wrapper">
          <a>模拟考试</a>
        </div>
      </div>
      <div class="item right">
        <div class="title">
          <a>
            <img class="image" :src="assets.kmksTitle" alt="">
            科目四安全文明驾驶
          </a>
        </div>
        <div class="wrapper">
          <div class="content-item" v-for="(item, index) in contentList">
            <img class="image" :src="assets.kmksItem[index]" alt="">
            <span style="display: inline-block">
              <a>{{item.title}}</a>
              <p>{{item.info}}</p>
            </span>
          </div>
        </div>
        <div class="btn-wrapper">
          <a>模拟考试</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.com-home-kmks-menu {
  width: 1200px;
  margin: 60px auto;

  .content {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;

    .item {
      width: 580px;
      border: 1px solid #e9e9e9;
      .title {
        height: 110px;
        line-height: 110px;
        font-size: 20px;
        text-align: center;
        a {
          .image {
            vertical-align: middle;
          }
        }
      }
      .wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 25px;
        grid-row-gap: 15px;
        padding: 0 25px;
        .content-item {
          background-color: #FAFAFA;
          padding: 15px 0;
          .image {
            padding-left: 50px;
            padding-right: 10px;
          }
        }
      }
      .btn-wrapper {
        font-size: 18px;
        text-align: center;
        cursor: pointer;
        a {
          color: white;
          display: inline-block;
          width: 300px;
          height: 46px;
          line-height: 44px;
          background: #37B5F8;
          margin: 30px auto;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>
