<template>
    <div class="goodsBottomContainer">
        <div class="goodsBottomBox">
            <div class="service">客服</div>
            <div class="button">{{button}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            button:'立即抢单'
        }
    }
}
</script>
<style lang="scss" scoped>
.goodsBottomContainer{
    width: 100%;
    height: 140px;
    .goodsBottomBox{
        width: 100%;
        height: 140px;
        position: fixed;
        bottom: 0;
        z-index: 9999;
        display: flex;
        justify-content: center;
        div{
            width: 49.6%;
            color: #fff;
            font-size: 80px;
            line-height: 140px;
        }
        .service{
            background: #108EE9;
        }
        .button{
            background: #F20505;
        }
    }
}
</style>