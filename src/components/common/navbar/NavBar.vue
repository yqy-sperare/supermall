<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  /* line-height生效必须要有内容 */
  line-height: 44px;
  /* 字体居中 给三个div都设置  display: grid;   place-items: center;  都是中心居中*/
  text-align: center;
  /* 导航栏底部阴影 */
  box-shadow: 0 1px 20px rgba(100, 100, 100, 0.1);
}
.left,
.right {
  width: 60px;
  /* background-color: rebeccapurple; */
}
.center {
  flex: 1;
}
</style>
