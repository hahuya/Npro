<template>
    <div class="outContainer">
        <div class="header">
            <i class="iconfont iconzuojiantou"  @click="$router.go(-1)"></i>
            <p>{{text}}</p>
            <i :class="['iconfont','rightIcon',rightIcon]" v-if="rightIcon" @click="clickHeadler"></i>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        text:{
            type:String,
            default:'个人信息'
        },
        rightIcon:{
            type:String,
            default:null
        }
    },
    data(){
        return{}
    },
    mounted(){
    },
    methods:{
        clickHeadler(){
            console.log('00000000000000')
            this.$emit('rightIconCallback','22')
        }
    }
}
</script>
<style lang="scss" scoped>
.outContainer{
    position: flex;
    top: 0px;
    width: 100%;
}
.header{
        background: rgb(14, 123, 248);
        display: flex;
        align-items: center;
        padding: 45px 30px;
        position: relative;
        i{
            font-size: 75px;
            color: #fff;
            margin-right: 30px;
        }
        p{
            font-size: 65px;
            color: #fff;
        }
        .rightIcon{
            position: absolute;
            right: 30px;
            top:45px;
            font-size: 80px;
        }
    }
</style>