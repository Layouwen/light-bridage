<template>
  <div>
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content">
      <DetailList :list="list"></DetailList>
    </div>
  </div>
</template>

<script>

import DetailBanner from 'components/Detail/Banner'
import DetailHeader from 'components/Detail/Header'
import DetailList from 'components/Detail/List'

export default {
  name: 'Detail',
  components: { DetailList, DetailHeader, DetailBanner },
  data () {
    return {
      list: [{ id: 1 }, { id: 2 }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>
