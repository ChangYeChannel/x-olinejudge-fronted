// 全局用户状态管理
import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  // state：用户信息
  state: () => ({
    loginUser: {
      userName: "未登录",
      role: "notLogin",
    },
  }),
  // 执行异步操作，调用mutation进行全局状态的修改
  actions: {
    getLoginUser({ commit, state }, payload) {
      // todo 修改为从后端程序获取当前登录用户信息
      commit("updateUser", { userName: "Asychrous" });
    },
  },
  // 更新当前全局状态变量的方法
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
