import { createStore, Store } from 'vuex'

export default createStore({
  state: {
    Dark:false,
    data:[],
    btnoffcanvas:false,
    offcanvasObj:{}
  },
  getters: {
  },
  mutations: {
    setDark(state,payload){
      state.Dark=payload
    },
    setData(state,payload){
      state.data=payload
    },
    setOffcanvasstate(state,payload){
      state.btnoffcanvas=payload
    },
    setOffcanvasobj(state,payload){
      state.offcanvasObj=payload
    }
  },
  actions: {
    changeDark({commit, state}){
      let data = !state.Dark
      commit("setDark",data)

    },
    async fetchData({commit}){
     
      const res = await fetch("proyects.json")
      const data = await res.json()
      commit("setData",data)

    },
    changeSateteOffcanvas({commit, state}){
      let data = !state.btnoffcanvas
      commit("setOffcanvasstate",data)
    },
    updateOffCanvasObj({commit},obj){
      commit("setOffcanvasobj",obj)
    }

  },
  modules: {
  }
})
