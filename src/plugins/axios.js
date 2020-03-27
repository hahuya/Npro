require("es6-promise").polyfill();
import axios from 'axios';
import Common from '@/plugins/common';
import {
    Loading,
    Message
} from 'element-ui';
// import router from '@/router/index.js'; //用于页面跳转
import store from '@/store'; //用于改变vuex状态
// import {
//     baseUrl,
//     testBasePortObj,
//     appIds
// } from '../config';
import router from "@/router"
import qs from "qs"


const instance = axios.create({
    baseURL: '',
    timeout: 10000,
    headers: {
        // 'Content-Type': "application/json",
    },
});

// 响应拦截
instance.interceptors.response.use(
    response => {
        if (response.data.errorCode == -4) {
            store.dispatch('CLEAR_LOGIN_INFO', () => {
                sessionStorage.setItem("SOURCE_PATH", window.location.pathname);
                Message({
                    message: '登陆信息失效，请重新登陆',
                    type: 'error'
                })

                router.push("/user/login")
            })
        }
        // 登陆过期拦截
        return response;
    },
    error => {
        return Promise.reject(error);


        // 登陆过期或其他可以预见的错误提示
    }
);

// 请求拦截
instance.interceptors.request.use(
    config => {
        // 发起http请求时，显示loading动画
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

class Http {
    constructor() {
        this.instance = instance
    }

    axios(method, url, params = {}) {
        // 设置token再请求头内
        this.instance.defaults.headers['ACCESS-TOKEN'] = 1;
        this.instance.defaults.headers['APP-ID'] = 1
        this.instance.defaults.headers['UID'] = 1
        // 添加端口好
        // url = this.getUrl(url)
        // 设置忽略大小写
        method = method.toLowerCase();
        if (method == 'get') {
            // get请求进行拼接url
            url = this.toQueryString(url, params);
        } else if ((method == 'post')) {
            //post请求转换表单类型  用xhr可以正常用，但是用axios就不行
            // params = this.toQueryString1 (params); 您怎么能让我们弄呢
        }
        // 发送请求
        let promise = new Promise((resolve, reject) => {
            this.instance[method](url, params).then(function (response) {
                let res = JSON.parse(response.request.response || response.request.responseText || "{}")
                if (res.errorCode !== 0 && res.errorCode !== 1 && Common.showMessage(url) && res.errorCode !== -4 && res.code !== 200) {
                    console.log('+++++++++++++')
                    // Message({
                    //     type: 'error',
                    //     message: res.msg || res.message
                    // })
                    // 提示
                }
                res.success = res.errorCode == 0 || res.code === 200
                resolve(res);
            })
                .catch(function (error) {
                    reject(error)
                    let { status, request, data } = error.response
                    if (status === 404 && request.responseURL.indexOf('/api/v1/mema/user/') > -1) {
                        Message({
                            type: 'error',
                            message: '请使用商家账号登录'
                        })
                    }
                    res.success = res.code == 200
                    resolve(res);
                })
                .catch(function (e) {
                    reject(e)
                    // 有时候点击退出接口报错没有找到
                    if (url.indexOf('/accounts/token') > -1 && method == "delete") {

                    } else if (url.indexOf('/accounts/token') > -1 && method == "delete") {
                        store.dispatch('CLEAR_LOGIN_INFO', () => {
                            sessionStorage.setItem("SOURCE_PATH", window.location.pathname);
                            Message({
                                type: "success",
                                message: '退出成功'
                            })
                        })
                    } else {
                        Message({
                            type: "error",
                            message: '网络故障，请稍后再试'
                        })
                    }
                    reject('网络故障，请稍后再试');

                });
            // 超时处理
            setTimeout(() => {

                reject('系统繁忙，请稍后再试');
            }, 20000);
        });
        return promise;
    }

    formDataCommit(method, url, params) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest(); // XMLHttpRequest 对象
            xhr.open(method, this.getUrl(url), true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
            xhr.setRequestHeader("ACCESS-TOKEN", Common.getCookie('accessToken'))
            xhr.setRequestHeader("APP-ID", this.getAppid(url))
            xhr.setRequestHeader("UID", (Common.getCookie('userId') || '').slice(0, -1))

            xhr.send(params); //开始上传，发送form数据
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        //实际操作
                        let res = JSON.parse(xhr.response)
                        if (res.code != 200) {
                            Message({
                                type: "error",
                                message: res.msg
                            })
                        }
                        res.success = res.code == 200;
                        if (res.errorCode == -4) {
                            store.dispatch('CLEAR_LOGIN_INFO', () => {
                                sessionStorage.setItem("SOURCE_PATH", window.location.pathname);
                                Message({
                                    message: '登陆信息失效，请重新登陆',
                                    type: 'error'
                                })
                                router.push("/user/login")
                            })
                        }
                        resolve(res);
                    } else {
                        Message({
                            type: "error",
                            message: '网络故障，请稍后再试'
                        })
                        console.error('请求出错了');
                        reject('网络故障，请稍后再试');
                    }
                }
            }
        })


    }

    // 将键值对转为URL参数
    toQueryPair(key, value) {
        ///<summary>将键值对转为URL参数</summary>
        if (typeof value == 'undefined') {
            return key;
        }
        return (
            key + '=' + encodeURIComponent(value === null ? '' : String(value))
        );
        //return key + '=' + (value == null ? '' : String(value));
    }

    //get转换参数
    toQueryString(url, params) {
        if (JSON.stringify(params) == '{}') {
            return url;
        } else if (typeof (params) == "string" || typeof (params) == "number") {
            let _url = url + '/' + params;
            return _url;
        } else {
            let _url = url + '?';
            for (var k in params) {
                _url += `${k}=${params[k]}&`;
            }
            return _url.slice(0, -1);
        }
    }

    // 获取模块appid
    getAppid(url) {
        // let appObj = appIds

        // let str = url.slice(8)
        // let appkey = str.slice(0, str.indexOf("/"))
        // return appObj[appkey] || ""
    }

    // 统一处理本地代理
    getUrl(url) {
        // return `${baseUrl}${testBasePortObj[this.getAppid(url)]}${url}`
        // 判断为本地
        // if (process.env.NODE_ENV == "development") {
        //   let str = url.slice(8)
        //   let proxy = str.slice(0, str.indexOf("/"))
        //   return `/${proxy}${url}`
        // } else {}

        // }
    }
}

export default new Http();
