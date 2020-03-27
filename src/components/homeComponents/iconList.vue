<template>
    <div class="iconContainer between_center">
        <div class="iconList column_between_center" v-for="(item,index) in iconListMassege" :key="index">
            <img :src="item.url" alt="" @click="goto(item.path)">
            <p>{{item.name}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            iconListMassege:[
                {
                    "path":"/",
                    "url":"https://gw.alicdn.com/tfs/TB16ZYDk4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1",
                    "name":"抢单中心"
                },{
                    "path":"/own",
                    "url":"https://gw.alicdn.com/tfs/TB1llI3f4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1",
                    "name":"充值提现"
                },{
                    "path":"/",
                    "url":"https://gw.alicdn.com/tfs/TB1tOGokubviK0jSZFNXXaApXXa-183-144.png?getAvatar=1",
                    "name":"活动中心"
                },{
                    "path":"/own",
                    "url":"https://gw.alicdn.com/tfs/TB1LvIxVAvoK1RjSZFDXXXY3pXa-183-144.png?getAvatar=1",
                    "name":"邀请好友"
                },
            ],
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
  .iconContainer{
      width: 100%;
      .iconList{
          width: 23%;
          img{
              width: 80%;
          }
          p{
              font-size: 50px;
              margin-top: 20px;
          }
      }
  }
</style>