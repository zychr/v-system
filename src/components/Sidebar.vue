<template>
   <ul class="menu">
      <li>
         <router-link to="/teachers" exact>教师列表</router-link>
      </li>
      <li>
         <router-link to="/students" exact>学生列表</router-link>
      </li>
      <li>
         <router-link to="/shooping" exact>书籍列表</router-link>
      </li>
   </ul>
</template>

<script>
  export default {
    name:'sidebar',  
  };
</script>

<style scoped>
.menu li{
  margin:10px 0;
  text-align:left;
  padding:0 10px;
}
.menu a{
  color:#fff;
  text-decoration:none;
}
.menu a:hover{
  color:red;
}
.router-link-active{
  color:red !important;
}
</style>