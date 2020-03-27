<template>
    <div class="wellsell">
        <div class="sellHeader">
            <p class="tips">高佣金商品</p>
            <p class="date">
                <span class="numder">{{countdown[0]}}</span>:
                <span class="numder">{{countdown[1]}}</span>:
                <span class="numder">{{countdown[2]}}</span>
            </p>
        </div>
        <div class="sellBody">
            <!-- <transverseSlider :dataList='wellsellList'>
                <template slot-scope="wellsell">
                    <div class="wellsellDetaile" v-for="(item,index) in wellsell.data" :key='index'>
                        <div class="pic">
                            <img :src="item.url" alt="">
                        </div>
                        <div class="price">
                            <p>{{`￥ ${item.price}`}}</p>
                            <p>{{`${item.proportion}`}}</p>
                        </div>
                    </div>
                </template>
            </transverseSlider> -->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide wellsellDetaile"  v-for="(item,index) in wellsellList" :key='index' @click="goGoodsDetail(item.id)">
                        <div class="pic">
                            <img :src="item.url" alt="">
                        </div>
                        <div class="price between_center">
                            <p style="color:red">{{`￥ ${item.price}`}}</p>
                            <p>{{`${item.proportion}%`}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import transverseSlider from '@/components/transverseSlider';
import {getWellSellList} from '@/service/home.js'
import Swiper from 'swiper';
export default {
    data(){
        return{
            // 倒计时
            countdown:['01','12','56'],
            //热销商品
            wellsellList:[
                {
                    url:"http://oss.can-hang.com//cases/image/643756641266696192/1576468416421/d7953be705c34602bd2a08826ffa2733_264_216.jpg",
                    price:25,
                    proportion:0.5,
                    id:1
                },
            ],
        }
    },
    components:{
        transverseSlider,
    },
    created(){
        
    },
    mounted(){
        getWellSellList().then((result)=>{
            this.wellsellList = result.data;
            //nextTick,等待下一次Dom更新后执行
            this.$nextTick(()=>{
                var mySwiper = new Swiper('.swiper-container',{
                    loop: true,
                    slidesPerView: 'auto',
                    loopedSlides: 5,
                    autoplay:{delay:2000,disableOnInteraction:false},
                    speed:500
                })
            })
            
        })
        
    },
    methods:{
        goGoodsDetail(id){
            this.$router.push({
                path:`/goodsDetail/${id}`
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.sellHeader{
        display: flex;
        justify-content: space-between;
        height: auto;
        margin:20px 20px;
        p{
            font-size: 50px;
        }
        span{
            margin-right: 5px;
            background: #384A59;
            padding: 15px;
            font-size: 50px;
            line-height: 50px;
            color: #000;
        }
    }
.sellBody{
    width: 100%;
    height: 400px;
    position: relative;
    overflow: hidden;
    margin-top:16px;
    margin-bottom: 40px;
    .wellsellDetaile{
            float: left;
            width: 280px;
            // border: 1px solid #E6E6E6;
            position: relative;
            height: 340px;
            margin-left: 15px;
            &:first-child{
            margin-left: 0;
            }
            .pic{
                height: 280px;
                width: 280px;
                text-align: center;
                img{
                    width: 90%;
                    display: inline-block;
                    margin-top: 5px;
                }
            }
            .price{
                height: 30px;
                padding: 0 15px;
                line-height: 30px;
                p{
                    font-size: 44px;
                }
            }
    }
}
</style>