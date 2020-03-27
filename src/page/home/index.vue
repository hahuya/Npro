<template>
    <div class="home">
        <!-- 轮播图 -->
        <bannerSweipe/>
        <!-- 图标列表 -->
        <iconList/>
        <!-- 广告 -->
        <advertisementSweipe/>
        <!-- 热销 -->
        <wellsell/>
        <!-- 商品列表 -->
        <div class="commodityContainer">
            <!-- <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit"> -->
                <div class="commodityBox">
			      <div class="commodityList" v-for="(item,index) in dataList" :key="index">
                      <div class="commdityDetaile" @click="goGoodsDetail(item.id)">
                          <img :src="item.url" alt="">
                          <p>{{item.goodsName}}</p>
                          <p>{{item.shopName}}</p>
                          <div class="combottom">
                              <p class="yuan">{{`￥${item.price}`}}</p>
                              <p class="dan">{{`已抢${item.number}单`}}</p>
                          </div>
                          <div class="combottom combutton">
                              <p>{{item.platform}}</p>
                              <p @click="goGoodsDetail(item.id)">抢单</p>
                          </div>
                      </div>
                  </div>
                </div>
			<zj-load-more @loadMore="loadMoreDesignerList"/>
        </div>
        <!-- 底部 -->
        <bottom-menu/>
    </div>
</template>
<script>
import Swiper from 'swiper';
import MescrollVue from 'mescroll.js/mescroll.vue'
import iconList from '@/components/homeComponents/iconList'
import bannerSweipe from '@/components/homeComponents/bannerSweipe'
import advertisementSweipe from '@/components/homeComponents/advertisementSweipe'
import wellsell from '@/components/homeComponents/wellsell';
import Http from '@/plugins/axios.js'
export default {
    components:{
        iconList,
        bannerSweipe,
        advertisementSweipe,
        wellsell,
        MescrollVue
    },
    data(){
        return{
            mescroll:null,
            mescrollUp:{
                callback: this.upCallback,
                // page: {
				// 	num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
				// 	size: 10 //每页数据条数,默认10
				// },
            },
            dataLists:[],
            dataList:[
                    {
                        url:"https://img12.360buyimg.com/n1/s450x450_jfs/t1/106119/25/13739/168435/5e6372a4Eae122f80/e2d8c31c9b5a6e8a.jpg",
                        price:25,
                        number:124,
                        goodsName:"ipad4",
                        shopName:"苹果旗舰店",
                        platform:"京1东",
                        id:1
                    },{
                        url:"https://img12.360buyimg.com/n1/s450x450_jfs/t1/106119/25/13739/168435/5e6372a4Eae122f80/e2d8c31c9b5a6e8a.jpg",
                        price:25,
                        number:124,
                        goodsName:"ipad4",
                        shopName:"苹果旗舰店",
                        platform:"京33东",
                        id:1
                    },{
                        url:"https://img12.360buyimg.com/n1/s450x450_jfs/t1/106119/25/13739/168435/5e6372a4Eae122f80/e2d8c31c9b5a6e8a.jpg",
                        price:25,
                        number:124,
                        goodsName:"ipad4",
                        shopName:"苹果旗舰店",
                        platform:"京trr东",
                        id:1
                    },{
                        url:"https://img12.360buyimg.com/n1/s450x450_jfs/t1/106119/25/13739/168435/5e6372a4Eae122f80/e2d8c31c9b5a6e8a.jpg",
                        price:25,
                        number:124,
                        goodsName:"ipad4",
                        shopName:"苹果旗舰店",
                        platform:"京ddd东",
                        id:1
                    },{
                        url:"https://img12.360buyimg.com/n1/s450x450_jfs/t1/106119/25/13739/168435/5e6372a4Eae122f80/e2d8c31c9b5a6e8a.jpg",
                        price:25,
                        number:124,
                        goodsName:"ipad4",
                        shopName:"苹果旗舰店",
                        platform:"东",
                        id:1
                    },{
                        url:"https://img12.360buyimg.com/n1/s450x450_jfs/t1/106119/25/13739/168435/5e6372a4Eae122f80/e2d8c31c9b5a6e8a.jpg",
                        price:25,
                        number:124,
                        goodsName:"ipad4",
                        shopName:"苹果旗舰店",
                        platform:"京东",
                        id:1
                    },
                ]

        }
    },
    mounted(){
        console.log('执行了')
        // Http.axios('get', '/api/useinformation').then((result)=>{
        //     console.log(result)
        // })
    },
     beforeRouteEnter (to, from, next) { // 如果没有配置顶部按钮或isBounce,则beforeRouteEnter不用写
        next(vm => {
            // 滚动到原来的列表位置,恢复顶部按钮和isBounce的配置
            vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter()
        })
    },
    beforeRouteLeave (to, from, next) { // 如果没有配置顶部按钮或isBounce,则beforeRouteLeave不用写
        // 记录列表滚动的位置,隐藏顶部按钮和isBounce的配置
        this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave()
        next()
    },
    methods:{
        goGoodsDetail(id){
            console.log('=============')
            this.$router.push({path:`/goodsDetail/${id}`});
        },
        mescrollInit(mescroll){
            this.mescroll = mescroll;
        },
        upCallback(){
            console.log("初始化成功========")
            this.getListDataFromNet()
        },
        
        getListDataFromNet(){
            this.dataList = this.dataList.concat(this.dataLists)
        },
        loadMoreDesignerList(){
            console.log('1231314')
            this.getListDataFromNet()
        }
    }
}
</script>
<style lang="scss" scoped>
.home{
    padding: 0 20px;
    height: 1000px;
}
    
  .commodityContainer{
      position: relative;
      .commodityBox{
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .commodityList{
            border: 1px solid #E6E6E6;
            width: 46%;
            padding: 20px;
            border-radius: 20px;
            margin-bottom: 30px;
            .commdityDetaile{
                p{
                    text-align: left;
                    font-size: 45px;
                    margin-bottom: 8px;
                }
                .combottom{
                    display: flex;
                    justify-content: space-between;
                    text-align: center;
                    .yuan{
                        color: red;
                        font-size: 60px;
                    }
                    .dan{
                        font-size: 40px;
                        height: 80px;
                        line-height: 100px;
                    }
                }
                .combutton{
                    p{
                        padding: 7px 30px;
                        border-radius: 10px;
                        background: red;
                        color: #fff;
                    }
                   
                }
            }
            img{
                width: 100%;
            }
        }
      }
      
  }
  .mescroll {
    // position: fixed;
    padding-bottom: 1rem;
    top: 0px;
    bottom: 140px;
    height: auto;
  }
  
</style>