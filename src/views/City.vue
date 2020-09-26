<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList :cities="cities" :hot="hotCities"></CityList>
    <CityAlphabet :cities="cities"></CityAlphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from 'components/City/Header'
import CitySearch from 'components/City/Search'
import CityList from 'components/City/List'
import CityAlphabet from 'components/City/Alphabet'

export default {
  name: 'City',
  components: { CityAlphabet, CityList, CitySearch, CityHeader },
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
