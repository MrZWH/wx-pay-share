<template>
  <div class="home">
    <div class="header"></div>
    <div class="btn-group">
      <button class="btn">分享</button>
      <button class="btn btn-primary">充值</button>
      <button class="btn">活动详情</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src'

export default {
  name: 'HomeView'
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
</style>
