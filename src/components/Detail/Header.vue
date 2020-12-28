<template>
  <div>
    <!-- 距离顶部小于 60 时显示的返回箭头 -->
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <!-- 距离顶部大于 60 的时候显示的 header -->
    <div class="header-fixed" :style="opacityStyle" v-show="!showAbs">
      景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      // 默认显示小于 60 的箭头
      showAbs: true,
      // header 的透明度
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // 获取当前具体顶部的距离
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      // 当大于 60 的时候开始显示 header
      if (top > 60) {
        // 计算透明度
        let opacity = top / 140
        // 设置最大透明度为 1
        opacity = opacity > 1 ? 1 : opacity
        // 赋值给变量
        this.opacityStyle = { opacity }
        // 只要大于 60 则显示 header
        this.showAbs = false
      } else {
        // 如果小于 60 则显示单箭头
        this.showAbs = true
      }
    }
  },
  mounted () {
    // 监听滑动事件，计算header的透明度
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    // 消除滑动事件的监听
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header-abs
  position: absolute
  top: .2rem
  left: .2rem
  width: .8rem
  height: .8rem
  line-height: .8rem
  text-align: center
  border-radius: .4rem
  background: rgba(0, 0, 0, .8)

  .header-abs-back
    color: #fff
    font-size: .4rem

.header-fixed
  position: fixed
  top: 0
  left: 0
  right: 0
  z-index: 2
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  font-size: .32rem
  color: #fff
  background: $bgColor

  .header-fixed-back
    position: absolute
    top: 0
    left: 0
    width: .64rem
    color: #fff
    font-size: .4rem
    text-align: center
</style>
