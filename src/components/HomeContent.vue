<template>
  <div id="all">
    <div v-for="(item,index) in items" :key="index" style="z-index: 999 !important;">
      <div class="text item" v-if="index===0" id="firstArticle" style="position:relative">
        <div id="rightContent">
          <h2><a href="javascript:" @click="showArticle(item.id,item.path)">{{item.title}}</a></h2>
          <p>{{item.content}}</p>
        </div>
        <div id="rightImg">
          <img :src="item.src" id="img">
        </div>
        <span style="position: absolute;bottom: 0;left:30%">{{item.date}}</span>
        <i class="iconfont icon-dianzan" style="cursor:pointer;font-size: 1.8rem;position: absolute;bottom: 0;left: 10%;" :style="item.thumbsUpStatus?'color: lightseagreen':'color: red'" disabled="true" @click="item.thumbsUpStatus&&thumbsUp(item,$event)"></i>
        <span style="position: absolute;bottom: 0;left: 12.5%">{{item.thumbsUp}}</span>
        <i class="iconfont icon-pinglun" style="font-size: 1.8rem;position: absolute;bottom: 0;left: 15%;"></i>
        <span style="position: absolute;bottom: 0;left: 17.5%">{{item.commentCount}}</span>
        <i class="el-icon-view" style="font-size: 1.8rem;position: absolute;bottom: 0;left: 20%;"></i>
        <span style="position: absolute;bottom: 0;left: 22.5%">{{item.readCount}}</span>
        <i v-if="item.isShare" style="cursor:pointer;font-size: 1.8rem;position: absolute;bottom: 0;left: 26%;" class="el-icon-share" @click="shareArticle(item.id)"></i>
      </div>
      <div class="text item" v-else :class="index%2==0?'right':'left'" style="position:relative">
          <h2><a href="javascript:" @click="showArticle(item.id,item.path)">{{item.title}}</a></h2>
          <p>{{item.content}}</p>
        <span style="position: absolute;bottom: 0;left:70%">{{item.date}}</span>
        <i class="iconfont icon-dianzan" style="cursor:pointer;font-size: 1.8rem;position: absolute;bottom: 0;left: 0;" :style="item.thumbsUpStatus?'color: lightseagreen':'color: red'" disabled="true" @click="item.thumbsUpStatus&&thumbsUp(item,$event)"></i>
        <span style="position: absolute;bottom: 0;left: 6%">{{item.thumbsUp}}</span>
        <i class="iconfont icon-pinglun" style="font-size: 1.8rem;position: absolute;bottom: 0;left: 12%;"></i>
        <span style="position: absolute;bottom: 0;left: 18%">{{item.commentCount}}</span>
        <i class="el-icon-view" style="font-size: 1.8rem;position: absolute;bottom: 0;left: 24%;"></i>
        <span style="position: absolute;bottom: 0;left: 30%">{{item.readCount}}</span>
        <i v-if="item.isShare" style="cursor:pointer;font-size: 1.8rem;position: absolute;bottom: 0;left: 40%;" class="el-icon-share" @click="shareArticle(item.id)"></i>
      </div>
    </div>
    <a class="iconfont icon-iconfontbacktop" id="backTop" v-show="showBackTop" href="javascript:" @click.stop="backTop"></a>
    <div class="rightDiv" v-show="drawer" @mouseleave="closeRightDiv">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item name="1">
          <template slot="title"  style="margin-left: 2rem">
            <span class="title">热门文章</span><i class="iconfont icon-fire" style="color: red"></i>
          </template>
         <ul>
           <div  v-for="(article, index) in hotArticles" :key="index">
             <li>{{article}}</li>
           </div>
         </ul>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <span class="title">热门评论</span><i class="iconfont icon-fire" style="color: red"></i>
          </template>
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <span class="title">热门分类</span><i class="iconfont icon-fire" style="color: red"></i>
          </template>
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            <span class="title">热门标签</span><i class="iconfont icon-fire" style="color: red"></i>
          </template>
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
    </div>

    <a href="javascript:" class="iconfont icon-jiantou ctrlShowBtn" @mouseenter="showRightDiv" v-show="ctrlShow"></a>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      items: [
        {id: 1,
          title: 'article1',
          content: 'The object-fit CSS property sets how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.\n' +
            '\n' +
            'You can alter the alignment of the replaced element\'s content object within the element\'s box using the object-position property.',
          date: '2020-01-04',
          thumbsUpStatus: true,
          commentCount: 10,
          readCount: 100,
          thumbsUp: 3,
          isShare: true,
          path: '/article/all',
          src: 'http://t9.baidu.com/it/u=2268908537,2815455140&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1578981916&t=5157a7541a00f3a1628ccf3e04336750'},
        {id: 2,
          title: 'article2',
          content: 'The object-fit CSS property sets how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.\n' +
            '\n' +
            'You can alter the alignment of the replaced element\'s content object within the element\'s box using the object-position property.',
          date: '2020-01-04',
          thumbsUp: 3,
          readCount: 100,
          commentCount: 10,
          thumbsUpStatus: true,
          isShare: true,
          src: 'http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1578633138&t=9c7f30fd1589b203f83c8343a912f61a'},
        {id: 1,
          title: 'article1',
          content: 'The object-fit CSS property sets how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.\n' +
            '\n' +
            'You can alter the alignment of the replaced element\'s content object within the element\'s box using the object-position property.',
          date: '2020-01-04',
          thumbsUp: 3,
          src: 'http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1578633138&t=9c7f30fd1589b203f83c8343a912f61a'},
        {id: 2,
          title: 'article2',
          content: 'The object-fit CSS property sets how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.\n' +
            '\n' +
            'You can alter the alignment of the replaced element\'s content object within the element\'s box using the object-position property.',
          date: '2020-01-04',
          thumbsUp: 3,
          src: 'http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1578633138&t=9c7f30fd1589b203f83c8343a912f61a'}
      ],
      showBackTop: 0,
      drawer: 0,
      activeName: '1',
      ctrlShow: 1,
      hotArticles: [
        '214', '213124'
      ]
    }
  },
  methods: {
    // 获取滚动条当前的位置
    getScrollTop () {
      let scrollTop = 0
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop
      } else if (document.getElementById('all')) {
        scrollTop = document.body.scrollTop
      }
      return scrollTop
    },
    // 获取当前可视范围的高度
    getClientHeight () {
      let clientHeight = 0
      if (document.getElementById('all').clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(document.getElementById('all').clientHeight, document.documentElement.clientHeight)
      } else {
        clientHeight = Math.max(document.getElementById('all').clientHeight, document.documentElement.clientHeight)
      }
      return clientHeight
    },

    // 获取文档完整的高度
    getScrollHeight () {
      return Math.max(document.getElementById('all').scrollHeight, document.documentElement.scrollHeight)
    },
    // 滚动事件触发下拉加载
    onScroll () {
      if (parseInt(this.getClientHeight() / this.getScrollTop()) === 2) {
        this.showBackTop = 1
      }
      if (this.getScrollTop() === 0) {
        this.showBackTop = 0
      }
      if (this.getScrollHeight() - this.getClientHeight() - this.getScrollTop() <= 0) {
        this.showBackTop = 1
        if (this.$store.state.homeMenu === '0') {
          for (let i = 4; i < 8; i++) {
            this.items.push({
              id: i,
              title: 'article1' + i,
              content: 'The object-fit CSS property sets how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.\n' +
                '\n' +
                'You can alter the alignment of the replaced element\'s content object within the element\'s box using the object-position property.',
              date: '2020-01-04',
              src: 'http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1578633138&t=9c7f30fd1589b203f83c8343a912f61a'
            })
          }
        } else if (this.$store.state.homeMenu === '1') {
          for (let i = 6; i < 10; i++) {
            this.items.push({
              id: i,
              title: 'article' + i,
              content: 'The object-fit CSS property sets how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.\n' +
                '\n' +
                'You can alter the alignment of the replaced element\'s content object within the element\'s box using the object-position property.',
              date: '2020-01-04',
              src: 'http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1578633138&t=9c7f30fd1589b203f83c8343a912f61a'
            })
          }
        }
      }
    },
    backTop: function () {
      document.querySelector('#app').scrollIntoView(true)
      this.showBackTop = 0
    },
    showRightDiv: function () {
      this.drawer = 1
      this.ctrlShow = 0
    },
    closeRightDiv: function () {
      this.drawer = 0
      this.ctrlShow = 1
    },
    thumbsUp: function (item, event) {
      item.thumbsUp++
      item.thumbsUpStatus = false
    },
    showArticle: function (id, path) {
      this.$router.push(path)
    },
    shareArticle: function (id) {

    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })
  },
  watch: {
    drawer (value) {
      if (value === false) {
        this.ctrlShow = 1
      }
    }
  }

}
</script>

