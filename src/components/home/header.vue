<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
    <span class="iconfont arrow-icon">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerCom',
};

</script>

<style lang="scss" scoped>
.header {
  height: 0.86rem;
  display: flex;
  background: $bg-color;
  color: #fff;
  line-height: .86rem;
  .header-left {
    width: 0.64rem;
    float: left;
    .back-icon{
      text-align: center;
      font-size: .4rem;
    }
  }

  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
    padding-left: .2rem;
    .arrow-icon{
      font-size: .24rem;
      margin-left: -.04rem;
    }
  }

  .header-input {
    flex: 1;
    background: #fff;
    border-radius: .1rem;
    margin-top: .12rem;
    height: .64rem;
    line-height: .64rem;
    margin-left: .2rem;
    color: #ccc;
  }
}</style>
