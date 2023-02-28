<template>
  <div class="info-index">
    <info-banner></info-banner>
    <info-header></info-header>
    <info-list :list="list"></info-list>
    <div class="div-sty"></div>
  </div>
</template>

<script>
import InfoBanner from '../../components/info/banner.vue';
import InfoHeader from '../../components/info/header.vue';
import InfoList from '../../components/info/list.vue';

export default {
  name: 'info',
  components: {
    InfoBanner,
    InfoHeader,
    InfoList,
  },
  data() {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人票数据一',
              children: [
                {
                  title: '分票',
                },
              ],
            },
          ],
        },
        {
          title: '儿童票',
        },
        {
          title: '学生票',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.div-sty{
  height: 60rem;
}
</style>
