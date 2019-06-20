<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    $route(to) {
      this.setTitle(to.meta.title);
    }
  },
  methods: {
    setTitle(title) {
      document.title = title;
    },
  }
}
</script>

<style>
</style>
