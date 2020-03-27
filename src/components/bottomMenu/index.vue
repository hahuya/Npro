<template>
    <div class="bottomMenu">
        <div class="bottomContainer">
            <div class="bottomBox between_center">
                <!-- <div class="bottonmItem column_between_center" v-for="(item,index) in menulist" :key="index">
                    <i :class="['iconfont',item.icon]"></i>
                    <p>{{item.label}}</p>
                </div> -->
                <div class="bottonmItem column_between_center" @click="goto(menulist[0].path)">
                    <i :class="['iconfont',menulist[0].icon]"></i>
                    <p>{{menulist[0].label}}</p>
                </div>
                <div class="bottonmItem column_between_center" @click="goto(menulist[1].path)">
                    <i :class="['iconfont',menulist[1].icon]"></i>
                    <p>{{menulist[1].label}}</p>
                </div>
                <div class="bottonmItem column_between_center" @click="goto(menulist[2].path)">
                    <div class="big"><i :class="['iconfont',menulist[2].icon]"></i></div>
                    <i :class="['iconfont',menulist[2].icon]"></i>
                    <p>{{menulist[2].label}}</p>
                </div>
                <div class="bottonmItem column_between_center" @click="goto(menulist[3].path)">
                    <i :class="['iconfont',menulist[3].icon]"></i>
                    <p>{{menulist[3].label}}</p>
                </div>
                <div class="bottonmItem column_between_center" @click="goto(menulist[4].path)">
                    <i :class="['iconfont',menulist[4].icon]"></i>
                    <p>{{menulist[4].label}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            menulist:[
                {
                    label: '首页',
                    path: '/',
                    icon:'iconweibiaoti1'
                },
                {
                    label: '理财中心',
                    path: '/classify',
                    icon:'iconqian4'
                },
                {
                    label: '抢单',
                    path: '/search',
                    icon:'iconqiangdanicon'
                },
                {
                    label: '帮助中心',
                    path: '/allSearch',
                    icon:'iconicon-test'
                },
                {
                    label: '我的',
                    path: '/own',
                    icon:'iconwodedangxuan'
                }
            ]
        }
    },
    methods:{
        goto(path){
            this.$router.push(path)
        }
    }
}
</script>
<style lang="scss" scoped>
.bottomMenu{
    height: 160px;
    width: 100%;
    // background-color: aquamarine;
    .bottomContainer{
        position: fixed;
        bottom: 0;
        background: #F7F7F7;
        left: 0;
        width: 100%;
        padding: 0px 20px;
        z-index: 2;
        padding-top: 20px;
        box-shadow: 0px -1px 8px rgba(217, 217, 217, 1);
        .bottonmItem{
            position: relative;
            i{
                font-size: 75px;
                font-weight: 20px;
            }
            p{
                font-size: 50px;
                // margin-top: 4px;
            }
        }
        .big{
            position: absolute;
            background: #fff;
            border-radius: 50%;
            padding: 5px;
            top: -140px;
            // box-shadow: 0px -1px 8px rgba(217, 217, 217, 1);
            i{
                font-size: 190px;
                font-weight: 40px;
            }
        }
        .bottonmItem:nth-child(3){
            // position: relative;
            // align-items:flex-end;
            // i{
            //     font-size: 120px;
            //     position: absolute;
            //     top: -40px;
            // }
        }
    }
}
</style>