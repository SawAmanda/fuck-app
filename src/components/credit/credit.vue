<template>
  <!-- s 授信 -->
  <section class="credit padding-top-126">
    <TitleComponent :title="title"></TitleComponent>
    <div class="credit-content bg-blue">
      <div class="content-progress color-white">
        <p class="progress-title font-33">{{setpHint}}</p>
        <div class="progress-bar">
          <div class="bar bg-white" id="bar"></div>
        </div>
        <p class="progress-percent font-24">{{stepNum}}/5</p>
        <p class="progress-tio font-24">{{stepTip}}</p>
      </div>
      <div class="content-step padding-horizontal-21">
        <div class="step-item bg-white margin-bottom-21">
          <i class="iconfont icon-tongguo"></i>
          <svg class="icon" aria-hidden="true" v-if="!credit.IsIdentityPass">
            <use xlink:href="#icon-shenfenrenzheng"></use>
          </svg>
          <div class="item-center">
            <p class="font-30 color-black">身份认证</p>
            <p class="font-24 color-black color-light-grey">上传你的真实身份信息</p>
          </div>
          <button class="item-button button bg-blue color-white font-24" :class="{'button-active': credit.IsIdentityPass}" :disabled="credit.IsIdentityPass" @click="toIdentityAttestation"><div>{{credit.IsIdentityPass ? '已完成' : '去认证'}}</div></button>
        </div>
        <div class="step-item bg-white margin-bottom-21">
          <i class="iconfont icon-tongguo" v-if="credit.IsContactPass"></i>
          <svg class="icon" aria-hidden="true" v-if="!credit.IsContactPass">
            <use xlink:href="#icon-lianxirenrenzheng"></use>
          </svg>
          <div class="item-center">
            <p class="font-30 color-black">联系人认证</p>
            <p class="font-24 color-black color-light-grey">补全联系人资料，获取更高额度</p>
          </div>
          <button class="item-button button bg-blue color-white font-24" :class="{'button-active': credit.IsContactPass}" :disabled="credit.IsContactPass" @click="toContactAttestation"><div>{{credit.IsContactPass ? '已完成' : '去认证'}}</div></button>
        </div>
        <div class="step-item bg-white margin-bottom-21">
          <i class="iconfont icon-tongguo" v-if="credit.IsZhiMaPass"></i>
          <svg class="icon" aria-hidden="true" v-if="!credit.IsZhiMaPass">
            <use xlink:href="#icon-zhimaxinyong"></use>
          </svg>
          <div class="item-center">
            <p class="font-30 color-black">芝麻分认证</p>
            <p class="font-24 color-black color-light-grey">做信用达人，晒晒芝麻信用分吧</p>
          </div>
          <button class="item-button button bg-blue color-white font-24" :class="{'button-active': credit.IsZhiMaPass}" :disabled="credit.IsZhiMaPass" @click="toZhiMaAttestation"><div>{{credit.IsZhiMaPass ? '已完成' : '去认证'}}</div></button>
        </div>
        <div class="step-item bg-white margin-bottom-21">
          <i class="iconfont icon-tongguo" v-if="credit.IsPhonePass"></i>
          <svg class="icon" aria-hidden="true" v-if="!credit.IsPhonePass">
            <use xlink:href="#icon-yunyingshangrenzheng"></use>
          </svg>
          <div class="item-center">
            <p class="font-30 color-black">运营商认证</p>
            <p class="font-24 color-black color-light-grey">授权手机运营商查询</p>
          </div>
          <button class="item-button button bg-blue color-white font-24" :class="{'button-active': credit.IsPhonePass}" :disabled="credit.IsPhonePass" @click="toPhoneAttestation"><div>{{credit.IsPhonePass ? '已完成' : '去认证'}}</div></button>
        </div>
        <div class="step-item bg-white">
          <i class="iconfont icon-tongguo" v-if="credit.IsBankCardPass"></i>
          <svg class="icon" aria-hidden="true" v-if="!credit.IsBankCardPass">
            <use xlink:href="#icon-yinhangqiarenzheng"></use>
          </svg>
          <div class="item-center">
            <p class="font-30 color-black">银行卡认证</p>
            <p class="font-24 color-black color-light-grey">添加银行卡</p>
          </div>
          <button class="item-button button bg-blue color-white font-24" :class="{'button-active': credit.IsBankCardPass}" :disabled="credit.IsBankCardPass" @click="toICardAttestation"><div>{{credit.IsBankCardPass ? '已完成' : '去认证'}}</div></button>
        </div>
      </div>
    </div>
  </section>
  <!-- e 授信 -->
</template>

<script>
// include dependence
import Error from '../../class/Error.class.js'
import Http from '../../class/Http.class.js'
import Router from '../../class/Router.class.js'
import Storage from '../../class/Storage.class.js'
import TitleComponent from '../../module/title/title.vue'
export default {
  name: 'CreditExtensionComponent',
  data () {
    return {
      credit: {},
      stepNum: 0,
      stepTip: '',
      setpHint: '',
      // start params
      'title': {
        contentText: '授信'
      }
      // end params
    }
  },
  components: {
    TitleComponent
    // include components
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      Http.send({
        url: 'CurrentStep',
        data: {
          token: Storage.token,
          phone: Storage.phone
        }
      }).success(data => {
        console.log(data)
        this.formatData(data)
        this.setProgress()
        this.credit = data
      }).fail(data => {
        console.log(data)
      })
    },
    formatData (data) {
      let credit = [data.IsIdentityPass, data.IsContactPass, data.IsZhiMaPass, data.IsPhonePass, data.IsBankCardPass]
      for (let i = 0; i < credit.length; i++) {
        if (credit[i]) {
          this.stepNum++
        }
      }
      if (this.stepNum < 5) {
        this.stepTip = '距离完成还差' + (5 - this.stepNum) + '步，抓紧时间哦'
      } else {
        this.stepTip = '恭喜你全部认证成功~'
      }
      this.setpHint = '你已完成' + this.stepNum + '项认证,继续加油哦'
    },
    setProgress () {
      var bar = document.getElementById('bar')
      bar.style.width = (this.stepNum / 5 * 100) + '%'
    },
    toIdentityAttestation () {
      if (this.credit.IsIdentityPass) return
      Router.push('credit-identity')
    },
    toContactAttestation () {
      if (!this.credit.IsIdentityPass) {
        console.log('请进行身份认证')
        return
      }
      Router.push('add-contact')
    },
    toZhiMaAttestation () {
      if (!this.credit.IsIdentityPass) {
        Error.show('请进行身份认证')
        return
      }
      if (!this.credit.IsContactPass) {
        Error.show('请进联系人认证')
        return
      }
      Router.push('zhima-credit')
    },
    toPhoneAttestation () {
      if (!this.credit.IsIdentityPass) {
        Error.show('请进联系人认证')
        console.log('请进行身份认证')
        return
      }
      if (!this.credit.IsContactPass) {
        Error.show('请进联系人认证')
        return
      }
      if (!this.credit.IsZhiMaPass) {
        Error.show('请进芝麻认证')
        return
      }
      Router.push('operator-credit')
    },
    toICardAttestation () {
      if (!this.credit.IsIdentityPass) {
        Error.show('请进行身份认证')
        return
      }
      if (!this.credit.IsContactPass) {
        Error.show('请进联系人认证')
        return
      }
      if (!this.credit.IsZhiMaPass) {
        Error.show('请进行身份认证')
        return
      }
      if (!this.credit.IsPhonePass) {
        Error.show('请进行身份认证')
        return
      }
      Router.push('bind-bank-card')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./credit.scss";
</style>
