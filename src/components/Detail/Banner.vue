<template>
  <div>
    <!-- 点击打开图片预览 -->
    <div class='banner' @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt='' />
      <!-- 底部文字 -->
      <div class="banner-info">
        <div class="banner-title"> {{ this.sightName }}</div>
        <div class='banner-number'>
          <span class="iconfont banner-icon">&#xe692;</span>
          {{ this.bannerImgs.length }}
        </div>
      </div>
    </div>
    <!-- 打开的预览组件 -->
    <Fade>
      <CommonGallery :imgs="bannerImgs" v-show="showGallery" @close="handleGalleryClick"></CommonGallery>
    </Fade>
  </div>
</template>

<script>
import Fade from 'common/Fade/Fade'
import CommonGallery from 'common/Gallery/Gallery'
export default {
  name: 'DetailBanner',
  components: {
    Fade,
    CommonGallery
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      // 标记是否显示图片预览
      showGallery: false
    }
  },
  methods: {
    // 显示图片预览
    handleBannerClick () {
      this.showGallery = true
    },
    // 关闭图片预览
    handleGalleryClick () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%

  .banner-img
    width: 100%

  .banner-info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    color: #fff
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))

    .banner-title
      flex: 1
      padding: 0 .2rem
      font-size: .32rem

    .banner-number
      height: .32rem
      line-height: .32rem
      margin-top: .14rem
      padding: 0 .4rem
      font-size: .24rem
      border-radius: .2rem
      background: rgba(0, 0, 0, .8)

      .banner-icon
        font-size: .24rem
</style>
