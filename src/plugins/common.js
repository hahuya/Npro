import Vue from 'vue'

import BottomMenu from '@/components/bottomMenu'
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe'
require ('swiper/css/swiper.css');
import { Loading, Message } from 'element-ui';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import zjLoadMore from '@/components/JZLoadMore'
Vue.component('zj-load-more', zjLoadMore);

Vue.component('bottom-menu', BottomMenu);
Vue.component('mt-swipe', Swipe);
Vue.component('mt-swipe-item', SwipeItem);

class Common {
    // 获取cookie
    getCookie(name, req) {
        let arr; let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        try {

            if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
            else return null;
        } catch (error) {
            try {
                //
                // 服务端获取cookie
                if ((arr = req.headers.cookie.match(reg))) return unescape(arr[2]);
            } catch (error) {
                //
            }
            // as
        }

    }

    // 设置cookie
    setCookie(name, value, expires = 10000) {
        try {
            if (expires !== 0) { // 当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
                var date = new Date(+new Date() + expires);
                document.cookie = name + '=' + escape(value) + ';expires=' + date.toUTCString() + `;path=/${window.location.href.indexOf('can-hang.com') !== -1 ? ';domain=.can-hang.com' : ''}`
            } else {
                document.cookie = name + '=' + escape(value);
            }
        } catch (error) {
            // a
        }

    }

    // 清除cookie
    clearCookie(name) {
        // 清除cookie
        try {
            if (this.getCookie(name)) {
                document.cookie = name + '=;expires=' + (new Date(0)).toGMTString() + `;path=/${window.location.href.indexOf('can-hang.com') !== -1 ? ';domain=.can-hang.com' : ''}`;
            }
        } catch (error) {
            // a
        }
    }
    // 设置页面名称
    setPageTitle(title) {
        try {
            document.title = title;
        } catch (error) {
            // a
        }
    }
    // 获取cookie校验登陆状态
    checkLanding() {

        let accessToken = this.getCookie('accessToken')
        if (accessToken) {
            return true
        } else {
            return false
        }
    }

    showMessage(url) {
        let noShowApi = ['search/keyword', 'requirements/reservation/latest', '/users/customer/personal/show']
        let is = true
        for (let i = 0; i < noShowApi.length; i++) {
            if (url.indexOf(noShowApi[i]) > -1) {
                is = false
                break
            }
        }
        return is
    }
    // 手机号正则
    regularTelphone() {
        return /^1[3456789]\d{9}$/
    }

    // 打开新页面
    openPage(url) {
        window.open(url)
    }

    // 获取用户id
    getUserId(_id) {
        let id = ((_id || '') + '').slice(0, -1)
        return id
    }


    // 筛选回到顶部
    backtoTheTop() {

        if (document.body.scrollTop) {
            document.body.scrollTop = 0;
        } else {
            document.documentElement.scrollTop = 0;
        }

        // 下拉加载组件初始化
        window.loadMoreSetState({ noMoreData: false });
    }

    /**
         * 统一设置分享菜单
         * shareData: {
         *      title: '', // 分享标题
                url: '', // 分享链接
                icon: '', // 分享图标
                content: '', // 分享表述
         * }
         *
         */
    setShareMenu(shareData) {
        let userType = 'weixin'
        console.log('分享数据:', shareData)

        if (userType == 'weixin') {
            // 微信渠道设置分享
            try {
                console.log(wx)
                wx.ready(() => {
                    // 隐藏所有非基本菜单项
                    wx.hideAllNonBaseMenuItem({
                        success: () => {

                            // 显示分享到朋友圈、朋友功能菜单
                            wx.showMenuItems({
                                menuList: ['menuItem:share:timeline', 'menuItem:share:appMessage', 'menuItem:favorite'] // 要显示的菜单项，所有menu项见附录3
                            });

                            // 分享到朋友圈配置
                            wx.onMenuShareTimeline({
                                title: shareData.title, // 分享标题
                                link: shareData.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                                imgUrl: shareData.icon, // 分享图标
                                success: () => {
                                    // 用户确认分享后执行的回调函数
                                },
                                cancel: () => {
                                    // 用户取消分享后执行的回调函数
                                }
                            });
                            // 分享给朋友配置
                            wx.onMenuShareAppMessage({
                                title: shareData.title, // 分享标题
                                desc: shareData.content, // 分享描述
                                link: shareData.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                                imgUrl: shareData.icon, // 分享图标
                                type: '', // 分享类型,music、video或link，不填默认为link
                                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                                success: () => {
                                    // 用户确认分享后执行的回调函数
                                },
                                cancel: () => {
                                    // 用户取消分享后执行的回调函数
                                }
                            });
                            // 分享给qq好友
                            wx.onMenuShareQQ({
                                title: shareData.title, // 分享标题
                                desc: shareData.content, // 分享描述
                                link: shareData.url, // 分享链接
                                imgUrl: shareData.icon, // 分享图标
                                success: function () {
                                    // 用户确认分享后执行的回调函数
                                },
                                cancel: function () {
                                    // 用户取消分享后执行的回调函数
                                }
                            });
                            // 分享到qq空间
                            wx.onMenuShareQZone({
                                title: shareData.title, // 分享标题
                                desc: shareData.content, // 分享描述
                                link: shareData.url, // 分享链接
                                imgUrl: shareData.icon, // 分享图标
                                success: function () {
                                    // 用户确认分享后执行的回调函数
                                },
                                cancel: function () {
                                    // 用户取消分享后执行的回调函数
                                }
                            });
                        }
                    });

                })
            } catch (e) {
                console.log('微信分享配置出错')
            }
        } else if (userType == 'qq') {
            // QQ渠道设置分享
        }
    }
    // 倒计时 "2020/8/8"
    countDown(setDate){
        let nowtime = new Date(),  //获取当前时间
            endtime = new Date(setDate);  //定义结束时间
        let lefttime = endtime.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
            leftd = Math.floor(lefttime / (1000 * 60 * 60 * 24)),  //计算天数
            lefth = Math.floor(lefttime / (1000 * 60 * 60) % 24),  //计算小时数
            leftm = Math.floor(lefttime / (1000 * 60) % 60),  //计算分钟数
            lefts = Math.floor(lefttime / 1000 % 60);  //计算秒数
        return [leftd, lefth, leftm, lefts];  //以数组形式返回
    }
}

export default new Common();