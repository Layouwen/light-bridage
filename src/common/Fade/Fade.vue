<template>
  <transition>
    <slot />
  </transition>
</template>

<script lang='js'>
export default {
  name: 'Fade'
}
</script>

<style lang="stylus" scoped>
.v-enter, .v-leave-to
  opacity: 0

.v-enter-active, .v-leave-active
  transition: opacity .5s
</style>
