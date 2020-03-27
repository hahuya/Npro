import Http from '@/plugins/axios'

/**
 * 获取首页数据
 * @param {*} params 
 */
export const getWellSellList = (params) => Http.axios('get', '/api/wellSell', params); 

export const getBannerSwiperList = (params) => Http.axios('get', '/api/bannerSwiper',params)