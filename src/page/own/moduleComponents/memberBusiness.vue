<template>
    <div>
        <ownHeader :text='"总资产"' :rightIcon='"iconellipsis2"' @rightIconCallback='rightIconCallback'/>
        <div class="backgroundBox">
            <div class="colorBox"></div>
            <div class="assetsContainer outsideBox">
                <div class="myAssetsList">
                    <div class="header between_center">
                        <div class="left">我的资产<i :class="['iconfont',eyeIcon[showEye]]"></i></div>
                        <div class="right between_center">
                            <i class="iconfont icon65"></i>
                            <p class="text">账户保障中</p>
                            <i class="iconfont iconyoujiantou"></i>
                        </div>
                    </div>
                    <div class="detaile between_center">
                        <div class="left">
                            <p class="text">总资产(元)</p>
                            <p class="allMoney">{{allMoney}}</p>
                        </div>
                        <div class="right">
                            <p class="text">昨日收益</p>
                            <p class="profit">{{profit}}</p>
                        </div>
                    </div>
                    <div class="itemBox">
                        <div class="item between_center" v-for="(item,index) in assetsMassege" :key="index">
                            <div class="left itemChild">
                                <p class="title">{{item[0].title}}</p>
                                <p class="text">{{item[0].text}}</p>
                            </div>
                            <div class="right itemChild">
                                <div v-if="Object.keys(item[1])">
                                    <p class="title">{{item[1].title}}</p>
                                    <div class="rightItem between_center">
                                        <p class="text">{{item[1].money}}</p>
                                        <p class="profit">{{item[1].profit}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="quotaContainer outsideBox">
                <div class="header">
                    我的额度
                </div>
                <div class="itemBox">
                    <div class="item between_center" v-for="(item,index) in quotaMassege" :key="index">
                        <div class="left itemChild">
                            <p class="title">{{item[0].title}}</p>
                            <p class="text">{{item[0].text}}</p>
                        </div>
                        <div class="right itemChild">
                            <div  v-if="Object.keys(item[1])">
                                <p class="title">{{item[1].title}}</p>
                                <p class="text">{{item[1].text}}</p>
                            </div>
                        </div>
                    </div>
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
            eyeIcon:['iconyanjing-zhengyan','iconbiyan'],
            showEye:0,
            allMoney:'1,234.03',
            profit:'0.00',
            assetsMassege:[
                [
                    {
                        title:'余额',
                        text:'0.00',
                        path:'/'
                    },{
                        title:'余额宝',
                        money:'1,234.00',
                        profit:'0.01',
                        path:'/'
                    }
                ],[
                    {
                        title:'理财',
                        text:'稳健理财',
                        path:'/'
                    },{
                        title:'基金',
                        money:'198,234.00',
                        profit:'110.01',
                        path:'/'
                    }
                ],[
                    {
                        title:'理财',
                        text:'稳健理财',
                        path:'/'
                    },{
                    }
                ],
            ],
            quotaMassege:[
                [
                    {
                        title:'花呗',
                        text:'340.00',
                        path:'/'
                    },{
                        title:'借呗',
                        text:'10.00',
                        path:'/'
                    },
                ]
            ]
        }
    },
    methods:{
        rightIconCallback(){

        }
    }
}
</script>
<style lang="scss" scoped>
.backgroundBox{
    position: relative;
    .colorBox{
        position: absolute;
        width: 100%;
        height: 750px;
        z-index: -1;
        background: linear-gradient(top,rgb(14, 123, 248), white);
        background: -ms-linear-gradient(top,rgb(14, 123, 248), white);
        background: -webkit-linear-gradient(top,rgb(14, 123, 248), white);
        background: -moz-linear-gradient(top,rgb(14, 123, 248), white);
    }
}
.assetsContainer{
    .header{
        padding: 40px 35px;
        border-bottom: 1px solid #e9e9e9;
        .left{
            font-size: 50px;
            i{
                font-size: 50px;
                margin-left: 30px;
            }
        }
        .right{
            i{
                font-size: 45px;
            }
            .text{
                font-size: 40px;
                margin: 0px 15px;
            }
        }
    }
    .detaile{
        padding: 40px 35px;
        border-bottom: 1px solid #e9e9e9;
        .text{
            font-size: 47px;
            color: rgb(177, 175, 175);
            margin-bottom: 15px;
        }
        .left{
            .allMoney{
                font-size: 75px;
                font-weight: bold;
            }
        }
        .right{
            p{
                text-align: right;
            }
            .profit{
                font-size: 75px;
                color: rgb(177, 175, 175);
            }
        }
    }
}
.quotaContainer{
    margin-top: 70px !important;
    .header{
        font-size: 50px;
        text-align: left;
        border-bottom: 1px solid #e9e9e9;
        padding: 30px;
    }
}
//公共表单样式
.outsideBox{
    margin: 0px 65px;
    background: #fff;
    border-radius: 15px;
    border: 1px solid #e9e9e9;
}
.itemBox{
    .item{
        width: 100%;
        border-bottom: 1px solid #e9e9e9;
        .itemChild{
            padding: 30px;
            width: 49.7%;
        }
        .title{
            font-size: 50px;
            margin-bottom: 20px;
        }
        .left{
            border-right: 1px solid #e9e9e9;
        }
        .text{
            font-size: 45px;
            color: rgb(177, 175, 175);
        }
        .profit{
            font-size: 45px;
            color: red;
        }
    }
    .item:nth-last-child(1){
        border-bottom: 0px;
    }
}
</style>