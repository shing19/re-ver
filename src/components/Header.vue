<template>
  <div class="container">
    <img id="logo" src="../assets/di_logo.png" alt="logo" height="40px" />
    <div class="menu">
      <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">Exhibition</el-menu-item>
        <el-menu-item index="2">Process</el-menu-item>
        <el-menu-item index="3">Gallery</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .container::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }

  .container
    height 10vh
    scroll-snap-type y mandatory
    background-color black
    color white
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */
    overflow-x hidden
    overflow-y auto

  #logo
    float left
    text-align center
    margin 20px 0 0 30px

  .menu
    scroll-snap-align start
    float right
    background-color black
    color white

  .el-menu,
  .el-menu-item,
  .el-menu-item:hover,
  .el-menu-item.is-active
    font-size 16px
    background-color black !important
    color white !important
    border-bottom none !important
    margin-top 7px
    margin-right 7px
  .el-menu-item.is-active
    font-weight bolder
    border-bottom none
</style>
