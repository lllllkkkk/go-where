<template>
  <div class="home">
    <my-header-com></my-header-com>
  </div>
</template>

<script>
import Header from '../components/home/header.vue';

export default {
  name: 'Home',
  components: {
    MyHeaderCom: Header,
  },
};
</script>
