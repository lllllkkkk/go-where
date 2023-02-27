<template>
  <div class="home">
    <my-header-com></my-header-com>
    <my-swiper></my-swiper>
    <index-icons></index-icons>
  </div>
</template>

<script>
import Header from '../components/home/header.vue';
import Swiper from '../components/home/swiper.vue';
import Icons from '../components/home/icons.vue';

export default {
  name: 'Home',
  components: {
    MyHeaderCom: Header,
    MySwiper: Swiper,
    IndexIcons: Icons,
  },
};
</script>
