import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Article from '../components/Article'
import WriteArticle from '../components/WriteArticle'
import AllArticle from '../components/AllArticle'
Vue.use(Router)
console.log(2)
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
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
        }
      ]
    }
  ]
})
