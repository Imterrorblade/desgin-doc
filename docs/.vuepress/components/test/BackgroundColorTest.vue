<template>
  <div class="demo-color">
    <div class="demo-wrap" v-if="type === 'gradient'" >
      <div v-for="(value, key) in colors" :key="key" :class="`fill-gradient__${key}`"></div>
    </div>
    <div class="demo-wrap" v-else>
      <div v-for="(value, key) in colors" :key="key" :class="`fill__${key}`"></div>
    </div>
  </div>
</template>


<script>
import ColorMap from '../src/color/color.config'
export default {
  name: 'BackgroundColorTest',
  props: {
    type: String
  },
  data() {
    return {
      colors: {
        'blue': '#0083EE',
        'orange': '#FFCC33',
        'green': '#30CC77',
        'red': '#F34C4D',
        'purple': '#6363FF'
      }
    }
  },
  created() {
    if (this.type) {
      this.colors = ColorMap[this.type]
    }
  },
}
</script>


<style lang="scss">
.demo-color{
  width: 100%;
  .demo-wrap {
    div {
      box-shadow:0px 2px 10px 0px rgba(0,0,0,0.1);
      margin: 10px;
      height: 20px;
      width: 100%;
    }
  }
}
</style>
