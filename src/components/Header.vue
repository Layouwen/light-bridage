<template>
  <div class=header>
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont arrow-icon">&#xe632;</span>
      输入城市/景点/游玩项目
    </div>
    <div class="header-right">
      城市
      <span class="iconfont">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '../assets/styles/varibles.styl'

  .header
    display: flex
    line-height: .86rem
    color: #fff
    background: $bgColor

    .header-left
      width: .64rem
      float: left

      .back-icon
        text-align: center
        font-size: .4rem

    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      padding-left: .2rem
      margin-top: .12rem
      margin-left: .2rem
      color: #ccc
      border-radius: .1rem
      background: #fff

      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem

    .header-right
      width: 1.24rem
      float: right
      text-align: center
</style>
