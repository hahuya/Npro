<template>
    <div class="shortcutButton">
        <div class="container">
            <i class="iconfont iconzuojiantou goback" @click="$router.go(-1)"></i>
            <i class="iconfont iconliebiao1 menu" @click="show"></i>
        </div>
        <div class="tableMenu" v-if="showTable">
            <p v-for="(item,index) in tableMenu" :key="index" class="list">
                    <i :class="['iconfont',item.icon]"></i>
                    <span class="label" @click="goto(item.path)">{{item.label}}</span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            showTable:false,
            tableMenu:[
                {
                    label: '首页',
                    path: '/',
                    icon:'iconweibiaoti1'
                },
                {
                    label: '理财中心',
                    path: '/financial',
                    icon:'iconqian4'
                },
                {
                    label: '我的收藏',
                    path: '/classify',
                    icon:'iconqiangdanicon'
                },
                {
                    label: '抢单记录',
                    path: '/help',
                    icon:'iconicon-test'
                },
                {
                    label: '个人中心',
                    path: '/own',
                    icon:'iconwodedangxuan'
                },
                {
                    label: '联系客服',
                    path: '/own',
                    icon:'iconwodedangxuan'
                }
            ]
        }
    },
    mounted() {
        document.documentElement.scrollTop = 0;
    },
    methods:{
        goto(path){
            this.$router.push(path)
        },
        show(){
            this.showTable = !this.showTable;
        }
    }
}
</script>
<style lang="scss" scoped>
.shortcutButton{
    .container{
        position: fixed;
        top: 30px;
        left: 15px;
        padding: 20px 30px;
        border-radius: 40px;
        height: 120px;
        background: #fff;
        display: flex;
        align-items: center;
        border: 1px solid #E6E6E6;
        i{
            font-size: 70px;
            display: inline-block;
        }
        .menu{
            border-left: 1px dashed #E6E6E6;
            padding-left: 15px;
            margin-left: 5px;
        }
    }
    .tableMenu{
        background: #fff;
        position: fixed;
        top: 160px;
        left: 15px;
        border-radius: 15px;
        border: 1px solid #E6E6E6;
        .list{
            padding: 12px 0px;
            position: relative;
            border-bottom: 1px solid #E6E6E6;
            i{
                position: absolute;
                left: 10px;
                font-size: 50px;
            }
            span{
                width: 100%;
                font-size: 40px;
                padding-left: 90px;
                padding-right: 20px;
            }
        }
        .list:nth-last-child(1){
            border-bottom: 0px;
        }
    }
}
</style>