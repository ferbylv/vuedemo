import Vue from 'vue'
import Router from 'vue-router'
import HomeContent from '../components/HomeContent'
import Home from '../components/Home'
import Article from '../components/Article'
import WriteArticle from '../components/WriteArticle'
import AllArticle from '../components/AllArticle'
import CommentArticle from '../components/CommentArticle'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'homeContent',
          component: HomeContent
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
