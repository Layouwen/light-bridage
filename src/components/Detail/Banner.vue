<template>
  <div>
    <div class='banner' @click="handleBannerClick">
      <img class="banner-img"
           src="http://img1.qunarzz.com/sight/p0/1809/56/5639ccfd58c4cca4a3.img.png_600x330_44844fd9.png" alt="">
      <div class="banner-info">
        <div class="banner-title">广州正佳极地海洋世界</div>
        <div class='banner-number'>
          <span class="iconfont banner-icon">&#xe692;</span>
          39
        </div>
      </div>
    </div>
    <CommonGallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClick"></CommonGallery>
  </div>
</template>

<script>
import CommonGallery from 'common/Gallery/Gallery'

export default {
  name: 'DetailBanner',
  components: { CommonGallery },
  data () {
    return {
      showGallery: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1907/90/903428cd6de6a2c1a3.img.jpg_r_800x800_dc4abb35.jpg',
        'http://img1.qunarzz.com/sight/p0/1907/fa/faf812e0abc7cc95a3.img.jpg_r_800x800_55fc749a.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
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
