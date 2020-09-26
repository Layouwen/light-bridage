<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList></CityList>
  </div>
</template>

<script>
import CityHeader from 'components/City/Header'
import CitySearch from 'components/City/Search'
import CityList from 'components/City/List'

export default {
  name: 'City',
  components: { CityList, CitySearch, CityHeader }
}
</script>

<style lang="stylus" scoped>

</style>
