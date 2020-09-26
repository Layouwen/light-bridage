<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList></CityList>
    <CityAlphabet></CityAlphabet>
  </div>
</template>

<script>
import CityHeader from 'components/City/Header'
import CitySearch from 'components/City/Search'
import CityList from 'components/City/List'
import CityAlphabet from 'components/City/Alphabet'

export default {
  name: 'City',
  components: { CityAlphabet, CityList, CitySearch, CityHeader }
}
</script>

<style lang="stylus" scoped>

</style>
