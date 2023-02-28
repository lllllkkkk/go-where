<template>
  <div class="info-index">
    <info-banner></info-banner>
    <info-header></info-header>
    <div class="div-sty"></div>
  </div>
</template>

<script>
import InfoBanner from '../../components/info/banner.vue';
import InfoHeader from '../../components/info/header.vue';

export default {
  name: 'info',
  components: {
    InfoBanner,
    InfoHeader,
  },
};
</script>

<style lang="scss" scoped>
.div-sty{
  height: 60rem;
}
</style>
