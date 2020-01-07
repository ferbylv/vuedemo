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
  <div>
    <el-table
      :data="tableData"
      style="width: 100%;margin-top: 2rem;margin-left: 2rem">
      <el-table-column
        prop="title"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="100">
      </el-table-column>
      <el-table-column
        prop="category"
        label="分类"
        width="100">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="100">
      </el-table-column>
      <el-table-column
        prop="comment"
        label="评论"
        width="100">
      </el-table-column>
      <el-table-column
        prop="view"
        label="访问"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="发布时间"
        width="280">
      </el-table-column>
      <el-table-column
        label="操作"
        width="180">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="40"
      style="float: right;margin-top: 1rem">
    </el-pagination>
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
      currentPage: 1,
      status: [],
      keyWord: '',
      categoryOptions: [{
        value: 'java',
        label: 'java'
      }],
      categorys: [],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
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
