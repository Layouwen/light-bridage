<template>
  <ul class="list">
    <li class="item" v-for="(item, key) of cities" :key="key"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
    >
      {{key}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {},
  data () {
    return {
      touchStatus: false
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerHTML)
      console.log(e.target.innerHTML, '点击')
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove () {
      if (this.touchStatus) {

      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.list
  display: flex
  flex-direction: column
  justify-content center
  position: absolute
  top: 1.58rem
  right: 0
  bottom: 0
  width: .4rem

  .item
    line-height: .4rem
    color: $bgColor
    text-align: center
</style>
