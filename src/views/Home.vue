<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
    <HomeRecommend></HomeRecommend>
    <HomeWeekend></HomeWeekend>
  </div>
</template>

<script>
import HomeHeader from 'components/Header'
import HomeSwiper from 'components/Swiper'
import HomeIcons from 'components/Icons'
import HomeRecommend from 'components/Recommend'
import HomeWeekend from 'components/Weekend'
import axios from 'axios'

export default {
  name: 'Home',
  components: { HomeWeekend, HomeRecommend, HomeHeader, HomeSwiper, HomeIcons },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
