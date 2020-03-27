<template>
    <div>
        <div class="flexHeader">
            <ownHeader  :rightIcon='"iconellipsis2"' :text='"账单"' @rightIconCallback='rightIconCallback'/>
            <div class="navContainer between_center">
                <div class="leftNav between_center">
                    <div class="navlist">
                        <p>筛选</p>
                        <i class="iconfont iconzelvxuanzefeiyongdaosanjiaoxingfandui"></i>
                    </div>
                    <div class="navlist">
                        <p>分类</p>
                        <i class="iconfont iconzelvxuanzefeiyongdaosanjiaoxingfandui"></i>
                    </div>
                </div>
                <div class="rightNav between_center"><p>搜索</p></div>

            </div>
            <div class="billTitle between_center">
                <div class="leftTitle navlist">
                    <p>本月</p>
                    <i class="iconfont iconzelvxuanzefeiyongdaosanjiaoxingfandui"></i>
                </div>
                <div class="rightTitle">
                    <p>{{`支出 ￥${expenditure}`}}</p>
                    <p>{{`收入 ￥${income}`}}</p>
                </div>
            </div>
        </div>
        <div class="detaileContainer">
            <div class="billList" v-for="(item,index) in content" :key="index">
                <i :class="['iconfont',item.icon]"></i>
                <div class="content">
                    <div class="left">
                        <p class="title text-overflow-1">{{item.title}}</p>
                        <p class="type">{{item.type}}</p>
                        <p class="date">{{item.date}}</p>
                    </div>
                    <div class="right">
                        <p class="money">{{item.money}}</p>
                    </div>
                </div>
            </div>
            <zj-load-more @loadMore="loadMoreDesignerList"/>
        </div>
        <div class="bottomContainer">
            <div class="bottomList">
                <div class="bottomItem" v-for="(item,index) in bottomHeadler" :key="index">
                    <i :class="['iconfont',item.icon,item.color]"></i>
                    <p>{{item.text}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ownHeader from '@/components/ownHeader'
export default {
    components:{ownHeader},
    data(){
        return{
            income:'5000',
            expenditure:'3000',
            bottomHeadler:[
                {
                    icon:'iconxingzhuang',
                    text:'账单',
                    path:'/own/billBusiness',
                    color:'colorBlue'
                },
                {
                    icon:'icontongji',
                    text:'统计',
                    path:'/',
                    color:''
                }
            ],
            content:[
                {
                    icon:'iconyuebao',
                    title:'余额宝1-收益发放',
                    type:'投资理财',
                    date:'01-24 12:22',
                    money:'10000'
                },{
                    icon:'iconxiaodian',
                    title:'余额宝2-收益发放',
                    type:'投资理财',
                    date:'01-24 12:22',
                    money:'10000'
                },{
                    icon:'iconyuebao',
                    title:'余额宝3-收益发放',
                    type:'投资理财',
                    date:'01-24 12:22',
                    money:'10000'
                },{
                    icon:'iconxiaodian',
                    title:'余额宝4-收益发放',
                    type:'投资理财',
                    date:'01-24 12:22',
                    money:'10000'
                },{
                    icon:'iconyuebao',
                    title:'余额宝5-收益发放',
                    type:'投资理财',
                    date:'01-24 12:22',
                    money:'10000'
                },{
                    icon:'iconyuebao',
                    title:'余额宝5-收益发放',
                    type:'投资理财',
                    date:'01-24 12:22',
                    money:'10000'
                },{
                    icon:'iconyuebao',
                    title:'余额宝5-收益发放',
                    type:'投资理财',
                    date:'01-24 12:22',
                    money:'10000'
                },
            ]
        }
    },
    methods:{
        rightIconCallback(){
        },
        loadMoreDesignerList(){
            console.log('=====================')
        }
    }
}
</script>
<style lang="scss" scoped>
.flexHeader{
    position: fixed;
    top: 0;
    width: 100%;
    background: #fff;
    z-index: 2;
}
.navContainer{
    padding: 38px 45px;
    width: 100%;
    .leftNav{
        .navlist{
            height: 50px;
            margin-right: 120px;
            display: flex;
            justify-content: space-between;
            p{
                font-size: 50px;
                margin-right: 15px;
            }
            i{
                font-size: 40px;
                line-height: 85px;
            }
        }
    }
    .rightNav{
        p{
            font-size: 50px;
            height: 80px;
            border-left: 1px solid #e9e9e9;
            display: inline-block;
            padding: 0px 0px 20px 40px;
        }
        
    }
}
.billTitle{
    padding: 42px 70px;
    background: rgb(226, 223, 223);
    .leftTitle{
        display: flex;
        justify-content: space-between;
        padding: 10px 30px;
        border-radius: 35px;
        background: #fff;
        p{
            font-size: 46px;
            margin-right: 25px;
        }
        i{
            font-size: 40px;
            line-height: 70px;
        }
    }
    .rightTitle{
        p{
            font-size: 42px;
        }
    }
}
.detaileContainer{
    padding-top: 560px;
    .billList{
        padding: 0px 45px;
        margin-top: 50px;
        position: relative;
        i{
            font-size: 90px;
            position: absolute;
            top: 20px;
            left: 45px;
            color: red;
        }
        .content{
            width: calc(100%-180);
            margin-left: 180px;
            display: flex;
            justify-content: space-between;
            .left{
                text-align: left;
                max-width: 60%;
            }
            .title{
                font-size: 54px;
                margin-bottom: 10px;
            }
            .type{
                font-size: 44px;
                margin-bottom: 10px;
            }
            .date{
                font-size: 44px;
                color: rgb(226, 223, 223);
            }
            .money{
                font-size: 60px;
                color: red;
            }
        }
    }
}
.bottomContainer{
    width: 100%;
    height: 160px;
   .bottomList{
        position: fixed;
        bottom: 0;
        background: #F7F7F7;
        left: 0;
        width: 100%;
        padding: 0px 20px;
        z-index: 2;
        padding-top: 20px;
        box-shadow: 0px -1px 8px rgba(217, 217, 217, 1);
        display: flex;
        justify-content: space-around;
       .bottomItem{
            position: relative;
            i{
                font-size: 75px;
                font-weight: 20px;
            }
            p{
                font-size: 45px;
                // margin-top: 4px;
            }
       }
   } 
}
</style>