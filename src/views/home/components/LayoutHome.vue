<script setup>
import {computed, ref} from "vue";

const navList = [
  {
    label: '首页',
    href: 'https://www.jiakaobaodian.com/',
    name: 'home'
  },
  {
    label: '模拟考试',
    href: 'https://www.jiakaobaodian.com/',
    name: 'home1',
    subNav: [
      {
        label: '科目一',
        href: 'https://www.jiakaobaodian.com/',
        name: 'home1',
      },
      {
        label: '科目二',
        href: 'https://www.jiakaobaodian.com/',
        name: 'home1',
      },
      {
        label: '科目三',
        href: 'https://www.jiakaobaodian.com/',
        name: 'home1',
      },
      {
        label: '科目四',
        href: 'https://www.jiakaobaodian.com/',
        name: 'home1',
      },
    ]
  },
  {
    label: '找驾校',
    href: 'https://www.jiakaobaodian.com/',
    name: 'home2',
    subNav: [
      {
        label: '找驾校',
        href: 'https://www.jiakaobaodian.com/',
        name: 'home2',
      },
      {
        label: '找教练',
        href: 'https://www.jiakaobaodian.com/',
        name: 'home2',
      },
      {
        label: '找陪练',
        href: 'https://www.jiakaobaodian.com/',
        name: 'home2',
      },
    ]
  },
  {
    label: '驾考圈',
    href: 'https://www.jiakaobaodian.com/',
    name: 'home3',
  },
  {
    label: '交通标志',
    href: 'https://www.jiakaobaodian.com/',
    name: 'home4',
  },
  {
    label: '软件下载',
    href: 'https://www.jiakaobaodian.com/',
    name: 'home5',
  },
  {
    label: '驾考宝典企业版',
    href: 'https://www.jiakaobaodian.com/',
    name: 'home6',
  },
  {
    label: '智慧驾校',
    href: 'https://www.jiakaobaodian.com/',
    name: 'home7',
  },
  {
    label: '买新车',
    href: 'https://www.jiakaobaodian.com/',
    name: 'home8',
    subNav: [
      {
        label: '买车网',
        href: 'https://www.jiakaobaodian.com/',
        name: 'home8',
      },
      {
        label: '平行之家',
        href: 'https://www.jiakaobaodian.com/',
        name: 'home8',
      },
    ]
  },
  {
    label: '二手车',
    href: 'https://www.jiakaobaodian.com/',
    name: 'home9',
  },
]

// 路由跳转
import {useRouter} from "vue-router";
import {usePathStore} from "@/stores/path.js";
const router = useRouter()
const pathStore = usePathStore()
const active = computed(() => pathStore.name)
const routerTo = async (nav) => {
  await router.push({
    name: nav.name
  })
}
</script>

<template>
  <div class="layout-header">
    <div class="navigation-top">
      <div class="logo-w">
        <a class="logo" href="https://www.jiakaobaodian.com/">
          <img alt="" src="../assets/logo.png">
        </a>
      </div>
      <div class="search-w">
        <form>
          <input class="input" type="text" placeholder="请输入关键字">
          <input class="button" type="submit" value="搜索">
        </form>
      </div>
    </div>
    <div class="navigation-content">
      <ul class="nav-w">
        <li
          v-for="nav in navList"
          :key="nav"
          :class="{'menu-jx': nav.subNav, 'qiye': nav.label === '驾考宝典企业版'}"
        >
          <a
            :href="nav.href"
            :class="{active: active === nav.name}"
            @click.prevent="routerTo(nav)"
          >{{nav.label}}</a>
          <div class="drop" v-if="nav.subNav">
            <a
              v-for="subNav in nav.subNav"
              :key="subNav"
              :href="subNav.href"
              @click.prevent="routerTo(subNav)"
            >{{subNav.label}}</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-header {
  .navigation-top {
    width: 1200px;
    height: 42px;
    margin: 28px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo-w {
      height: 100%;
      .logo {
        display: block;
        width: 207px;
        height: 100%;
      }
    }

    .search-w {
      width: 300px;
      .input {
        height: 42px;
        box-sizing: border-box;
        line-height: 40px;
        border: 1px solid #e9e9e9;
        color: #333;
        font-size: 14px;
        padding: 0 40px 0 10px;
        &:focus {
          outline: 1px #78b6f5 solid;
        }
      }
      .button {
        height: 42px;
        line-height: 40px;
        border: 1px solid #e9e9e9;
        font-size: 14px;
        padding: 0 10px;
      }
    }
  }
  .navigation-content {
    width: 100%;
    background-color: #37B5F8;

    .nav-w {
      width: 1200px;
      margin: auto;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      text-align: left;
      list-style: none;
      &::after {
        clear: both;
      }

      a {
        color: white;
      }

      .menu-jx {
        position: relative;
        overflow: visible;
        > a {
          &::after {
            content: '';
            display: inline-block;
            vertical-align: middle;
            width: 0;
            height: 0;
            margin-left: 6px;
            margin-top: 5px;
            border: 5px solid transparent;
            border-top: 5px solid #fff;
          }
        }
      }

      .active {
        background-color: rgba(0, 0, 0, 0.2);
      }

      > li {
        float: left;
        width: 108px;
        text-align: center;
        &:hover {
          background-color: rgba(255, 255, 255, 0.3);
          .drop {
            display: block;
          }
        }

        a {
          display: inline-block;
          width: 100%;
          height: 100%;
        }

        .drop {
          display: none;
          position: absolute;
          font-size: 14px;
          width: 100%;
          background-color: #fff;
          z-index: 2;
          line-height: 40px;
          box-sizing: border-box;
          padding: 0 8px;
          color: #666;
          box-shadow: 0 0 20px rgba(0, 0, 0, .1);
          a {
            display: block;
            color: #333;
            border-bottom: 1px solid #f6f6f6;
            &:hover {
              color: #37B5F8;
            }
          }
        }
      }

      .qiye {
        width: 148px;
      }
    }
  }
}
</style>
