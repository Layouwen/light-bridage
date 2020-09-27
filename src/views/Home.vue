<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper :list="this.swiperList"></HomeSwiper>
    <HomeIcons :list="this.iconList"></HomeIcons>
    <HomeRecommend :list="this.recommendList"></HomeRecommend>
    <HomeWeekend :list="this.weekendList"></HomeWeekend>
  </div>
</template>

<script>
import HomeHeader from 'components/Home/Header'
import HomeSwiper from 'components/Home/Swiper'
import HomeIcons from 'components/Home/Icons'
import HomeRecommend from 'components/Home/Recommend'
import HomeWeekend from 'components/Home/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: { HomeWeekend, HomeRecommend, HomeHeader, HomeSwiper, HomeIcons },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
