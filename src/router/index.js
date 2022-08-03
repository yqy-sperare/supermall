import Vue from 'vue'
import VueRouter from 'vue-router'

// ?路由懒加载
// 把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效。
// import home from '../views/home'
// const home=()=>import ('./views/home')

const home = () => import("views/home/Home.vue");
const category = () => import("views/category/Category.vue");
const cart = () => import("views/cart/Cart.vue");
const profile = () => import("views/profile/Profile.vue");
// 1、安装插件
Vue.use(VueRouter)
// *创建路由对象
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: home
  },
  {
    path: "/cart",
    component: cart
  },
  {
    path: "/category",
    component: category
  },
  {
    path: "/profile",
    component: profile
  }
];
// 2、创建router
const router =new VueRouter({
  routes,
  mode:'history'
})
// 3、导入router
export default router