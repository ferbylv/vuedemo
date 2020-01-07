<template>
  <div>
    <el-input placeholder="请输入标题" v-model="title"></el-input>
    <mavon-editor id="editor" @imgAdd="$imgAdd" @imgDel="$imgDel"></mavon-editor>
    <el-button type="primary" icon="iconfont icon-fabu" id="release" title="发布" @click="showSetting">发布</el-button>
    <div class="articleSetting"  v-show="isShow">
        <div class="head">
          <el-row>
            <el-col :span="6">
              <h2>文章设置</h2>
            </el-col>
            <el-col :span="4" :offset="14">
              <el-button type="danger" icon="el-icon-close" circle @click="close"></el-button>
            </el-col>
          </el-row>
        </div>
        <div class="basicSetting">
          <h2>基本设置</h2>
          <p>访问密码:</p>
          <el-input show-password aria-placeholder="请输入密码" v-model="password"></el-input>
          <p>发表时间:</p>
          <el-date-picker
          v-model="datetime"
          type="datetime"
          placeholder="选择日期时间"
          editable
          size="large"
          class="datetime">
        </el-date-picker>
          <p>开启评论:</p>
          <el-radio v-model="comment" label="1" >开启</el-radio>
          <el-radio v-model="comment" label="0">关闭</el-radio>
          <p>是否置顶:</p>
          <el-radio v-model="isTop" label="1">是</el-radio>
          <el-radio v-model="isTop" label="0">否</el-radio>
          <p>开启分享：</p>
          <el-switch
            v-model="isShare"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :disabled="shareDisabled">
          </el-switch>
        </div>
      <div class="category">
          <h2>分类目录</h2>
          <el-tree
            :data="category"
            show-checkbox
            :props="defaultProps"
            id="">
          </el-tree>
          <el-button icon="el-icon-plus" id="plusBtn" @click="showCategory"></el-button>
          <div v-show="addShow" class="categoryAddDiv">
            <el-cascader
              v-model="value"
              :options="category"
              :props="{ expandTrigger: 'hover' }"
              @change="handleChange"
              id="categorySelecter"></el-cascader>
            <el-input  v-model="categoryName" placeholder="分类名称"></el-input>
            <el-button type="success">确定</el-button>
            <el-button type="danger" @click="cancleShowCategory">取消</el-button>
          </div>
      </div>
      <div class="tag">
        <h2>标签</h2>
        <el-select
          v-model="tags"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择文章标签"
          style="width: 100%">
          <el-option
            v-for="item in tagOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'WriteArticle',
  data: function () {
    return {
      title: '',
      password: '',
      datetime: new Date(),
      comment: '1',
      isTop: '0',
      isShow: 0,
      addShow: 0,
      isShare: 0,
      shareDisabled: false,
      categoryName: '',
      category: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '2',
        children: [
          {
            id: 3,
            label: 3
          }
        ]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      addCategoryValue: '',
      tagOptions: [{
        value: 'HTML',
        label: 'HTML'
      }, {
        value: 'CSS',
        label: 'CSS'
      }, {
        value: 'JavaScript',
        label: 'JavaScript'
      }],
      tags: []
    }
  },
  methods: {
    // 绑定@imgAdd event
    // $imgAdd (pos, $file) {
    //   // 第一步.将图片上传到服务器.
    //   var formdata = new FormData()
    //   formdata.append('image', $file)
    //   this.axios({
    //     url: 'server url',
    //     method: 'post',
    //     data: formdata,
    //     headers: { 'Content-Type': 'multipart/form-data' }
    //   }).then((url) => {
    //     // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
    //     /**
    //      * $vm 指为mavonEditor实例，可以通过如下两种方式获取
    //      * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
    //      * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
    //      */
    //     // $vm.$img2Url(pos, url)
    //   })
    // },
    close: function () {
      this.isShow = 0
    },
    showSetting: function () {
      this.isShow = 1
    },
    showCategory: function () {
      this.addShow = 1
    },
    cancleShowCategory: function () {
      this.addShow = 0
    }
  },
  watch: {
    password: function (value) {
      if (value !== '' || value.length > 0) {
        this.isShare = 0
        this.shareDisabled = true
        this.comment = '0'
      } else {
        this.shareDisabled = false
        this.comment = '1'
      }
    }
  }

}
</script>

<style scoped>
#release{
  float: right;
}
  #editor{
    height: 40rem !important;
  }
  .articleSetting{
    position: absolute;
    top: 0;
    right: 0;
    width: 30%;
    z-index: 1500;
    background-color: white;
    height: 42.5rem;
    /*border: 0.1rem solid lightslategray;*/
    overflow: auto;
  }

  .basicSetting{
    border-top: 0.05rem solid darkgray;
    border-bottom: 0.05rem solid darkgray;
    margin-top: 0.5rem;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    text-align: left;
    padding-bottom: 1rem;
  }
  .basicSetting *{
    margin-top: 1rem;
  }
  .head{
    padding-top:1rem;
  }
  .head h2{
    line-height: 3rem;
  }
  .datetime{
    width: 100%;
  }
  #plusBtn{
    width: 15% !important;
    border: 0.1rem dashed darkgray;
  }
  .category{
    margin-top: 1rem;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    text-align: left;
    border-bottom: 0.05rem solid darkgray;
    padding-bottom: 1rem;
  }
  .category *{
    margin-top:1rem;
  }
  #categorySelecter{
    width: 100%;
  }
  .tag{
    text-align: left;
    max-width: 100% !important;
    margin: 1rem 0.3rem 2rem;
  }
  .tag *{
    margin-top: 1rem;
  }
</style>
