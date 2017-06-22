<template>
  <mu-appbar class="header-appbar">
    <mu-flat-button label="首页" slot="left" to="/" activeClass="active"  />
    <mu-flat-button href="333" label="甜品SHOW" to="/sweet" slot="left" activeClass="active" />
    <div class="header-paper">
      <img :src="require('../assets/images/sm_logo.png')" />
    </div>
    <mu-flat-button label="甜品驿站" slot="right" to="/shop"  activeClass="active"  />
    <mu-flat-button href="333" label="关于我们" slot="right" to="/about" activeClass="active"/>
  </mu-appbar>
</template>
<script>

</script>
<style>
.header-paper {
  height: 64px;
  line-height: 64px;
}

.header-paper img {
  width: inherit;
  height: 50px;
  margin-top: 7px;
}

.mu-appbar.header-appbar {
  justify-content: center;
  background-color: transparent;
  color:#7e57c2;
  height: 48px;
  line-height: 48px;
  position: absolute;
  top:20px;
}

.header-appbar .mu-appbar-title {
  flex: 0 1 200px;
  display: flex;
  justify-content: center;
}

.header-appbar  .mu-flat-button {
  margin: 0 12px;
}

.header-appbar  .mu-flat-button:hover {
  background-color: #f3e5f5;
}

.header-appbar  .mu-flat-button.active {
  background-color: #7e57c2;
  color: #fff;
}
</style>

