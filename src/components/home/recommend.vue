<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
        <router-link class="div-sty" v-for="(item, index) in recommendList"
                     :key="index"
                     :to="'/info/' + index">
          <img class="img-sty" :src="item.imgUrl" alt="">
          <div class="right-sty">
            <span class="name-sty">{{ item.name }}</span>
            <span class="describe-sty">{{ item.describe }}</span>
            <div style="margin-top: 12px;">
              <span style="color:rgb(255, 204, 0);font-size: 12px;">¥ </span>
              <span class="price-sty">{{ item.price }}</span>
              <span style="font-size:12px;color:rgb(115, 115, 115)"> 起</span>
            </div>
          </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  data() {
    return {
      recommendList: [
        {
          imgUrl: 'https://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg',
          name: '大连圣亚海洋世界',
          describe: '浪漫大连首站，浪漫的海洋主题乐园',
          price: '99',
        },
        {
          imgUrl: 'https://imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg',
          name: '大连香洲旅游度假区',
          describe: '将壮观诠释到完美，将梦想展示给世界',
          price: '57',
        },
        {
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/201304/08/251d90bd6c77efdac8d65eac.jpg_256x160_575a817a.jpg',
          name: '大连圣亚海洋世界',
          describe: '浪漫大连首站，浪漫的海洋主题乐园',
          price: '99',
        },
        {
          imgUrl: 'https://imgs.qunarzz.com/p/p7/201302/28/2183ce241fb73ef293835fbb.jpg_256x160_d3c609c0.jpg',
          name: '大连圣亚海洋世界',
          describe: '浪漫大连首站，浪漫的海洋主题乐园',
          price: '99',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.recommend {
  margin-top: .4rem;

  .recommend-title {
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
  }

  .div-sty {
    display: flex;
    padding: .2rem .3rem;
    border-bottom: solid .01rem rgb(181, 179, 179);

    .img-sty {
      width: 2rem;
      height: 1.5rem;
    }

    .right-sty {
      display: flex;
      flex-direction: column;
      margin-left: .2rem;
    }

    .name-sty {
      font-size: .3rem;
      color: black;
      margin-top: 7px;
    }

    .describe-sty {
      margin-top: 8px;
      font-size: 13px;
      color: rgb(115, 115, 115);
      width: 4rem;
      @include ellipsis()
    }

    .price-sty {
      font-size: 18px;
      color: rgb(255, 204, 0);
    }
  }

  .div-sty:last-child {
    border: none;
  }
}</style>
