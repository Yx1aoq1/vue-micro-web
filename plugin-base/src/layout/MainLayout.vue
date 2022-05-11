<template>
  <a-layout class="main">
    <a-layout-header>Header</a-layout-header>
    <a-layout>
      <a-layout-sider>Sider</a-layout-sider>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default {

}
</script>

<style>
.main {
  width: 100%;
  height: 100%;
}
</style>