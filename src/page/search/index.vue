<template>
    <div class="searchContainer">
        <div class="header">
            <searchBox @search = 'getSearchValue'/>
            <div class="headerBox">
                <div class="filterButtonBox">
                    <p class="filterButtonList">综合<i class="iconfont iconicon-arrow-down"></i></p>
                    <p class="filterButtonList">销量</p>
                    <p class="filterButtonList">价格<i class="iconfont iconzhankaishangxia"></i></p>
                    <p class="filterButtonList">逛品牌</p>
                    <p class="filterButtonList">筛选<i class="iconfont iconshaixuan-tianchong"></i></p>
                </div>
                <div class="ToBeSelecteContainer">
                    <p class="selectedList">考拉3周年</p>
                    <p class="selectedList">考拉自营</p>
                    <p class="selectedList">品牌<i class="iconfont iconicon-arrow-down"></i></p>
                    <p class="selectedList">分类<i class="iconfont iconicon-arrow-down"></i></p>
                </div>
            </div>
        </div>
        <div class="screenContainer">
            <div class="goodsContainer">
                <div class="goodsList" v-for="(item,index) in goodsData" :key="index">
                    <div class="listLeft">
                        <img :src="item.url" alt="">
                    </div>
                    <div class="listRight">
                        <p class="contry"><i class="iconfont iconhanguo"></i>{{item.contry}}</p>
                        <p class="title text-overflow-2">{{item.title}}</p>
                        <p class="keyword">{{item.keyword}}</p>
                        <p>
                            <span class="price">{{`￥ ${item.price}`}}</span>
                            <span class="singleton">{{`单件  ￥${item.singleton}`}}</span>
                        </p>
                        <p>
                            <span class="zy">自营</span>
                            <span class="tj">特价</span>
                            <span class="comment">{{`${item.comment}条评论  ${item.praise}%好评`}}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import searchBox from '@/components/searchBox'
