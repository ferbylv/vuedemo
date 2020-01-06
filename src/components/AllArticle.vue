<template>
<div>
  <div class="head">
    <span>关键词：</span><el-input v-model="keyWord"  placeholder="请输入关键词" style="width: 15% !important;"></el-input>
    <span>文章状态：</span>
    <el-select v-model="status" clearable placeholder="请选择" style="width: 15% !important;">
      <el-option
        v-for="item in statusOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <span>分类目录：</span>
    <el-select v-model="categorys" clearable placeholder="请选择" style="width: 15% !important;">
      <el-option
        v-for="item in categoryOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button type="primary">确定</el-button>
    <el-button>重置</el-button>
  </div>
</div>
</template>

<script>
export default {
  name: 'AllArticle',
  data: function () {
    return {
      statusOptions: [{
        value: 'html',
        label: 'html'
      }, {
        value: 'css',
        label: 'css'
      }
      ],
      status: [],
      keyWord: '',
      categoryOptions: [{
        value: 'java',
        label: 'java'
      }],
      categorys: []
    }
  }
}
</script>

<style scoped>
.head{
  margin-top: 1rem;
}
  .head *{
    margin-left: 1rem;
  }
</style>
