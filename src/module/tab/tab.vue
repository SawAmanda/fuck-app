<template>
  <section class="tab">
    <!-- s 底部导航 -->
    <nav class="tab">
      <div class="tab-item" @click="gotoPage('index')">
        <svg class="icon" aria-hidden="true" v-if="path === '/index' || path === '/'">
          <use xlink:href="#icon-shouye1"></use>
        </svg>
        <svg class="icon" aria-hidden="true" v-if="path !== '/index' && path !== '/'">
          <use xlink:href="#icon-shouye"></use>
        </svg>
        <p class="item-name">首页</p>
      </div>
      <div class="tab-item" @click="gotoPage('message')">
        <svg class="icon" aria-hidden="true" v-if="path === '/message'">
          <use xlink:href="#icon-haoyou"></use>
        </svg>
        <svg class="icon" aria-hidden="true" v-if="path !== '/message'">
          <use xlink:href="#icon-haoyou1"></use>
        </svg>
        <p class="item-name">消息</p>
      </div>
      <div class="tab-item" @click="gotoBorrow('wanna-borrow')">
        <svg class="icon" aria-hidden="true" v-if="path === '/wanna-borrow'">
          <use xlink:href="#icon-jianpan"></use>
        </svg>
        <svg class="icon" aria-hidden="true" v-if="path !== '/wanna-borrow'">
          <use xlink:href="#icon-jianpan"></use>
        </svg>
        <p class="item-name">我要借</p>
      </div>
      <div class="tab-item" @click="gotoPage('find')">
        <svg class="icon" aria-hidden="true" v-if="path === '/find'">
          <use xlink:href="#icon-faxianshangse"></use>
        </svg>
        <svg class="icon" aria-hidden="true" v-if="path !== '/find'">
          <use xlink:href="#icon-faxian"></use>
        </svg>
        <p class="item-name">发现</p>
      </div>
      <div class="tab-item" @click="gotoPage('mine')">
        <svg class="icon" aria-hidden="true" v-if="path === '/mine'">
          <use xlink:href="#icon-wode1"></use>
        </svg>
        <svg class="icon" aria-hidden="true" v-if="path !== '/mine'">
          <use xlink:href="#icon-wode"></use>
        </svg>
        <p class="item-name">我的</p>
      </div>
    </nav>
    <!-- e 底部导航 -->
  </section>
</template>

<script>
import Http from '../../class/Http.class.js'
import Router from '../../class/Router.class.js'
import Storage from '../../class/Storage.class.js'
import Account from '../../class/Account.class.js'
import Error from '../../class/Error.class.js'
export default {
  name: 'TabComponent',
  props: ['path'],
  data () {
    return {
      // tabPath: '/index'
    }
  },
  methods: {
    gotoPage (page) {
      Router.push(page)
    },
    gotoBorrow (page) {
      if (page === 'wanna-borrow' && !Account.id) {
        Router.push('credit')
        return
      }
      Http.send({
        url: 'IsLoan',
        data: {
          token: Storage.token,
          phone: Storage.phone
        }
      }).success(data => {
        Storage.borrowOrigin = 1
        Router.push(page)
      }).fail(data => {
        Error.show(data.message)
        // Router.push('credit')
      })
    }
  }
}

</script>

<style lang="sass" scoped>
  @import "./tab.scss";

</style>
