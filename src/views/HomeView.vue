<template>
  <div class="home">
    <div class="header"></div>
    <div class="nickname" v-if="userInfo">{{ userInfo.nickname }}</div>
    <div class="btn-group">
      <button class="btn">分享</button>
      <button class="btn btn-primary">充值</button>
      <button class="btn">活动详情</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src'
import API from '@/api';


export default {
  name: 'HomeView',
  data() {
    return {
      userInfo: ''
    }
  },
  mounted() {
    if (this.$cookie.get('openid')) {
      this.getUserInfo()
    }
  },
  methods: {
    getUserInfo() {
      this.$axios.get(API.getUserInfo).then(response => {
        let res = response.data;
        this.userInfo = res.data
      })
    }
  }
}
</script>

<style>
.home {
  background-color: #ffc93a;
  height: 100vh;
  overflow: hidden;
}

.btn-group {
  padding: .34rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 0.16rem;
}

.nickname {
  position: absolute;
  top: 6rem;
  left: 50%;
  transform: translatex(-50%);
  font-size: 15px;
}
</style>
