<script setup>
import DividerTitle from "@/views/home/components/DividerTitle.vue";
import assets from "@/views/home/assets/index.js";

const processingList = [
  {
    text: '找驾校',
    info: '口碑好的驾校'
  },
  {
    text: '科目一',
    info: '驾驶员理论考试'
  },
  {
    text: '科目二',
    info: '场地驾驶技能科目考试'
  },
  {
    text: '科目三',
    info: '机动车驾驶人道路考试'
  },
  {
    text: '科目四',
    info: '安全文明驾驶常规考试'
  },
  {
    text: '拿本',
    info: '开心拿本，安全驾驶'
  },
]
</script>

<template>
  <div class="processing">
    <divider-title text="学车流程"></divider-title>
    <p class="title">驾考宝典整合学车全流程，驾考宝典为用户提供全方位学车服务</p>
    <ul class="content">
      <li v-for="(processing, processingIndex) in processingList">
        <a>
          <img :src="assets.processing[processingIndex]">
          <p class="title">{{processing.text}}</p>
          <p class="info">{{processing.info}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.processing {
  width: 1200px;
  margin: 0 auto 100px;

  .title {
    text-align: center;
    font-size: 16px;
    color: #666;
    margin: -10px auto 60px;
  }

  .content {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    text-align: center;

    .title {
      color: #333;
      font-size: 24px;
      margin: 20px 0 0;
    }

    .info {
      color: #999;
      margin-top: 10px;
    }
  }
}
</style>
