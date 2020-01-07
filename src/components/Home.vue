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
        this.$router.push('/home')
      } else if (tab.index === '1') {
        this.$router.push(('/home/follow'))
      }
    }
  }
}
</script>

<style scoped>

</style>
