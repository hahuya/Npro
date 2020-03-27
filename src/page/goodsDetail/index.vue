<template>
    <div class="goodsDetail">
        <!-- 图片轮播 -->
        <div class="goodsBanner" ref="goodsBanner">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(item,index) in pictureSweipe" :key="index">
                <div class="picture">
                    <img :src="item" alt/>
                </div>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- 详情介绍 -->
        <div class="includeContainer">
            <div class="priceContainer between_center">
                <div class="price">￥6000</div>
                <div class="collection column_between_center">
                    <i class="iconfont iconshoucang"></i>
                    <p>收藏</p>
                </div>
            </div>
            <div class="title">
                <span class="platform">京32东</span>Apple iPhone 11 Pro (A2217) 256GB 暗夜绿色 移动联通电信4G手机 双卡双待
            </div>
            <div class="activityContainer text-overflow-2">
                {{goodsactivity}}
            </div>
            <div class="classifyContainer">
                <div class="classify">{{goodsClassify}}</div>
                <div class="surplus clearfix">
                    <p><i class="iconfont iconliebiao"></i>{{`剩余 ${goodsUnit} 单`}}</p>
                    <p><i class="iconfont iconpaper-airplane"></i>直达平台</p>
                </div>
            </div>
            <div class="platformService clearfix">
                <p class="platform">平台</p>
                <p><i class="iconfont iconzhengpinbaozhangduigou"></i>AI自动匹配需求订单</p>
                <p><i class="iconfont iconzhengpinbaozhangduigou"></i>支持月分期服务</p>
            </div>
            <div class="stagesContainer clearfix">
                <p class="stages">月分期</p>
                <p>{{`${goodsStages}期免息`}}</p>
            </div>
            <div class="commentContainer clearfix">
                <p class="comment">评论</p>
                <p class="commentNum">
                    <span>{{`好评 ${goodsPraise}%`}}</span>
                    <span>{{`共 ${goodsCommet} 单`}}
                        <i class="iconfont iconyoujiantou"></i>
                    </span>
                </p>
            </div>
            <div class="userEvaluationContainer">
                <div class="userEvaluationBox" v-for="(item,index) in userEvaluation" :key="index">
                    <div class="commetHeader clearfix">
                        <img :src="item.headPortrait" alt="">
                        <p class="name">{{item.name}}</p>
                        <p class="date">{{item.date}}</p>
                    </div>
                    <div class="comment text-overflow-3">{{item.comment}}</div>
                    <div class="pictureBox">
                        <div class="pictureList" v-for="(url,indexs) in item.picArray" :key="indexs">
                            <img :src="url" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <goodsBottom/>
        <shortcutButtonMenu/>
    </div>
