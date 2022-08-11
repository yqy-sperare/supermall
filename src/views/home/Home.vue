<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";

import { getHomeMultidata } from "network/home.js";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  data() {
    return {
      // 将释放的数据保存这样释放的数据不会消失
      // result: null,
      banners: [],
      recommends: [],
    };
  },
  // 生命周期函数开始
  // 发送网络请求
  created() {
    // 1、请求多个数据,因为数据在request.js已经返回了promise函数，所以直接then
    getHomeMultidata().then((res) => {
      // 此时获得res
      // 函数调用->压入函数栈(保存函数调用过程中所有变量)
      // 此时，如果函数内的元素被函数外的元素占用，函数栈就不会被销毁
      // 函数调用结束->弹出函数栈(释放函数所有的变量)
      console.log(res);
      //这里的this向上找就是data， this指向的是外部函数作用域的this
      // this.result = res;
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
.home-nav {
  /* 导入的normalize.css里面的base.css */
  background-color: var(--color-tint);
  color: white;
}
</style>
