<template>
  <div>
    <el-tabs type="border-card" v-model="activeName" @tab-click="changeRouter">
      <el-tab-pane label="推荐" name="0"><router-view></router-view></el-tab-pane>
      <el-tab-pane label="关注" name="1"><router-view></router-view></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      activeName: '0'
    }
  },
  methods: {
    changeRouter: function (tab, event) {
      if (tab.index === '0') {
        this.$store.state.homeMenu = '0'
      } else if (tab.index === '1') {
        this.$store.state.homeMenu = '1'
      }
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>

</style>
