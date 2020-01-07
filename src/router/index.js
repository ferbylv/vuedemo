import Vue from 'vue'
import Router from 'vue-router'
import Recomment from '../components/Recomment'
import Home from '../components/Home'
import Article from '../components/Article'
import WriteArticle from '../components/WriteArticle'
import AllArticle from '../components/AllArticle'
import CommentArticle from '../components/CommentArticle'
import Follow from '../components/Follow'
Vue.use(Router)
console.log(2)
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'recomment',
          component: Recomment
        },
        {
          path: '/home/follow',
          name: 'follow',
          component: Follow
        }
      ]
    },
    {
      path: '/',
      redirect () {
        return '/home'
      }
    },
    {
      path: '/article',
      name: 'article',
      component: Article,
      children: [
        {
          path: '/',
          name: 'write',
          component: WriteArticle
        },
        {
          path: '/article/all',
          name: 'all',
          component: AllArticle
        },
        {
          path: '/article/comment',
          name: 'comment',
          component: CommentArticle
        }
      ]
    }
  ]
})
