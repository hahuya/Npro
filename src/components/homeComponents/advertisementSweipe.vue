<template>
    <div class="advertisementContainer">
        <div class="advertisementTipe">
            <i class="iconfont iconlaba"></i>
            <p>{{advertisementMassege}}</p>
        </div>
        <div class="advertisementBox">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(item,index) in advertisementImg" :key="index">
                <div class="advertisementitem">
                    <img :src="item" alt @click=""/>
                </div>
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            advertisementMassege:"庆祝App上线啦！",
            advertisementImg:[
                'https://oss.can-hang.com/admin/other/1579255233798.jpg?1583587781960',
                'https://oss.can-hang.com/admin/other/1578372462784.png?1583589066906',
            ],
        }
    }
}
</script>
<style lang="scss" scoped>
.advertisementContainer{
//   height: 472px;
//   padding: 0 20px;
    .advertisementTipe{
        margin: 40px 0;
        padding: 0 30px;
        display: flex;
        justify-content: space-between;
        i{
            font-size: 70px;
        }
        p{
            font-size: 55px;
        }
    }
    .advertisementBox{
        width: 100%;
        position: relative;
        height: 472px;
        // padding: 0 20px;
        img {
            position: absolute;
            width: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 472px;
        }
    }
}
</style>