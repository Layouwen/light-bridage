<template>
  <div>
    <CityHeader />
    <CitySearch :cities="cities" />
    <CityList :cities="cities" :hot="hotCities" :letter="letter" />
    <CityAlphabet :cities="cities" @change="handleLetterChange" />
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
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () { axios.get('/api/city.json').then(this.handleGetCityInfoSucc) },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) { this.letter = letter }
  },
  mounted () { this.getCityInfo() }
}
</script>
