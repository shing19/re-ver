<template>
  <div class="container">
    <img id="logo" src="" alt="logo" width="100px" height="30px" />
    <div class="menu">
      <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">Exhibition</el-menu-item>
        <el-menu-item index="2">Library</el-menu-item>
      </el-menu>
    </div>
    <div class="page" id="welcome">
      <el-row>title</el-row>
      <el-row>introduction</el-row>
      <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>
      <el-row>background image of introduction</el-row>
      <el-row>
        <el-button @click="scrollToBottom">Enter the Exhibition</el-button>
      </el-row>
    </div>
    <div class="page" id="future">
      <el-row>artwork 5</el-row>
    </div>
    <div class="page" id="present">
      <el-row>artwork 4</el-row>
    </div>
    <div class="page" id="past">
      <el-row>artwork 3</el-row>
      <el-row>artwork 2</el-row>
      <el-row>artwork 1</el-row>
    </div>
    <div class="page" id="ending">ending</div>
  </div>
</template>

<style lang="stylus" scoped>
  *
    box-sizing border-box

  body
    font-family 'Lato', sans-serif
    background-color black
    min-height 100vh
    overflow-x hidden
    scroll-behavior: smooth

  p
    width 40
    font-size 1rem

  .content
    flex-direction: column
    font-size 1rem
    text-align center
    overscroll-behavior: auto

  .page
    height 100vh
    width 100vw
    scroll-snap-align center
    font-size calc(var(--font-size) * 1px)
    font-weight bold
    display flex
    align-items center
    position relative
    overflow auto
    display: flex
    flex-direction: column

  .container
    height 100vh
    overflow auto
    overflow-x hidden
    scroll-snap-type y mandatory
    background-color black
    color white

  .menu
    scroll-snap-align start
    float right
    background-color black
    color white

  .el-menu,
  .el-menu-item,
  .el-menu-item:hover,
  .el-menu-item.is-active
    background-color black !important
    color white !important
    border-bottom none !important
  .el-menu-item.is-active
    font-weight bolder
    border-bottom none

  #logo
    float left
    text-align center
    margin 10px

  .page
    color rgba(255,255,255,0.4)
    font-size 3rem
    text-align center
    line-height 50vh
    flex-direction: column

    @media(min-width 768px)
      font-size 5rem

    &:nth-child(n)
      background #7e05d7
    &:nth-child(2n)
      background #f21e56
    &:nth-child(3n)
      background #bd04a9
</style>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    scrollToBottom () {
      this.$el.querySelector(`#ending`).scrollIntoView({
        behavior: 'smooth', // 平滑过渡
        block: 'start' // 上边框与视窗顶部平齐。默认值
      })
      // window.scrollTo(0, document.body.scrollHeight)
    }
  }
}
</script>
