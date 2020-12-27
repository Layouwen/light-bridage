<template>
  <div>
    <div class="search">
      <input class="search-input" v-model="keyword" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class='search-content' ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key='item.id' @click="handleChangeCity(item.name)">
          {{ item.name }}
        </li>
        <li v-show="hasList" class="search-item border-bottom">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: { cities: Object },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: { hasList () { return !this.list.length } },
  methods: {
    ...mapMutations(['changeCity']),
    handleChangeCity (city) {
      this.changeCity(city)
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      if (this.timer) clearTimeout(this.timer)
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        // 空结果
        const result = []
        // 遍历所有地址的字母
        for (const i in this.cities) {
          // 遍历对应字母的城市
          this.cities[i].forEach(value => {
            // 判断输入的拼音是否包含在spell中 或者 中文是否包含在name中
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () { this.scroll = new Bscroll(this.$refs.search, { click: true }) }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.search
  height: .72rem
  padding: 0 .1rem
  background: $bgColor

  .search-input
    box-sizing: border-box
    width: 100%
    height: .62rem
    line-height: .62rem
    padding: 0 .1rem
    color: #666
    text-align: center
    border-radius: .06rem

.search-content
  z-index: 1
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  background: #eee

  .search-item
    line-height: .62rem
    padding-left: .2rem
    color: #666
    background: #fff
</style>
