<template>
  <div class="header-list">
    <div v-if="list.length">
      <div v-for="(item, index) in list" :key="index" @click="handleCity(item.title)">
        <div class="list-sty">
          <span class="icon-sty"></span>
          {{ item.title }}
        </div>
        <div v-if="item.children" class="item-children">
          <header-list :list="item.children"></header-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'header-list',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {

    };
  },

  methods: {
    ...mapMutations(['changeCity']),
    handleCity(item) {
      this.changeCity(item);
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.list-sty {
  position: relative;
  height: .8rem;
  line-height: .8rem;
  font-size: .32rem;
  padding: 0 .2rem;
  border-bottom: solid 1px rgb(208, 208, 208);
  display: flex;
  align-items: center;
  width: 100%;

  .icon-sty {
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.45rem no-repeat;
    background-size: .4rem 3rem;
  }

}

.item-children {
  .list-sty {
    padding: 0 .4rem;
  }
}
</style>
