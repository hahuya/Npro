<template>
  <div>
    <div class="JZLoadMoreContainer center_center" v-show="loadMore&&!noMoreData">
      加载中...
      <i class="iconfont iconjiazai21 loading"></i>
    </div>
    <div class="JZLoadMoreContainer center_center" v-show="noMoreData&&noData">
      喂！到底了
      <i class="iconfont iconwushuju1"></i>
    </div>
    <div class="JZLoadMoreContainer center_center noDataStyles" v-show="!noData">
      <img :src="`https://canhang-oss.oss-cn-shenzhen.aliyuncs.com/frontend/jinzhun_web/${noDataIcon?noDataIcon:noDataImage[$route.path]}.png`" alt="">
    </div>
  </div>
</template>
<script>
import { pageScroll } from '@/mixins/pageScroll';

export default {
  mixins: [pageScroll],
  data() {
    return {
      loadMore: false,
      noMoreData: false,
      noData: true,
      initLoading: true,
      noDataImage: {
        '/demandManage': 'demand_noData',
        '/originalCase': 'noCaseWasFound',
        '/designer': 'designer_noData',
        '/designerZone': 'gallery_noData'
      },
      noDataIcon: ''
    };
  },
  created() {

  },
  mounted() {
    window.loadMoreResetState = () => {
      this.loadMore = false;
      this.noMoreData = false;
    };
    window.loadMoreSetState = (data = {}) => {
      let { loadMore = false, noMoreData = false, noData = true, noDataIcon = '' } = data
      this.loadMore = loadMore;
      this.noMoreData = noMoreData;
      this.initLoading = false
      this.noData = noData
      if (noDataIcon) {
        this.noDataIcon = noDataIcon
      }
    };
  },
  methods: {
    // 到达底部
    reachTheBottom() {
      if (this.loadMore || this.noMoreData || !this.noData) {
        return;
      }

      this.loadMore = true;
      this.$emit('loadMore', {
        cb: data => {
          this.loadMore = false;
          this.noMoreData = data.isMoreData;
        }
      });
    }
  },
  beforeDestroy() {
    delete window.loadMoreResetState;
  }
};
</script>

<style lang="scss" scoped>
.JZLoadMoreContainer {
  height: 60px;
  text-align: center;
  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  .loading {
    font-size: 40px;
    display: inline-block;
    -webkit-animation: rotate 1s linear infinite;
    animation: rotate 1s linear infinite;
  }
  .iconwushuju1 {
    //   color:#dedede;
    font-size: 50px;
  }
  &.loadingStyles,&.noDataStyles{
    height:400px;
    width: 100%;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    img{
      height:100%;
    }
  }
}
</style>

