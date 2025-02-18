<script lang="ts" setup>
console.log('styles', Object.values({ a: 1 }));
</script>

<template>
  <div class="logo">
    <h1 class="test">Hello world!</h1>
    <a-button type="primary">Primary</a-button>
  </div>
</template>

<style lang="less" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;

  .test {
    color: red;
  }

  &:hover {
    filter: drop-shadow(0 0 2em #eeea8caa);
  }

  &.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
}
</style>
