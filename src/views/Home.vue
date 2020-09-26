<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
    <HomeRecommend></HomeRecommend>
  </div>
</template>

<script>
import HomeHeader from 'components/Header'
import HomeSwiper from 'components/Swiper'
import HomeIcons from 'components/Icons'
import HomeRecommend from 'components/Recommend'

export default {
  name: 'Home',
  components: { HomeRecommend, HomeHeader, HomeSwiper, HomeIcons }
}
</script>
