<template>
    <div class="personalContainer">
        <ownHeader :rightIcon='"iconellipsis2"'/>
        <div class="informationBox">
            <div class="informationList">
                <p class="text">个人主页</p>
                <div class="information">
                    <img :src="information.useUrl" alt="">
                </div>
                <i class="iconfont iconyoujiantou headIcon"></i>
            </div>
            <div class="informationList">
                <p class="text">身份认证</p>
                <div class="information">
                    <div class="authentication">
                        <p>XXX用户</p>
                        <!-- <i class="iconfont iconshiming"></i> -->
                    </div>
                </div>
                <i class="iconfont iconyoujiantou headIcon"></i>
            </div>
            <div class="informationList">
                <p class="text">XXX宝账号</p>
                <div class="information">
                    <p>{{information.iphone}}</p>
                </div>
                <i class="iconfont iconyoujiantou headIcon"></i>
            </div>
            <div class="informationList">
                <p class="text">我的二维码</p>
                <div class="information">
                    <i class="iconfont iconico"></i>
                </div>
                <i class="iconfont iconyoujiantou headIcon"></i>
            </div>
            <div class="informationList">
                <p class="text">xxx宝会员名</p>
                <div class="information"></div>
                <i class="iconfont iconyoujiantou headIcon"></i>
            </div>
            <!-- 间隔 -->
            <div class="interval"></div>
            <div class="informationList">
                <p class="text">我的收货地址</p>
                <div class="information">
                </div>
                <i class="iconfont iconyoujiantou headIcon"></i>
            </div>
            <div class="informationList">
                <p class="text">我的发票抬头</p>
                <div class="information"></div>
                <i class="iconfont iconyoujiantou headIcon"></i>
            </div>
            <!-- 间隔 -->
            <div class="interval"></div>
            <div class="informationList">
                <p class="text">邀请有礼</p>
                <div class="information">
                </div>
                <i class="iconfont iconyoujiantou headIcon"></i>
            </div>
            <div class="informationList">
                <p class="text">我的收藏</p>
                <div class="information"></div>
                <i class="iconfont iconyoujiantou headIcon"></i>
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
            information:{
                useUrl:'//m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/106207/23/14387/195053/5e64fdd8E61090a86/cbe35e1242e1bf50.jpg!q70.dpg.webp',
                iphone:'15915915959'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.personalContainer{
    
    .informationBox{
        .informationList{
            position: relative;
            padding: 30px 0px;
            margin-left: 50px;
            border-bottom: 1px solid #e9e9e9;
            height: 170px;
            .headIcon{
                position: absolute;
                right: 30px;
                top: 40px;
                font-size: 50px;
                color: #ccc8c8;
            }
            .text{
                font-size: 60px;
                float: left;
                height: 110px;
                line-height: 110px;
            }
            .information{
                height: 110px;
                margin-right: 130px;
                &>*{
                    float: right;
                }
                img{
                    width: 110px;
                    height: 110px;
                    border-radius: 20px;
                }
                p{
                    height: 110px;
                    line-height: 110px;
                    font-size: 60px;
                    display: inline-block;
                }
                i{
                    display: inline-block;
                    font-size: 75px;
                    line-height: 110px;
                }
                .authentication{
                    p{
                        height: 110px;
                        line-height: 110px;
                        display: inline-block;
                    }
                    i{
                        line-height: 150px;
                    }
                }
            }
            .information::after{
                content:''; 
                height:0;
                display:block ;
                clear:both ;
                zoom:1; // 兼容低版本
                overflow:hidden;
            }
        }
        .informationList::after{
            content:''; 
            height:0;
            display:block ;
            clear:both ;
            zoom:1; // 兼容低版本
            overflow:hidden;
        }
    }
}
</style>