<style scoped>
  #rightImg{
    width: 50%;
    float: right;
    margin-right: 10%;
  }
  #img{
    position: relative;
    width: 100%;
    height: auto;
  }
  #rightContent{
    width: 30%;
    float: left;
    margin-left: 10%;
  }
  #firstArticle{
    height: 20em;
    margin-top: 2em;
  }
  .left{
    width: 39.5%;
    float: left;
    margin-left: 10%;
    margin-right: 0.5%;
    height: 15em;
  }
  .right{
    width: 39.5%;
    float: right;
    margin-right: 10%;
    margin-left: 0.5%;
    height: 15em;
  }
  .el-image{
    width: 50% !important;
  }
  p{
    text-align: left;
  }
  span{
    float: right;
    margin-top: 0.8em;
    margin-bottom: 0;
  }
  #all{
    overflow: auto;
  }
  #backTop{
    font-size: 60px;
    position: fixed;
    bottom: 5rem;
    right: 2rem;
  }
  .rightDiv{
    width: 9rem;
    height: 26rem;
    position: fixed;
    right: 0;
    top: 5rem;
    border: 1px solid aqua;
  }

  .ctrlShowBtn{
    display: inline-block;
    position: fixed;
    right: 0;
    top: 20rem;
    font-size: 1.5rem;
  }
  .title{
    margin-left: 2rem;
  }
</style>