export default {
    data(){
        return {
            goodsData:[
                {
                    url:'//m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/106207/23/14387/195053/5e64fdd8E61090a86/cbe35e1242e1bf50.jpg!q70.dpg.webp',
                    contry:'韩国直采 品质保证',
                    title:'【京东秒杀】西域美农陕西纸袋水晶红富士苹果水果生鲜当季新鲜非冰糖心苹果 10斤带箱苹果【推荐】 10斤带箱纸袋红富士苹果',
                    keyword:'收缩毛孔 | 贴片式 | 任何肤质',
                    price:'266.5',
                    singleton:'45',
                    comment:'2984',
                    praise:'97.8'
                },{
                    url:'//m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/106207/23/14387/195053/5e64fdd8E61090a86/cbe35e1242e1bf50.jpg!q70.dpg.webp',
                    contry:'韩国直采 品质保证',
                    title:'【京东秒杀】西域美农陕西纸袋水晶红富士苹果水果生鲜当季新鲜非冰糖心苹果 10斤带箱苹果【推荐】 10斤带箱纸袋红富士苹果',
                    keyword:'收缩毛孔 | 贴片式 | 任何肤质',
                    price:'266.5',
                    singleton:'45',
                    comment:'2984',
                    praise:'97.8'
                },{
                    url:'//m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/106207/23/14387/195053/5e64fdd8E61090a86/cbe35e1242e1bf50.jpg!q70.dpg.webp',
                    contry:'韩国直采 品质保证',
                    title:'【京东秒杀】西域美农陕西纸袋水晶红富士苹果水果生鲜当季新鲜非冰糖心苹果 10斤带箱苹果【推荐】 10斤带箱纸袋红富士苹果',
                    keyword:'收缩毛孔 | 贴片式 | 任何肤质',
                    price:'266.5',
                    singleton:'45',
                    comment:'2984',
                    praise:'97.8'
                },{
                    url:'//m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/106207/23/14387/195053/5e64fdd8E61090a86/cbe35e1242e1bf50.jpg!q70.dpg.webp',
                    contry:'韩国直采 品质保证',
                    title:'【京东秒杀】西域美农陕西纸袋水晶红富士苹果水果生鲜当季新鲜非冰糖心苹果 10斤带箱苹果【推荐】 10斤带箱纸袋红富士苹果',
                    keyword:'收缩毛孔 | 贴片式 | 任何肤质',
                    price:'266.5',
                    singleton:'45',
                    comment:'2984',
                    praise:'97.8'
                },{
                    url:'//m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/106207/23/14387/195053/5e64fdd8E61090a86/cbe35e1242e1bf50.jpg!q70.dpg.webp',
                    contry:'韩国直采 品质保证',
                    title:'【京东秒杀】西域美农陕西纸袋水晶红富士苹果水果生鲜当季新鲜非冰糖心苹果 10斤带箱苹果【推荐】 10斤带箱纸袋红富士苹果',
                    keyword:'收缩毛孔 | 贴片式 | 任何肤质',
                    price:'266.5',
                    singleton:'45',
                    comment:'2984',
                    praise:'97.8'
                },{
                    url:'//m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/106207/23/14387/195053/5e64fdd8E61090a86/cbe35e1242e1bf50.jpg!q70.dpg.webp',
                    contry:'韩国直采 品质保证',
                    title:'【京东秒杀】西域美农陕西纸袋水晶红富士苹果水果生鲜当季新鲜非冰糖心苹果 10斤带箱苹果【推荐】 10斤带箱纸袋红富士苹果',
                    keyword:'收缩毛孔 | 贴片式 | 任何肤质',
                    price:'266.5',
                    singleton:'45',
                    comment:'2984',
                    praise:'97.8'
                },
            ]
        }
    },
    components:{
        searchBox
    },
    methods:{
        getSearchValue(value){
            console.log("==========="+value)
        },
    }
}
</script>
<style lang="scss" scoped>
.searchContainer{
    .header{
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        background: #fff;
    }
    .headerBox{
        padding: 0px 30px;
        .filterButtonBox{
            display: flex;
            justify-content: space-between;
            padding: 30px 0px;
            border-top: 1px solid #e9e9e9;
            border-bottom: 1px solid #e9e9e9;
            .filterButtonList{
                width: 17%;
                font-size: 45px;
                i{
                    margin-left: 5px;
                    font-size: 35px;
                    font-weight: bold;
                }
            }
        }
        .ToBeSelecteContainer{
            display: flex;
            justify-content: space-around;
            padding: 30px 0px;
            border-bottom: 1px solid #e9e9e9;
            .selectedList{
                width: 20%;
                background: rgb(240, 239, 237);
                padding: 15px;
                border-radius: 10px;
                font-size: 36px;
                i{
                    margin-left: 10px;
                    font-size: 40px;
                }
            }
        }
    }
    .screenContainer{
        margin-top: 470px;
        padding: 0px 30px;
    }
    
    .goodsContainer{
        padding-top: 20px;
        .goodsList{
            padding: 40px 15px 15px 15px;
            border-bottom: 1px solid #e9e9e9;
            width: 100%;
            display: flex;
            justify-content: space-between;
            .listLeft{
                width: 28%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .listRight{
                width: 68%;
                p{
                    text-align: left;
                    margin: 10px 0px;
                }
                .contry{
                    color: rgb(207, 205, 201);
                    i{
                        margin-right: 13px;
                    }
                }
                .title{
                    font-size: 42px;
                    font-weight: bold;
                }
                .keyword{
                    color: rgb(207, 205, 201);
                }
                .price{
                    font-size: 45px;
                    color: red;
                    font-weight: bold;
                    margin-right: 25px;
                }
                .singleton{
                    padding:0px 25px;
                    margin: 13px 0px;
                    border-left: 1px solid #e9e9e9;
                }
                .zy{
                    padding: 6px 15px;
                    border: 1px solid red;
                    border-radius: 8px;
                    color: red;
                    margin-right: 20px;
                }
                .tj{
                    padding: 9px 18px;
                    border-radius: 8px;
                    background: red;
                    color: #fff;
                    font-weight: bold;
                    margin-right: 20px;
                }
                .comment{
                    font-size: 30px;
                }
            }
        }
    }
}
</style>