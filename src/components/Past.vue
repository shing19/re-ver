<template>
  <div class="main">
    <!-- artwork3 -->
    <div class="artwork" id="art3">
      <div id="memory"></div>
      <div class="art-title" id="art3-title">Portal</div>
      <div class="text">Some people and memories connected to them are more blurry<br>and harder to remember than others, therefore the past gets mixed<br>with imagination and the results are brand new memories. Are you<br>sure that what you remember happened for real?</div>
    </div>
    <!-- question -->
    <div class="question">What have influenced<br>your journey the most?</div>
    <!-- artwork2 -->
    <div class="artwork" id="art2">
      <div id="notepad"></div>
      <div class="art-title" id="art2-title">Doodle</div>
      <div class="text">Back in our childhood, scribbling things was a way to give free room to<br>creativity. Sitting in front of an empty paper with some pens in order to<br>start expressing fantasy and imagination.<br><br>Try your best to draw an elephant by memory.<br>Don’t worry if the shape isn’t perfect, we’ll help you finish it.</div>
    </div>
    <!-- question -->
    <div class="question">Do you remember<br>what you did for fun?</div>
    <!-- artwork1 -->
    <el-row class="artwork" id="art1">
      <el-col id="mirror" :span="11" :offset="2">
        <el-row id="mirror-close"></el-row>
        <el-row class="description" id="mirror-text" v-html="message">
          {{ message }}
        </el-row>
        <el-row id="mirror-camera"></el-row>
      </el-col>
      <el-col :span="9" :offset="2">
        <el-row class="question" id="art1-question">Look in the<br>mirror, can<br>you recognize<br>yourself?</el-row>
        <el-row class="art-title" id="art1-title">Mirror</el-row>
        <el-row class="description" id="art1-text">Memories of our past are not always<br>defined and can come to our mind<br>blurred and unclear.<br><br><br><br></el-row>
      </el-col>
    </el-row>
    <!-- question -->
    <div class="question" id="connect">Do you remember<br>what you looked like?</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Press here to<br>open your<br>camera'
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../style.css'
  .main
    bottom 0
    scroll-snap-type y mandatory

  #memory
    height 120vh
    background-image url('../assets/memory.png')
    background-size 100vw
    background-position top
    background-repeat no-repeat

  #notepad
    width 100vw
    height 90vh
    background-image url('../assets/notepad.png')
    background-size contain
    background-position center
    background-repeat no-repeat
  #art1
    width 100vw
    display flex
    flex-wrap wrap

  #mirror
    border: 1px solid transparent;
    background-image url('../assets/mirror.png')
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
  #mirror-close
    height 3vh
    background-image url(../assets/close.png)
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x center
    margin 28vh 0 0 0.3vw
  #mirror-text
    top 15vh
    left 0.2vw
    text-align center
  #mirror-camera
    height 3vh
    background-image url(../assets/camera.png)
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x center
    margin 29vh 0 0 -0.3vw
  #art1-question
    text-align left
    margin 12vh 0 0 -6vw
    font-size 80px
    line-height 80px
  #art1-title
    text-align left
    margin 21vh 0 1vh -6vw
  #art1-text
    text-align left
    margin 0 0 0 -6vw
  #connect
    margin-bottom 50vh
</style>
