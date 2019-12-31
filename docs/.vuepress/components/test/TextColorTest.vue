<template>
  <div class="text-color-demo">
    <div class="demo-wrap" >
      <span v-for="(value, key) in colors" :key="key" :class="`text__${key}`">{{`text__${key}`}}</span>
    </div>
  </div>
</template>


<script>
import ColorMap from '../src/color/color.config'
export default {
  name: 'TextColorTest',
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
    this.colors = ColorMap['text']
  },
}
</script>


<style lang="scss">
.text-color-demo{
  width: 100%;
  span {
    margin: 0px 10px;
    line-height: 30px
  }
}
</style>
