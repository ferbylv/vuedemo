<template>
  <div>
    <el-row class="tac">
      <el-col :span="3">
        <el-menu
          default-active="/article"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
          id="menu">
          <el-menu-item index="/article">
            <i class="el-icon-menu"></i>
            <span slot="title">撰写文章</span>
          </el-menu-item>
          <el-menu-item index="/article/all">
            <i class="el-icon-menu"></i>
            <span slot="title">所有文章</span>
          </el-menu-item>
          <el-menu-item index="/article/comment">
            <i class="el-icon-menu"></i>
            <span slot="title">相关评论</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span slot="title">分类管理</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-menu"></i>
            <span slot="title">标签管理</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-menu"></i>
            <span slot="title">专栏管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <router-view/>
      </el-col>
    </el-row>

  </div>

</template>

<script>
export default {
  name: 'Article',
  data: function () {
    return {
      items: [1, 2, 3]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.tac{
  margin-top: 1rem;
}
  #menu{
    margin-top: 2rem;
  }
</style>
