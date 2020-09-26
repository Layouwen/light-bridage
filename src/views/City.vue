<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
  </div>
</template>

<script>
import CityHeader from 'components/City/Header'
import CitySearch from 'components/City/Search'

export default {
  name: 'City',
  components: { CitySearch, CityHeader }
}
</script>

<style lang="stylus" scoped>

</style>
