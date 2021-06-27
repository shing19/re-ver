<template>
  <div class="container">
    <div class="page" id="welcome">
      <el-row id="title">RE - VER</el-row>
      <el-row id="title-sub">Into the flow of time</el-row>
      <div id="intro">
        <el-row id="intro-text">Welcome.<br><br>This is an interactive exhibition.<br><br>We will let you travel through time, re-call your memories of the past,<br> re-flect on the present and even re-imagine what the future holds.<br><br>You’ll be diving deep into your memories.<br><br>Don’t worry, we won’t let you sink.<br><br>Take a deep breath and dive into the<br><br><b>Re-ver.</b>
        </el-row>
        <el-row>
          <el-button id="intro-button" @mouseenter.native="$emit('show')" @click="$emit('start')">Ready to start?<br><img src="../assets/arrow.svg" alt=""></el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  *
    box-sizing border-box

  .container::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }

  .container
    height 100vh
    scroll-snap-type y mandatory
    background-color black
    color white
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */
    overflow-x hidden
    overflow-y auto

  .page
    height 100vh
    width 100vw
    scroll-snap-align center
    font-size calc(var(--font-size) * 1px)
    font-weight bold
    align-items center
    position relative
    overflow-x hidden
    overflow-y auto
    display: flex
    scroll-behavior: smooth

  .page
    color rgba(255,255,255,0.4)
    font-size 3rem
    text-align center
    flex-direction: column

    @media(min-width 768px)
      font-size 5rem

    &:nth-child()
      background #7e05d7
    &:nth-child(2n)
      background #f21e56
    &:nth-child(3n)
      background #000000

  #welcome
    width 100vw

  #title
    font-family Stanley
    color white
    font-size 145px
    font-weight 500
    margin 30vh 0 2vh 0

  #title-sub
    font-family Open Sans
    color white
    font-size 20px
    margin-bottom 50vh

  #intro-text
    font-family Open Sans
    color white
    font-size 22px
    font-weight 100
    line-height 28px
    margin-bottom 8vh

  #intro-button
    margin-bottom 10vh
    color white
    background-color rgba(0,0,0,0)
    border-color rgba(0,0,0,0)
    font-family Open Sans
    font-size 28px
    font-weight 100
    text-align center
    line-height 60px

  #intro
    width 80vw
    background-image url("../assets/intro.svg")
    background-size contain
    background-position bottom
    background-repeat no-repeat
</style>

<script>
export default {
  data () {
    return {
      scrollTop: 0,
      isActive: true,
      active: ''
    }
  },
  methods: {
    showContent () {
      this.active = 'background-color: rgb(235,235,235)'
      this.isActive = false
    },
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
