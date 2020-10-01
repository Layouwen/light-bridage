<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag="li" class="item border-bottom" v-for="item of list" :key="item.id" :to="'/detail/'+item.id">
        <!-- 添加border-bottom 一像素边框解决方案 -->
        <img :src="item.imgUrl" alt=""
             class="item-img"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top: .2rem
  line-height: .8rem
  background: #eee
  text-indent: .2rem

.item
  overflow: hidden
  display: flex
  height: 1.9rem

  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: .1rem

  .item-info
    flex: 1
    min-width: 0 /* 解决ellipsis无法生效 */
    padding: .1rem

    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()

    .item-desc
      color: #ccc
      line-height: .4rem
      ellipsis()

    .item-button
      padding: 0 .2rem
      margin-top: .16rem
      line-height: .44rem
      color: #fff
      border-radius: .06rem
      background: #ff9300
</style>
