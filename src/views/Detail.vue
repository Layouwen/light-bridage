<template>
  <div>
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content"></div>
  </div>
</template>

<script>

import DetailBanner from 'components/Detail/Banner'
import DetailHeader from 'components/Detail/Header'

export default {
  name: 'Detail',
  components: { DetailHeader, DetailBanner }
}
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>
