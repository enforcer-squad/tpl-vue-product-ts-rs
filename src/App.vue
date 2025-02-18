<script lang="ts" setup>
console.log('styles', Object.values({ a: 1 }));
</script>

<template>
  <div class="container">
    <router-view />
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
