<template>
  <div class="pure-g basic" @click="advanced = !advanced">
    <div class="pure-u-1-2">
      {{node.ip_addr}}
    </div>
    <div class="pure-u-1-2">
      {{node.name}}
    </div>
    <transition name="dropDown">
      <div class="pure-g advanced" v-if="advanced">
        <div class="pure-u-1-1">
          <div class="pure-g">
            <div class="pure-u-1-2">MAC:</div>
            <div class="pure-u-1-2">{{node.hw_addr}}</div>
          </div>
        </div>
        <div class="pure-u-1-1">
          <div class="pure-g">
            <div class="pure-u-1-2">First seen:</div>
            <div class="pure-u-1-2">{{node.first_seen}}</div>
          </div>
        </div>
        <div class="pure-u-1-1">
          <div class="pure-g">
            <div class="pure-u-1-2">Last seen:</div>
            <div class="pure-u-1-2">{{node.last_seen}}</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import DropDownTransition from '../assets/DropDownTransition';

export default {
  name: 'networkNode',
  props: ['node'],
  components: {
    DropDownTransition,
  },
  data() {
    return {
      advanced: false,
    };
  },
};
</script>
<style scoped>
.basic {
  font-size: 1.5em;
  border-bottom: solid;
  border-top: solid;
  border-size: 1px;
}
</style>
