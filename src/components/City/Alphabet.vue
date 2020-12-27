<template>
  <ul class="list">
    <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: { cities: Object },
  computed: {
    // 生成列表
    letters () {
      const letters = []
      for (const i in this.cities) letters.push(i)
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: false
    }
  },
  updated () {
    // 移动到A的位置
    this.startY = this.$refs.A[0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerHTML)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    // 滑动主要逻辑
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) { clearTimeout(this.timer) }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 8)
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
