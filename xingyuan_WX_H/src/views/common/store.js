import Vue from 'vue'
import axios from 'config/http'

const state = {
  isIndex:true,
  shop:[],
  session:(process.env.NODE_ENV == 'development' ? 'oAnmJxNOk4geid2KrRdZA3ZsUUWc' : ''),
  system:(/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) ? 'IOS' : 'Android')
}

const actions = {
  /**
  * 获得配肥站列表
  * 如果有数据则中断
  */
  getShop:({ state,commit }) => {
    if(state.shop.length != 0){
      commit('SHOPLIST',state.shop)
      return
    }else{
      return new Promise((resolve, reject)=> {
        axios({
          method:'get',
          url: 'noa/shop'
        })
        .then((response) => {
          commit('SHOPLIST',response.data.data)
          resolve(response)
        })
      })
    }
  },
  setSession:({ commit },data) => {
    commit('SESSION',data.amount)
  },
  clearSession:({ commit }) => {
    commit('CLEARSESSION')
  }
}

const getters = {
  Path:(state,getters,rootState) => {
    return rootState.route.path
  },
  Query:(state,getters,rootState) => {
    return rootState.route.query
  },
  Params:(state,getters,rootState) => {
    return rootState.route.params
  },
  Shop:(state,getters,rootState) => {
    return state.shop
  },
  System:(state,getters,rootState) => {
    return rootState.common.system
  }
}

const mutations = {
  'SHOPLIST'(state, data) {
    state.shop = data
  },
  'SESSION'(state, data) {
    state.session = data
  },
  'CLEARSESSION'(state, data) {
     localStorage.removeItem('token')
     state.token = null
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
