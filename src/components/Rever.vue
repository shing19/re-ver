<template>
  <div>
    <el-container width="device-width">
      <el-header height="0px"></el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">Exhibition</el-menu-item>
          <el-menu-item index="2">Library</el-menu-item>
          <el-menu-item index="3">Logo of D&I</el-menu-item>
        </el-menu>
      <div id="main">

        <button @click="scrollToBottom">Scroll to Bottom</button>
        <div id="example-1">
          <button v-on:click="counter += 1">Add 1</button>
          <p>The button above has been clicked {{ counter }} times.</p>
        </div>

        <div id="welcome" class="backgroundimg">
          <p>Fixed background</p>
          <div>
            <el-col :span="16" :offset="4">
              <div id="title" class="content" style="magin-bottom:120px">
                <br>
                <p>Text of exhibition title</p>
                <br>
              </div>
            </el-col>
            <el-col :span="16" :offset="4">
              <div id="1-2-intro" class="content">
                <br>
                <p>Text of introduction</p>
                <br><br><br><br><br><br><br>
              </div>
            </el-col>
            <el-col :span="12" :offset="6">
              <div id="1-3-bg" class="content">
                <br>
                <p>Insert image for introduction here</p>
                <br><br><br><br><br><br><br>
              </div>
            </el-col>
          </div>
        </div>
        <div id="future" class="backgroundimg" >
          <p>Fixed background for part of future</p>
          <div id="2-1-art5">
            <p>Insert art work #5 here</p>
          </div>
          <div id="2-2-talk">
            <p>Text of transition</p>
          </div>
          <div><p>Text</p></div>
          <div><p>Text</p></div>
          <div><p>Text</p></div>
          <div><p>Text</p></div>
          <div><p>Text</p></div>
          <div><p>Text</p></div>
          <div><p>Text</p></div>
          <div><p>Text</p></div>
          <div><p>Text</p></div>
          <div><p>Text</p></div>
          <div><p>Text</p></div>
          <div><p>Text</p></div>
          <div><p>Text</p></div>
          <div><p>Text</p></div>
          <div><p>Text</p></div>
          <div><p>Text</p></div>
          <div><p>Text</p></div>
          <div><p>Text</p></div>
          <div><p>Text</p></div>
        </div>
        <div id="present" class="backgroundimg">
          <p>Fixed background for part of present</p>
          <div id="3-1-art4">
            <p>Insert art work #4 here</p>
          </div>
          <div id="3-2-talk">
            <p>Text of transition</p>
          </div>
        </div>
        <div id="past" class="backgroundimg">
          <div id="4-1-art3">
            <p>Insert art work #3 here</p>
          </div>
          <p>Fixed background for part of present</p>
          <div id="4-2-talk">
            <p>Text of transition</p>
          </div>
          <div id="4-3-art2">
            <p>Insert art work #2 here</p>
          </div>
          <div id="4-4-talk">
            <p>Text of transition</p>
          </div>
          <div id="4-5-art1">
            <p>Insert art work #1 here</p>
          </div>
          <div id="4-6-talk">
            <p>Text of transition</p>
          </div>
        </div>
      </div>
    </el-container>
  </div>
</template>

<style scoped>
  el-header {
    padding:0%;
    margin:0%
  }
  .backgroundimg {
    width: 100%;
    height: 100vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    scroll-snap-align: center;
  }
  .content {
    background-color: white;
    opacity: 0.8;
    margin: 20px;
  }
  p {
    margin: 20px;
  }
  #main {
    scroll-snap-type: y;
  }
  #title {
    margin: 50% 0 50% 0;
  }
  #welcome {
    background-color:lightgray
  }
  #future {
    background-color:darkgray
  }
  #present {
    background-color:gray
  }
  #past {
    background-color:dimgray
  }
</style>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    scrollToBottom () {
      window.scollTo(0, document.body.scrollHeight)
    }
  }
}
</script>
