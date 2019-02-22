import Vue from 'vue'
import Router from 'vue-router'
import Sidebar from '@/components/Sidebar'
import Content from '@/components/Home'
import Student from '@/components/students'
import Teachers from '@/components/teachers'
import Login from '@/components/login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      component:Login
    },
    {
      path: '/',
      components: {
        sidebar:Sidebar,
        content:Content
      },
      children:[
        {
          path:'/students',
          component:Student
        },
        {
          path:'/teachers',
          component:Teachers
        }
      ]
    },
  ]
})
