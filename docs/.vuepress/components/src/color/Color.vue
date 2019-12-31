<template>
  <div class="color-wrap">
    <div class="color-item" v-for="(value, key) in colors" :key="key">
      <div class="color-sample">
        <div class="main-color" :style="{background: value}"></div>
      </div>
      <div class="text-left text-wrap content">{{key}}</div>
    </div>
  </div>
</template>

<script>
import ColorMap from './color.config'
export default {
  name: 'Color',
  props: {
    type: String
  },
  data() {
    return {
      colors: {
        'white': '#ffffff',
        'purple': '#7b29ff',
        'green': '#02ba3d'
      }
    }
  },
  created() {
    if (this.type) {
      this.colors = ColorMap[this.type]
    }
  }
}
</script>

<style lang="scss" scoped>

.color-wrap {
  display: flex;
  flex-direction: row;
  padding: 16px 0px;
  flex-wrap: wrap;
}
.color-item {
  padding: 16px;
  .color-sample {
    width: 82px;
    height: 82px;
    overflow: hidden;
    border-radius: 4px;
    box-shadow:0px 2px 10px 0px rgba(0,0,0,0.1);
    .main-color {
      width: 100%;
      height: 100%;
    }
  }
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-wrap{
  padding-top: 8px;
}


</style>
