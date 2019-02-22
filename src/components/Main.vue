<template>
  <div>
    <router-view class="sidebar" to="/sidebar"></router-view>
    <router-view class="content" to="/content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'main',
}
</script>

<style scoped>
.sidebar{
  float:left;
  width:120px;
  background-color:#2f4050;
  padding-top:100px;
  height:100%;
}
.content{
  width:100%;
  height:100%;
  padding-top:100px;
  padding-left:140px;
  float:left;
}
</style>
