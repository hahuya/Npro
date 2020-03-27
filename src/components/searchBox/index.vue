<template>
    <div class="searchBox">
        <i :class="['iconfont',leftIconStyle,'scan']" ref="iconsaoyisao" @click="callbackFuntion(leftIconStyle)"></i>
        <div class="inputBox">
            <i class="iconfont iconsearch magnifier"></i>
            <!-- <input type="text" class="searchInput" v-model="haveInputVale"  @input="tapToSearch" /> -->
            <form class="searchblock" action="javascript:void 0">
                <input type="text" class="searchInput" v-model="haveInputVale" @keyup.13="tapToSearch" :placeholder="placeholder">
            </form>
            <i class="iconfont iconchahao delete" v-if="haveInputVale" @click="deleteValue"></i>
        </div>
        <p class="searchText" v-if="isText" @click="callbackFuntion('text')">搜索</p>
        <i :class="['customer','iconfont',rightIconStyle]" v-else @click="callbackFuntion(rightIconStyle)"></i>
    </div>
</template>
<script>
export default {
    props:{
        leftIconStyle:{
            type:String,
            default:'iconsaoyisao'
        },
        isText:{
            type:Boolean,
            default:true
        },
        rightIconStyle:{
            type:String,
            default:'iconduihua'
        },
        placeholder:{
            type:String,
            default:null
        }
    },
    data(){
        return{
            haveInputVale:'',
        }
    },
    mounted(){
    },
    methods:{
        deleteValue(){
            this.haveInputVale = '';
        },
        tapToSearch(){
            this.$emit('search',this.haveInputVale)
        },
        callbackFuntion(type){
            this.$emit('callbackFuntion',type)
        }
    }
}
</script>
<style lang="scss" scoped>
.searchBox{
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    margin-bottom: 45px;
    margin-top: 35px;
    .scan{
        font-size: 80px;
    }
    .inputBox{
        width: 80%;
        height: 100%;
        position: relative;
        i{
            font-size: 60px;
            top: 30px;
        }
        .searchblock{
            height: 100%;
            width: 100%;
        }
        input{
            width: 100%;
            height: 100%;
            padding: 13px 120px;
            background: rgb(209, 206, 206);
            border-radius: 20px;
        }
        .magnifier{
            position: absolute;
            left: 30px;
        }
        .delete{
            position: absolute;
            right: 30px;
        }
    }
    .customer{
        font-size: 80px;
    }
    .searchText{
        font-size: 45px;
    }
}
</style>