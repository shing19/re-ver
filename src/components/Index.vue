<template>
  <div>
    <Header/>
    <Welcome
      @show="showExhibition($event)"
      @start="startVisit"
    />
    <div id="exhibition" ref="exhibition" class="hidden">
      <Future/>
      <Present/>
      <Past/>
      <Start id="start"/>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '../style.css'
  .hidden
    display none
</style>

<script>
import Header from './Header.vue'
import Welcome from './Welcome.vue'
import Future from './Future.vue'
import Present from './Present.vue'
import Past from './Past.vue'
import Start from './Start.vue'

export default {
  components: {
    Header, Welcome, Future, Present, Past, Start
  },
  methods: {
    showExhibition (e) {
    },
    startVisit: function () {
      this.$refs.exhibition.classList.remove('hidden')
      this.$el.querySelector('#start').scrollIntoView({
        behavior: 'smooth', // 平滑过渡
        block: 'start' // 上边框与视窗顶部平齐。默认值
      })
    }
  }
}
</script>
