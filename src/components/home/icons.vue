<template>
  <div class="icons">
    <div v-for="(item, index) in icons" :key="index" class="icon">
      <img class="img-sty" :src="item.imgUrl" alt="">
      <p class="name-sty">{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index-icons',
  data() {
    return {
      icons: [
        {
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          name: '酒店123343544554',
        },
        {
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
          name: '机票',
        },
        {
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
          name: '火车票',
        },
        {
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
          name: '度假',
        },
        {
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
          name: '周边游',
        },
        {
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
          name: '火车票',
        },
        {
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
          name: '度假',
        },
        {
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
          name: '周边游',
        },

      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.icons {
  overflow: hidden;
  // height: 3rem;
  display: flex;
  flex-wrap: wrap;
  .icon {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: .4rem;
    .img-sty{
      width: 1rem;
      height: 1rem;
    }
    .name-sty{
        margin-top: .2rem;
        color: rgb(68, 68, 67);
        width: 60px;
        @include ellipsis()
      }
  }
}
</style>
