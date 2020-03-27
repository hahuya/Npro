<template>
    <div>
        
        <div class="header">
            <div class="nav">
                <p class="title">我的</p> 
                <p class="set">设置</p>
            </div>
            <div class="massege clearfix" @click="goto('/own/parsonalInformation')">
                <div class="pricture">
                    <img :src="useUrl" alt="">
                    <i class="iconfont iconjifenhuiyuan"></i>
                </div>
                <div class="nameBox">
                    <p class="name">{{useName}}</p>
                    <p class="iphone">{{useIphone}}</p>
                </div>
                <div class="iconfont iconyoujiantou open"></div>
            </div>
        </div>
        <div class="memder headList clearfix">
            <div class="fl left">
                <p class="iconfont iconhuabei headIcon bule"></p>
                <p class="headName">XXX宝会员</p>
            </div>
            <div class="fr right">
                <p class="tips">8个积分待领取</p>
                <i class="iconfont iconyoujiantou openList"></i>
            </div>
        </div>
        <div class="interval"></div>
        <div class="listBox">
            <div class="headList clearfix" v-for="(item,index) in listData" :key="index">
                <div class="clearfix" @click="goto(item.path)">
                    <div class="fl left">
                        <p :class="['iconfont','headIcon',item.icon,item.iconColor]"></p>
                        <p class="headName">{{item.name}}</p>
                    </div>
                    <div class="fr right">
                        <p class="tips" v-if="item.tips">{{item.tips}}</p>
                        <i class="iconfont iconyoujiantou openList"></i>
                    </div>
                </div>
            </div>
        </div>
        <bottom-menu/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            // modulecompoents:['one','two','three'],
            useUrl:'//m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/106207/23/14387/195053/5e64fdd8E61090a86/cbe35e1242e1bf50.jpg!q70.dpg.webp',
            useName:'用户XXXX',
            useIphone:'15915915959',
            listData:[
                {
                    'icon':'iconwj-zd',
                    'iconColor':'orange',
                    'name':'账单',
                    'tips':'',
                    'path':'/own/billBusiness'
                },{
                    'icon':'iconzichanguanli',
                    'iconColor':'bule',
                    'name':'总资产',
                    'tips':'安全账户保障中',
                    'path':'/own/memberBusiness'
                },{
                    'icon':'iconqian4',
                    'iconColor':'bule',
                    'name':'余额',
                    'tips':'1000 元',
                    'path':'/own/balanceBusiness'
                },{
                    'icon':'iconyuebao',
                    'iconColor':'red',
                    'name':'余额宝',
                    'tips':'',
                    'path':'/'
                },{
                    'icon':'iconhuabei',
                    'iconColor':'bule',
                    'name':'花呗',
                    'tips':'',
                    'path':'/'
                },{
                    'icon':'iconlogo',
                    'iconColor':'bule',
                    'name':'借呗',
                    'tips':'',
                    'path':'/'
                },{
                    'icon':'iconyinhangqia',
                    'iconColor':'orange',
                    'name':'银行卡',
                    'tips':'',
                    'path':'/'
                },{
                    'icon':'iconkefu',
                    'iconColor':'bule',
                    'name':'我的客服',
                    'tips':'',
                    'path':'/'
                },
            ]
        }
    },
    components:{
        // one:()=>import('@/page/own/queue/one'),
        // two:()=>import('@/page/own/queue/two'),
        // three:()=>import('@/page/own/queue/three'),
    },
    methods:{
        goto(path){
            this.$router.push(path);
        }
    }
}
</script>
<style lang="scss" scoped>
.orange{
    color: rgb(247, 84, 25);
}
.bule{
    color: rgb(14, 123, 248);
}
.red{
    color: red;
}
.headList{
    padding: 40px 30px;
    height: 150px;
    border-bottom: 1px solid #e9e9ee;
    .left{
        display: flex;
        align-items: center;
        height: 70px;
        .headIcon{
            font-size: 75px;
            margin-right: 40px;
        }
        .headName{
            font-size: 45px;
        }
    }
    .right{
        display: flex;
        align-items: center;
        height: 70px;
        .tips{
            font-size: 42px;
            margin-right: 100px;
        }
        .openList{
            font-size: 55px;
            color: #cfcccc;
        }
    }
    
}
.header{
    width: 100%;
    background: rgb(14, 123, 248);
    color: #fff;
    padding-bottom: 20px;
    .nav{
        position: relative;
        padding: 20px 0;
        .title{
            font-size: 65px;
        }
        .set{
            position: absolute;
            font-size: 45px;
            right: 25px;
            top: 32px;
        }
    }
    .massege{
        .pricture{
            float: left;
            position: relative;
            width: 220px;
            margin-left: 25px;
            margin-bottom: 30px;
            img{
                width: 210px;
                height: 210px;
                box-shadow: 0px 0px 20px rgba(252, 250, 250, 0.9);
                border-radius: 20px;
            }
            i{
                position: absolute;
                right: -40px;
                bottom: -10px;
                color: orangered;
                font-size: 60px;
            }
        }
        .nameBox{
            float: left;
            height: 210px;
            width: 55%;
            text-align: left;
            margin-left: 90px;
            padding-top: 35px;
            .name{
                font-size: 55px;
                margin-bottom: 25px;
            }
            .iphone{
                font-size: 45px;
            }
        }
    }
    .open{
        float: right;
        height: 210px;
        width: 15%;
        line-height: 210px;
        font-size: 70px;
    }
}
.memder{
    p{
        float: left;
    }
}
.interval{
    height: 55px;
    width: 100%;
    background: #e9e9e9;
}
</style>