<template>
  <div>
    <el-row>
      <el-col :span="16">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router>
          <el-menu-item index="/home">Home</el-menu-item>
          <el-menu-item index="/article">Article</el-menu-item>
          <el-menu-item index="/person">Person</el-menu-item>
          <el-menu-item index="/setting">Setting</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="8">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="none">
          <el-menu-item index="1"><i class="el-icon-s-custom"></i></el-menu-item>
          <el-menu-item index="2"><a href="#">{{nickname}}</a></el-menu-item>
          <el-menu-item index="3"><el-input  prefix-icon="el-icon-search" v-model="condition" placeholder="请输入内容" @keydown.enter.native="search"></el-input></el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nickname: 'ferby',
      condition: ''
    }
  },
  created () {
    // this.axios.get().then(function (res) {
    //
    // })
  },
  methods: {
    search: function () {
      // to do
    }
  }
}
</script>

<style>
  a{
    text-decoration: none;
  }
</style>