</template>
<script>
import goodsBottom from '@/components/goodsBottomMenu'
import shortcutButtonMenu from '@/components/shortcutButtonMenu'
import Common from "@/plugins/common"
export default {
    components:{
        goodsBottom,
        shortcutButtonMenu
    },
    data(){
        return{
            //开抢时间
            lotteryTime:'2020-3-23',
            //轮播
            pictureSweipe:[
                '//m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/104661/19/7997/50301/5e008558E5e5955d4/5b39781931813e51.jpg!q70.dpg.webp',
                '//m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/104212/30/7879/23736/5e008558Ee027dda3/7f8116db80f8f533.jpg!q70.dpg.webp',
                '//m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/101433/14/8049/60186/5e008558Eb646e309/913b1307aed3ad09.jpg!q70.dpg.webp'
            ],
            //活动
            goodsactivity:'3.9-3.15品质节iPhone特惠，iPhone11Pro领券立减500元，享白条12期免息，iPhoneXsMax领券立减500元！详情请点击！ ',
            //分类
            goodsClassify:'银色，64GB，换修无忧年付版，1个',
            //抢单
            goodsUnit:'5',
            // 免息
            goodsStages:'3',
            //好评
            goodsPraise:'99',
            //历史评论数
            goodsCommet:'100',
            userEvaluation:[
                {
                    headPortrait:'//storage.360buyimg.com/i.imageUpload/6a645f3430666334613536623336373031343633323639343636333437_sma.jpg',
                    name:'用户XXXXX',
                    date:'2020-01-03',
                    comment:'这单抢的很快，赚了100。太舒服了 谢谢XX宝 这单抢的很快，赚了100。太舒服了 谢谢XX宝 这单抢的很快，赚了100。太舒服了 谢谢XX宝 ',
                    picArray:[
                        '//img30.360buyimg.com/shaidan/s128x96_jfs/t1/85638/22/5956/58641/5df07106Edf385cc8/7f590f0147028066.jpg!cc_100x100!q70.dpg.webp',
                        '//img30.360buyimg.com/shaidan/s128x96_jfs/t1/102289/30/5966/98149/5df07107E5b2d8045/8da14225bc3580fd.jpg!cc_100x100!q70.dpg.webp',
                        '//img30.360buyimg.com/shaidan/s128x96_jfs/t1/106799/17/5846/116376/5df07109Eb8618367/3a1274efaa80323f.jpg!cc_100x100!q70.dpg.webp'
                    ]
                },{
                    headPortrait:'//storage.360buyimg.com/i.imageUpload/6a645f3430666334613536623336373031343633323639343636333437_sma.jpg',
                    name:'用户XXXXX',
                    date:'2020-01-03',
                    comment:'这单抢的很快，赚了100。太舒服了 谢谢XX宝 这单抢的很快，赚了100。太舒服了 谢谢XX宝 这单抢的很快，赚了100。太舒服了 谢谢XX宝 ',
                    picArray:[
                        '//img30.360buyimg.com/shaidan/s128x96_jfs/t1/85638/22/5956/58641/5df07106Edf385cc8/7f590f0147028066.jpg!cc_100x100!q70.dpg.webp',
                        '//img30.360buyimg.com/shaidan/s128x96_jfs/t1/102289/30/5966/98149/5df07107E5b2d8045/8da14225bc3580fd.jpg!cc_100x100!q70.dpg.webp',
                        '//img30.360buyimg.com/shaidan/s128x96_jfs/t1/106799/17/5846/116376/5df07109Eb8618367/3a1274efaa80323f.jpg!cc_100x100!q70.dpg.webp'
                    ]
                },
            ]

        }
    },
    mounted(){
        this.$refs.goodsBanner.style.height = `${document.documentElement.clientWidth}px`;
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    },
    methods:{
        //获取倒计时
        setTime(){
            let lotteryTime = this.lotteryTime
            this.grabSheet = setInterval(() => {
                let timeArray = Common.countDown(lotteryTime)
            }, 1000);
        }
    }
}
</script>
<style lang="scss" scoped>
.goodsBanner {
    // padding: 0px 20px;
    padding-bottom: 30px;
    height: 700px;
    .picture {
        height: 100%;
        // width: 100%;
        position: relative;
        img {
            display: block;
            height: 100%;
            width: 100%;
        }
    }
}
.includeContainer{
    .priceContainer{
        margin-bottom: 20px;
        .price{
            font-size: 80px;
            color: red;
        }
        .collection{
            padding: 0 20px;
            i{
                font-size: 50px;
                font-weight: bold;
            }
            p{
                font-size: 50px;
            }
        }
    }
    .title{
        font-size: 50px;
        text-align: left;
        font-weight: bold;
        padding: 0 20px;
        .platform{
            padding: 7px 30px;
            border-radius: 10px;
            background: red;
            font-size: 50px;
            color: #fff;
            text-align: center;
            display: inline-block;
            margin-right: 40px;
            margin-bottom: 15px;
        }
    }
    .activityContainer{
        padding: 0 20px;
        padding-top: 30px;
        text-align: left;
        font-size: 46px;
    }
    .classifyContainer{
        padding-left: 150px;
        text-align: left;
        margin-top: 50px;
        margin-bottom: 50px;
        .classify{
            font-size: 52px;
            font-weight: 50px;
        }
        .surplus{
            color: red;
            margin-top: 10px;
            i{
                font-size: 60px;
                margin-right: 10px;
                font-weight: 100px;
            }
            p{
                float: left;
                font-size: 52px;
                 margin-right: 40px;
            }
        }
    }
    .platformService{
        margin-bottom: 50px;
        .platform{
            margin: 0 30px;
            color: red;
        }
        p{
            float: left;
            font-size: 47px;
            margin-right: 20px;
            i{
                color: red;
                font-size: 50px;
                margin-right: 13px;
            }
        }
    }
    .stagesContainer{
        margin-bottom: 50px;
        .stages{
            margin: 0 30px;
            color: red;
        }
        p{
            float: left;
            font-size: 47px;
        }
    }
    .commentContainer{
        position: relative;
        margin-bottom: 20px;
        .comment{
            font-size: 55px;
            font-weight: bold;
            position: absolute;
            left: 30px;
        }
        p{
            font-size: 40px;
        }
        p:nth-child(2){
            width: 100%;
            padding-top: 20px;
            padding-left: 180px;
            float: right;
            span{
                font-size: 40px;
            }
            span:nth-child(1){
                color: red;
                float: left;
            }
            span:nth-child(2){
                float: right;
                font-weight: bold;
            }
        }
        
    }
    .userEvaluationContainer{
        .userEvaluationBox{
            position: relative;
            margin-bottom: 50px;
            .commetHeader{
                padding-top: 20px;
                border-top: 1px solid #E6E6E6;
                margin-bottom: 30px;
                img{
                    position: absolute;
                    left: 20px;
                    width: 140px;
                    height: 140px;
                    border-radius: 50%;
                    vertical-align: middle;
                }
                p{
                    height: 140px;
                    font-size: 45px;
                    line-height: 140px;
                }
                .name{
                    float: left;
                    margin-left: 200px;
                    font-weight: bold;
                }
                .date{
                    float: right;
                    color: red;
                    margin-right: 30px;
                }
            }
            .comment{
                text-align: left;
                line-height: 90px;
                font-size: 45px;
                font-weight: 90px;
                padding: 0 20px;
                margin-bottom: 25px;
            }
            .pictureBox{
                display: flex;
                justify-content: space-around;
                .pictureList{
                    width: 320px;
                    height: 360px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
    
}
</style>