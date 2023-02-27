<template>
  <div class="home">
    <my-header-com></my-header-com>
    <my-swiper></my-swiper>
    <index-icons></index-icons>
    <recommend></recommend>
    <my-week></my-week>
  </div>
</template>

<script>
import Header from '../components/home/header.vue';
import Swiper from '../components/home/swiper.vue';
import Icons from '../components/home/icons.vue';
import Recommend from '../components/home/recommend.vue';
import Week from '../components/home/week.vue';

export default {
  name: 'Home',
  components: {
    MyHeaderCom: Header,
    MySwiper: Swiper,
    IndexIcons: Icons,
    Recommend,
    MyWeek: Week,
  },
};
</script>
