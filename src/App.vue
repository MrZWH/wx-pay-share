<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0d1d939ef989ad8d&redirect_uri=' + encodeURIComponent('http://m.imooctest.com') + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
  }
}
</script>
