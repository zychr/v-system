import Vue from 'vue'
import Router from 'vue-router'
import Sidebar from '@/components/Sidebar'
import Content from '@/components/Home'
import Student from '@/components/students'
import Teachers from '@/components/teachers'
import Shooping from '@/components/shooping'
import Login from '@/components/login'


Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  mode:'history',
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
          path:'/',
          name:'Student',
          component:Student
        },
        {
          path:'/students',
          name:'Student',
          component:Student
        },
        {
          path:'/teachers',
          name:'Teachers',
          component:Teachers
        },
        {
          path:'/shooping',
          name:'Shooping',
          component:Shooping
        }
      ]
    },
  ]
})
