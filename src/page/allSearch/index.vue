<template>
    <div class="allSearchContainer">
        <searchBox @search = 'getSearchValue' :leftIconStyle='"iconzuojiantou"' :isText='false' @callbackFuntion='navHeadle'/>
    </div>
</template>
<script>
import searchBox from '@/components/searchBox'
export default {
    components:{
        searchBox
    },
    data(){
        return {

        }
    },
    methods:{
        getSearchValue(){},
        navHeadle(type){
            if(type === 'iconzuojiantou'){
                this.$router.back(-1);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
</style>