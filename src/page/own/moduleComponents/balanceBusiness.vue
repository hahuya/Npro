<template>
    <div>
        <ownHeader :text='"余额"'/>
        <div class="balanceContainer">
            <p class="text">余额(元)</p>
            <p class="number">{{balance}}</p>
        </div>
        <div class="listBox">
            <div class="headList clearfix" v-for="(item,index) in listData" :key="index">
                <p :class="['iconfont','headIcon',item.icon,item.iconColor]"></p>
                <div class="headBox clearfix" @click="goto(item.path)">
                    <div class="fl left">
                        <p class="headName">{{item.name}}</p>
                    </div>
                    <div class="fr right">
                        <p class="tips" v-if="item.tips">{{item.tips}}</p>
                        <i class="iconfont iconyoujiantou openList"></i>
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
            balance:'9000.01',
            listData:[
                {
                    'icon':'iconzaixianchongzhi',
                    'iconColor':'colorBlue',
                    'name':'充值',
                    'tips':'',
                    'path':'/own/billBusiness'
                },{
                    'icon':'icontixian',
                    'iconColor':'colorOrange',
                    'name':'提现',
                    'tips':'',
                    'path':'/own/memberBusiness'
                },{
                    'icon':'iconyunongtongzhuanzhanghuikuan',
                    'iconColor':'colorBlue',
                    'name':'转账',
                    'tips':'',
                    'path':'/own/balanceBusiness'
                },{
                    'icon':'iconyuebao',
                    'iconColor':'colorRed',
                    'name':'集分宝',
                    'tips':'做任务送积分',
                    'path':'/'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.balanceContainer{
    background: #0e7bf8;
    padding: 0px 30px;
    p{
        text-align: left;
    }
    .text{
        font-size: 40px;
        color: rgb(226, 223, 223);
        padding: 20px 0px;
    }
    .number{
        font-size: 90px;
        color: #fff;
        padding: 70px 0px;
    }
}
.headList{
    padding: 40px 30px;
    height: 150px;
    position: relative;
    .headIcon{
        position: absolute;
        font-size: 75px;
        top: 40px;
        left: 30px;
    }
    .headBox{
        margin-left: 150px;
        border-bottom: 1px solid #e9e9ee;
        padding-bottom: 30px;
    }
    .left{
        display: flex;
        align-items: center;
        height: 70px;

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
// .headList:nth-child(2){
//     margin-bottom: 70px;
// }.headList:nth-child(3){
//    border-top: 1px solid #e9e9e9;
// }
</style>