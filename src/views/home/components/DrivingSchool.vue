<script setup>
import DividerTitle from "@/views/home/components/DividerTitle.vue";
import assets from "@/views/home/assets/index.js";

const recommendList  = [
  {
    name: '龙泉驾校',
    rate: 0.84,
    tags: ['口碑好', '规模大', '拿本快', '包接送'],
    price: 3480,
    userImage: assets.commentUser,
    comment: '服务态度：教练服务是相当哇塞，相当好。'
  },
  {
    name: '龙泉驾校',
    rate: 0.84,
    tags: ['口碑好', '规模大', '拿本快', '包接送'],
    price: 3480,
    userImage: assets.commentUser,
    comment: '服务态度：教练服务是相当哇塞，相当好。'
  },
  {
    name: '龙泉驾校',
    rate: 0.84,
    tags: ['口碑好', '规模大', '拿本快', '包接送'],
    price: 3480,
    userImage: assets.commentUser,
    comment: '服务态度：教练服务是相当哇塞，相当好。'
  },
  {
    name: '龙泉驾校',
    rate: 0.84,
    tags: ['口碑好', '规模大', '拿本快', '包接送'],
    price: 3480,
    userImage: assets.commentUser,
    comment: '服务态度：教练服务是相当哇塞，相当好。'
  },
]
</script>

<template>
  <div class="driving-school">
    <divider-title text="驾校推荐"></divider-title>
    <div class="content">
      <div class="recommend" v-for="(recommend, index) in recommendList" :key="index">
        <div class="top">
          <div class="left">
            <span class="name">{{recommend.name}}</span>
            <span class="rate">
              <img class="image" :src="assets.rateBase">
              <span class="image" :style="{width: `${recommend.rate * 100}%`}">
                <img :src="assets.rateMax">
              </span>
            </span>
            <ul class="tag-list">
              <li class="tag-item" v-for="(tag, tagIndex) in recommend.tags" :key="tagIndex">
                {{tag}}
              </li>
            </ul>
          </div>
          <div class="center">￥{{recommend.price}}</div>
          <div class="right">
            <button type="button">学车报名</button>
          </div>
        </div>
        <div class="user-comment">
          <img class="image" :src="recommend.userImage">
          <p class="content">{{recommend.comment}}</p>
        </div>
      </div>
    </div>
    <div class="btn-wrapper">
      <a class="btn">查看更多</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.driving-school {
  width: 1200px;
  margin: 0 auto 80px;

  .content {
    padding: 30px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

    .recommend {
      border: 1px solid #e9e9e9;
      padding: 40px 30px;

      .top {
        display: flex;
        align-items: center;

        .left {
          padding-right: 10px;
          border-right: 1px solid #e9e9e9;

          .name {
            max-width: 180px;
            height: 30px;
            display: inline-block;
            font-size: 22px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .rate {
            display: inline-block;
            height: 30px;
            width: 90px;
            margin-left: 10px;
            position: relative;
            .image {
              position: absolute;
              width: 90px;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
              overflow: hidden;
            }
          }
          .tag-list {
            list-style: none;
            padding: 0;
            display: flex;
            .tag-item {
              font-size: 14px;
              margin-right: 10px;
              background: url("../assets/comment_tag.png") no-repeat left center;
              padding-left: 20px;
            }
          }
        }

        .center {
          padding: 0 20px;
          font-size: 30px;
          color: #EE4653;
        }

        .right {
          button {
            width: 80px;
            line-height: 28px;
            text-align: center;
            font-size: 14px;
            border-radius: 4px;
            border: 1px solid #e9e9e9;
            background-color: transparent;
            cursor: pointer;
          }
        }
      }

      .user-comment {
        height: 80px;
        margin-top: 30px;
        box-sizing: border-box;
        padding: 20px;
        background: #FAFAFA;
        color: #999;
        display: flex;

        .image {
          height: 100%;
          margin-right: 20px;
        }
        .content {
          height: 40px;
          padding: 0;
          font-size: 14px;
          line-height: 20px;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
        }
      }
    }
  }

  .btn-wrapper {
    margin-top: 10px;

    .btn {
      display: block;
      width: 280px;
      margin: 0 auto;
      line-height: 48px;
      border: 1px solid #e9e9e9;
      border-radius: 4px;
      color: #999;
      text-align: center;
      font-size: 16px;
      cursor: pointer;

      &:hover {
        color: #37B5F8;
        border-color: #37B5F8;
      }
    }
  }
}
</style>
