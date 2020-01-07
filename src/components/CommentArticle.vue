<template>
<div>
  <span>关键词：</span><el-input v-model="keyWord" placeholder="请输入关键词" style="width: 15% !important;"></el-input>
  <span>评论状态:</span>
  <el-select v-model="status" clearable placeholder="请选择" style="width: 15% !important;">
    <el-option
      v-for="item in statusOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-button type="primary">确定</el-button>
  <el-button>重置</el-button>
</div>
</template>

<script>
export default {
  name: 'CommentArticle',
  data: function () {
    return {
      statusOptions: [{
        value: '以发布',
        label: '以发布'
      }],
      status: []
    }
  }
}
</script>

<style scoped>

</style>
