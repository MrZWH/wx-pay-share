<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import wx from 'weixin-js-sdk';
import API from './api/index'
import utils from './utils';


export default {
  name: 'App',
  mounted() {
    this.checkUserAuth()
    // window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0d1d939ef989ad8d&redirect_uri=' + encodeURIComponent('http://m.imooctest.com') + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
  },
  methods: {
    checkUserAuth() {
      console.log(this);
      let openId = this.$cookie.get('openId')

      if (!openId) {
        window.location.href = API.wechatRedirect;
      } else {
        // this.getWechatConfig()
      }
    },
    getWechatConfig() {
      let url = window.location.href.split('#')[0];
      this.$axios.get(API.wechatConfig, {
        params: {
          url
        }
      }).then(response => {
        let res = response.data;
        if (res.code == 0) {
          let data = res.data;
          wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature,// 必填，签名
            jsApiList: data.jsApiList // 必填，需要使用的JS接口列表
          });

          wx.ready(() => {
            utils.initShareInfo()
          })
        }
      })
    }
  }

}
</script>
