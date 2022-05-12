<template>
  <el-container class="main">
    <el-header>
      Header
    </el-header>
    <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'MainLayout',
  components: {
    
  },
  props: {
  },
  data () {
    return {
      
    }
  },
  created () {
    
  },
  methods: {
    
  }
}
</script>
<style>
.main {
  height: 100%;
  width: 100%;
}
</style>