<template>
  <transition name="t">
  </transition>
</template>
<script>
export default {
  name: 'dropDown',
  data () {
    return {}
  }
}
</script>
<style scoped>
.t-enter {
  transition: opacity .5s /* why is it not working? */
}
.t-enter-to {
  opacity: 0;
}
</style>
