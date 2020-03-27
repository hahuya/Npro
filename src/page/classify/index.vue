<template>
    <div class="classifyContainer">
        <searchBox @search = 'getSearchValue'/>
        <div class="classifyBox">
            <div class="classifyLeft" ref="classifyLeft">
                <div class="classifyLeftList" v-for="(item,index) in leftData" :key="index" @click="clickLeft(index)">
                    <p :class="{'active': activeNum == index}">{{item.label}}</p>
                </div>
            </div>
            <div class="classifyRight" ref="classifyRight">
                <div class="advertisingPosition">
                    <!-- 推荐轮播图 -->
                    <div class="advertisementBox" v-show="activeNum == 0">
                        <mt-swipe :auto="4000">
                            <mt-swipe-item v-for="(item,index) in advertisementImg" :key="index">
                            <div class="advertisementitem">
                                <img :src="item"/>
                            </div>
                            </mt-swipe-item>
                        </mt-swipe>
                    </div>
                    <div class="staticDiagram" v-show="activeNum != 0">
                        <img src="http://oss.can-hang.com/admin/other/1579257207412.jpg?1583589066906" alt="">
                    </div>
                </div>
                <div class="commone">
                    <div>
                        <p class="header">常用推荐</p>
                    </div>
                    <div class="goodsBox">
                        <div class="goodsList" v-for="(item,index) in commonGoodsData" :key="index" @click="goGoodsDetail(item.id)">
                            <img :src="item.url" alt="">
                            <p>{{item.lable}}</p>
                        </div>
                    </div>
                </div>
                <div class="well">
                    <div class="headerBox">
                        <p class="header">热门销售</p>
                        <p class="ranking">热门版<i class="iconfont iconyoujiantou"></i></p>
                    </div>
                    <div class="goodsBox">
                        <div class="goodsList" v-for="(item,index) in commonGoodsData" :key="index" @click="goGoodsDetail(item.id)">
                            <img :src="item.url" alt="">
                            <p>{{item.lable}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <bottom-menu/> -->
    </div>
</template>
<script>
import searchBox from '@/components/searchBox'
export default {
    data(){
        return {
            activeNum:'0',
            leftData:[
                {
                    label:'为你推荐',
                    id: 0
                },{
                    label:'品牌墙',
                    id: 0
                },{
                    label:'美容彩妆',
                    id: 0
                },{
                    label:'奶粉纸尿裤',
                    id: 0
                },{
                    label:'母婴专区',
                    id: 0
                },{
                    label:'轻奢',
                    id: 0
                },{
                    label:'营养保健',
                    id: 0
                },{
                    label:'个人洗护',
                    id: 0
                },{
                    label:'美容彩妆',
                    id: 0
                },{
                    label:'奶粉纸尿裤',
                    id: 0
                },{
                    label:'母婴专区',
                    id: 0
                },{
                    label:'轻奢',
                    id: 0
                },{
                    label:'营养保健',
                    id: 0
                },{
                    label:'个人洗护',
                    id: 0
                },
            ],
            rightData:[],
            commonGoodsData:[
                {
                    url:"https://img12.360buyimg.com/n1/s450x450_jfs/t1/106119/25/13739/168435/5e6372a4Eae122f80/e2d8c31c9b5a6e8a.jpg",
                    lable:"基础护肤",
                    id:'1'
                },{
                    url:"https://img12.360buyimg.com/n1/s450x450_jfs/t1/106119/25/13739/168435/5e6372a4Eae122f80/e2d8c31c9b5a6e8a.jpg",
                    lable:"基础护肤2",
                    id:'1'
                },{
                    url:"https://img12.360buyimg.com/n1/s450x450_jfs/t1/106119/25/13739/168435/5e6372a4Eae122f80/e2d8c31c9b5a6e8a.jpg",
                    lable:"基础护肤3",
                    id:'1'
                },{
                    url:"https://img12.360buyimg.com/n1/s450x450_jfs/t1/106119/25/13739/168435/5e6372a4Eae122f80/e2d8c31c9b5a6e8a.jpg",
                    lable:"基础护肤4",
                    id:'1'
                },{
                    url:"https://img12.360buyimg.com/n1/s450x450_jfs/t1/106119/25/13739/168435/5e6372a4Eae122f80/e2d8c31c9b5a6e8a.jpg",
                    lable:"基础护肤5",
                    id:'1'
                },{
                    url:"https://img12.360buyimg.com/n1/s450x450_jfs/t1/106119/25/13739/168435/5e6372a4Eae122f80/e2d8c31c9b5a6e8a.jpg",
                    lable:"基础护肤6",
                    id:'1'
                },
            ],
            advertisementImg:[
                'https://oss.can-hang.com/admin/other/1579255233798.jpg?1583587781960',
                'https://oss.can-hang.com/admin/other/1578372462784.png?1583589066906',
            ],
        }
    },
    components:{
        searchBox
    },
    mounted(){
        //控制分类高度
        let setHeight = '';
        let boxheight = (document.documentElement.clientHeight - 200);
        let Androidsetheight = ((70/parseFloat(window.getComputedStyle(this.$refs.classifyLeft)['font-size']))*boxheight-70)/37.5;
        let Iossetheight = ((70/parseFloat(window.getComputedStyle(this.$refs.classifyLeft)['font-size']))*boxheight)/37.5;
        window.navigator.userAgent.toLowerCase().indexOf('android')!= -1 ? setHeight = Androidsetheight : setHeight = Iossetheight;
        this.$refs.classifyLeft.style.height = setHeight+'rem';
        this.$refs.classifyRight.style.height = setHeight+'rem';
    },
    methods:{
        getSearchValue(value){
            console.log("==========="+value)
        },
        clickLeft(index){
            this.activeNum = index;
        },
        goGoodsDetail(id){
            console.log('=============')
            this.$router.push({path:`/goodsDetail/${id}`});
        },
    }
}
</script>
<style lang="scss" scoped>
::-webkit-scrollbar {
    display: none;
}
.classifyContainer{
    .active{
        background: #000;
        color: #fff !important;
    }
    overflow: hidden;
    .classifyBox{
        border-top: 1px solid #e9e9e9;
        .classifyLeft{
            width: 28%;
            height: 100%;
            // background: chartreuse;
            float: left;
            font-size: 50px;
            padding-top: 25px;
            overflow-y: auto;
            .classifyLeftList{
                padding: 25px 0;
                border-bottom: 1px solid #e9e9e9;
                p{
                    font-size: 55px;
                    height: 100px;
                    border-radius: 50px;
                    line-height: 100px;
                    width: 80%;
                    display: inline-block;
                    margin: 0 auto;
                }
            }
        }
        .classifyRight{
            width: 70%;
            border-left: 1px solid #e9e9e9;
            // background: cyan;
            float: right;
            padding-left: 30px;
            padding-top: 30px;
            padding-right: 45px;
            overflow-y: auto;
            .header{
                font-size: 50px;
                font-weight: bold;
                text-align: left;
                margin-bottom: 20px;
            }
            .goodsBox{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                .goodsList{
                    width: 30%;
                    margin-top: 30px;
                    padding:20px 25px;
                    img{
                        width: 100%;
                        height: 210px;
                    }
                    p{
                        margin-top: 15px;
                    }
                }
            }
            .advertisingPosition{
                height: 370px;
                width: 100%;
                background: cornflowerblue;
                margin-bottom: 20px;
                .staticDiagram{
                    width: 100%;
                    height: 100%;
                    img{
                        width:100%;
                        height: 100%;
                    }
                }
            }
            .commone{
                padding-top: 30px;
                padding-bottom: 50px;
                padding-right: 20px;
                border-bottom: 1px solid #e9e9e9;
            }
            .well{
                padding-top: 50px;
                .headerBox{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .ranking{
                        font-size: 35px;
                        color: red;
                    }
                }
            }
        }
    }
}
//轮播图
.advertisementBox{
    width: 100%;
    position: relative;
    height: 370px;
    img {
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 370px;
    }
}

</style>