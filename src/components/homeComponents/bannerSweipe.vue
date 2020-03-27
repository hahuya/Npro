<template>
    <div class="rotationChart">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in wheelList" :key="index">
            <div class="rotationChartitem">
                <img :src="item" alt @click=""/>
            </div>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
import {getBannerSwiperList} from '@/service/home.js'
export default {
    data(){
        return{
            wheelList:[
                // 'http://oss.can-hang.com/admin/other/1579257207412.jpg?1583589066906'
            ],
        }
    },
    mounted(){
        getBannerSwiperList().then((res)=>{
            this.wheelList = res.data.aa;
        })
    }
}
</script>
<style lang="scss" scoped>
.rotationChart {
    // padding: 0px 20px;
    padding-bottom: 30px;
    height: 700px;
    .rotationChartitem {
        height: 700px;
        // width: 100%;
        position: relative;
        img {
            display: block;
            height: 700px;
            width: 100%;
        }
    }
}
</style>