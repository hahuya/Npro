import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Financial = () => import('@/page/home')
const Grabsheet = () => import('@/page/home')
const Help = () => import('@/page/home')
const Own = () => import('@/page/own')
const GoodsDetail = () => import('@/page/goodsDetail')
const classify = () => import('@/page/classify')
const Search = () => import('@/page/search')
const AllSearch = () => import('@/page/allSearch')
const parsonalInformation = () => import('@/page/own/moduleComponents/personalInformation.vue')
const billBusiness = () => import('@/page/own/moduleComponents/billBusiness.vue')
const memberBusiness = () => import('@/page/own/moduleComponents/memberBusiness')
const balanceBusiness = () => import('@/page/own/moduleComponents/balanceBusiness')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Financial
  },
  {
    path: '/financial',
    name: 'Financial',
    component: Financial,
  },
  {
    path: '/grabsheet',
    name: 'Grabsheet',
    component: Grabsheet
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/own',
    name: 'Own',
    component: Own,
  },
  {
    path: '/goodsDetail/:id',
    name: 'GoodsDetail',
    component: GoodsDetail
  },
  {
    path: '/classify',
    name: 'classify',
    component: classify
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/own/parsonalInformation',
    name: 'parsonalInformations',
    component: parsonalInformation
  },
  {
    path: '/own/billBusiness',
    name: 'billBusiness',
    component: billBusiness
  },
  {
    path: '/own/memberBusiness',
    name: 'memberBusiness',
    component: memberBusiness
  },
  {
    path: '/own/balanceBusiness',
    name: 'balanceBusiness',
    component: balanceBusiness
  },
  {
    path: '/allSearch',
    name: 'allSearch',
    component: AllSearch
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
