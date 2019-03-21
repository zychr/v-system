<template>
  <div id="app">
    <div class="header">
       <div class="logo">
          <img src="">
       </div>
       <div class="login">
           <a>登录</a> / <a>注册</a>
       </div>
    </div>
    <router-view class="sidebar" name="sidebar"></router-view>
    <router-view class="content" name="content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
*{
  padding:0;
  margin:0;
  border:none;
}
body{
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position:relative;
}
.header{
  width:100%;
  height:80px;
  background-color:#2f4050;
  line-height:80px;
  overflow:hidden;
  padding:0 20px;
  box-sizing:border-box;
  position:fixed;
  top:0;
  left:0;
  z-index:99;
  .logo{
    float:left;
    margin-left:160px;
    img{
      margin-top:22px;
    }
  }
  .login{
    float:right;
    color:#fff;
  }
}
.sidebar{
  position:fixed;
  width:160px;
  background-color:#2f4050;
  padding-top:100px;
  height:100%;
  left:0;
  top:0;
  z-index:98;
}
.content{
  width:100%;
  height:100%;
  padding-top:100px;
  padding-left:180px;
  position:fixed;
  left:0;
  top:0;
  z-index:97;
  box-sizing:border-box;
  padding-right:20px;
}
</style>
