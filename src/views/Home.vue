<template>
  <div class="home">
    <my-header-com></my-header-com>
    <my-swiper></my-swiper>
  </div>
</template>

<script>
import Header from '../components/home/header.vue';
import Swiper from '../components/home/swiper.vue';

export default {
  name: 'Home',
  components: {
    MyHeaderCom: Header,
    MySwiper: Swiper,
  },
};
</script>
