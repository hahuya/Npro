import { mapGetters, mapActions } from 'vuex';

export const pageScroll = {
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      var scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
      // 时时回调位置
      this.currentLocation && this.currentLocation(scrollTop)
      // 变量windowHeight是可视区的高度
      var windowHeight = document.body.clientHeight || document.documentElement.clientHeight;
      // 变量scrollHeight是滚动条的总高度
      var scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
      // 滚动条到底部的条件

      if (scrollTop + windowHeight + 10 > scrollHeight && scrollTop > 0) {
        // 到达底部回调
        this.reachTheBottom && this.reachTheBottom()
      }
    }

  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  beforeRouteLeave(to, form, next) {
    window.removeEventListener('scroll', this.handleScroll);
    next()
  }
};
