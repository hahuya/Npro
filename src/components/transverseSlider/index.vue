<template>
  <div class="sliderBigContent">
    <div class="sliderContent cf" ref="sliderContent">
      <slot :data='dataList'></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dataList: {
      type: Array,
      default: []
    },
    width: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      contentWidth: '',
      startX: '',
      startY: '',
      transform: 0
    }
  },
  mounted() {
    this.contentWidth = this.$refs.sliderContent.offsetWidth - this.$refs.sliderContent.parentNode.offsetWidth;
    let childrenCSS = window.getComputedStyle(this.$refs.sliderContent.childNodes[1]);
    this.$refs.sliderContent.style.width = `${(parseFloat(childrenCSS['margin-left']) + parseFloat(childrenCSS['width'])) * this.dataList.length}px`;
  },
  watch: {
    dataList: {
      handler: function(newVal, oldVal) {
        this.contentWidth = this.$refs.sliderContent.offsetWidth - this.$refs.sliderContent.parentNode.offsetWidth;
      },
      deep: true
    }
  },
  methods: {
    start(el) {
      if (this.contentWidth > 0) {
        let parameter = el.changedTouches[0];
        this.startX = parameter.pageX;
        this.startY = parameter.pageY;
      }

    },
    move(el) {
      // if (this.contentWidth > 0) {
      //   let parameter = el.changedTouches[0];
      //   this.computedValue(parameter.pageX, parameter.pageY)
      // }
    },
    end(el) {
      // if (this.contentWidth > 0) {
      //   let parameter = el.changedTouches[0];
      //   this.computedValue(parameter.pageX, parameter.pageY)
      // }
    },
    computedValue(x, y) {
      let disX = x - this.startX;
      this.startX = x;
      this.startY = y;
      if (Math.abs(disX) > Math.abs(y - this.startY)) {
        if (disX > 0) {
          // 从左向右滑
          if (this.transform + disX > 0) {
            this.transform = 0;
          } else {
            this.transform = this.transform + disX;
          }
        } else {
          // 从右向左滑
          if (this.transform + disX < Number(`-${this.contentWidth}`)) {
            this.transform = Number(`-${this.contentWidth}`);
          } else {
            this.transform = this.transform + disX;
          }
        }
        this.$refs.sliderContent.style.transform = `matrix(1, 0, 0, 1, ${this.transform}, 0)`
      }
    },
    autoPlay(){
      setTimeout(() => {
        
      }, 1000);
    }
  }
}
</script>
<style lang="scss" scoped>
.sliderBigContent{
    overflow-x: scroll;
}
.sliderContent{
    height: 100%;
    transition: all 0.3s ease 0s;
    transform: translate3d(0px, 0px, 0px);
    >*{
      float: left;
    }
}
.sliderContent::after{
    clear: both;
    content: ".";
    height: 0;
    visibility: hidden;
    font-size: 0;
    display: block;
}
</style>
