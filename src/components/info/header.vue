<template>
  <div class="header-info">
    <router-link v-show="absShow" class="header-absolute" tag="div" to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!absShow" :style="opacityStyle">
      <router-link tag="div" to="/">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
      景点详情
      <div></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'header-info',
  data() {
    return {
      absShow: true,
      opacityStyle: {
        opacity: 0,
      },
    };
  },
  activated() {
    window.addEventListener('scroll', this.changeScroll);
  },
  deactivated() {
    window.removeEventListener('scroll', this.changeScroll);
  },
  methods: {
    changeScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 52) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.absShow = false;
      } else {
        this.absShow = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header-info {
  .header-absolute {
    position: absolute;
    left: .2rem;
    top: .2rem;
    width: .8rem;
    height: .8rem;
    border-radius: .4rem;
    text-align: center;
    line-height: .8rem;
    background: rgba(0, 0, 0, .8);

    .header-back {
      color: white;
      font-size: .3rem;
    }
  }

  .header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    background: $bg-color;
    color: #fff;
    line-height: .86rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    // text-align: center;
    z-index: 2;
  }
}
</style>
