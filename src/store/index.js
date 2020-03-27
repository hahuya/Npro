import Vue from 'vue'
import Vuex from 'vuex'
import { getUserDetail } from '@/service/user'//获取用户信息
import Common from "@/plugins/common"

Vue.use(Vuex)

const state = {
  userInfo: {

  },
  isLogin: false,
  roleId: null,//用户身份
  uid:null
}

const getters = {
  userInfo: state => state.userInfo,
  isLogin: state => state.isLogin,
  roleId: state => state.roleId,
  uid: state => state.uid
}

const mutations = {

  // 设置用户信息
  SET_USER_INFO: (state, data) => {
    state.userInfo = data
  },

  // 登陆状态
  SET_LOGIN_STATUS: (state, data) => {
    state.isLogin = data
  },

  // 用户身份
  SET_ROLEID: (state, data) => {
    state.roleId = data
  },

  // 用户id
  SET_UID: (state, data) => {
    state.uid = data
  }
}

const actions = {
  // 获取用户信息 
  GET_USER_INFO: ({ commit, state }, { uid, roleId, callBack }) => {
    if (JSON.stringify(state.userInfo) != "{}") {
      callBack && callBack(state.userInfo)
    } else {
      getUserDetail(uid).then(res => {
        if (res.success) {
          commit('SET_USER_INFO', res.data)
          commit('SET_LOGIN_STATUS', true)
          commit('SET_ROLEID', roleId)
          commit('SET_UID', uid)
          callBack && callBack(res.data)

        } else {
          // accessToken失效清除
          // 标记用户状态
          commit("SET_LOGIN_STATUS", false)
          // 清除用户信息
          commit("SET_USER_INFO", {})

          Common.clearCookie("accessToken")
          Common.clearCookie("userId")
          Common.clearCookie("roleId")
          callBack && callBack(false)

        }
      }).catch(e => {
        // accessToken失效清除
        // 标记用户状态
        commit("SET_LOGIN_STATUS", false)
        // 清除用户信息
        commit("SET_USER_INFO", {})

        Common.clearCookie("accessToken")
        Common.clearCookie("userId")
        Common.clearCookie("roleId")
        callBack && callBack()
      })
    }
  },

  CLEAR_LOGIN_INFO: ({ commit, state }, callBack) => {

    // 标记用户状态
    commit("SET_LOGIN_STATUS", false)
    // 清除用户信息
    commit("SET_USER_INFO", {})

    Common.clearCookie("accessToken")
    Common.clearCookie("userId")
    Common.clearCookie("roleId")
    callBack && callBack()
  },

  RESET_USER_INFO: ({ commit, state }) => {
    getUserDetail(state.uid).then(res => {
      if (res.success) {
        commit('SET_USER_INFO', res.data)
      } else {
        // accessToken失效清除
        // 标记用户状态
        commit("SET_LOGIN_STATUS", false)
        // 清除用户信息
        commit("SET_USER_INFO", {})

        Common.clearCookie("accessToken")
        Common.clearCookie("userId")
        Common.clearCookie("roleId")
        callBack && callBack(false)

      }
    }).catch(e => {
      // accessToken失效清除
      // 标记用户状态
      commit("SET_LOGIN_STATUS", false)
      // 清除用户信息
      commit("SET_USER_INFO", {})

      Common.clearCookie("accessToken")
      Common.clearCookie("userId")
      Common.clearCookie("roleId")
      callBack && callBack()
    })
  }

}
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
