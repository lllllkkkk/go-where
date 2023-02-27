<template>
  <div class="week">
    <div class="recommend-title">周末去哪玩</div>
    <ul>
      <div class="div-sty" v-for="(item,index) in list" :key="index">
        <img :src="item.imgUrl" class="img-sty" alt="">
        <div class="bottom-sty">
          <span class="name-sty">{{ item.name }}</span>
          <span class="desc-sty">{{ item.desc }}</span>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'week',
  data() {
    return {
      list: [
        {
          imgUrl: 'https://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_256x160_f977b5d4.jpg',
          name: '温泉有水上乐园',
          desc: '泡泡温泉，吹吹海风，深觉人生美好',
        },
        {
          imgUrl: 'https://img1.qunarzz.com/sight/p0/2301/2b/2b1330228fd3ae11a3.water.jpg_256x160_da635d8d.jpg',
          name: '温泉有水上乐园',
          desc: '泡泡温泉，吹吹海风，深觉人生美好',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.week {
  .recommend-title {
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
  }
  .div-sty{
    display: flex;
    flex-direction: column;
    .img-sty{
      width: 100%;
      height: 2.8rem;
    }
    .bottom-sty{
      display: flex;
      flex-direction: column;
      padding: .2rem 0 .3rem .2rem;
      .name-sty{
        color: black;
        font-size: 14px;
      }
      .desc-sty{
        margin-top: 10px;
        color: rgb(86, 86, 86);
      }
    }
  }
}
</style>
