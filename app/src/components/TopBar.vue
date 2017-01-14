<template>
  <div class="top-bar">
    <div class="pure-g">
      <div class="pure-u-1-1">
        cSploit
      <div class="menu-icon">
        <hamburger-menu-icon></hamburger-menu-icon>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import HamburgerMenuIcon from './HamburgerMenuIcon';

export default {
  name: 'top-bar',
  components: {
    HamburgerMenuIcon,
  },
  data() {
    return {};
  },
};
</script>
<style>
.top-bar {
  background-color: blue;
  color: white;
  height: 32px;
  font-weight: bold;
  font-size: 1.4em;
}
.menu-icon {
  position:absolute;
  top: 0;
  right: 0;
}
</style>
