import Vue from 'vue'
import Router from 'vue-router'
import UserProfile from '../components/UserProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user-profile',
      name: 'UserProfile',
      component: UserProfile
    }
    /*{
      path: '/VerifyNumber',
      name: 'VerifyNumber',
      component: VerifyNumber
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }*/
  ]

})
