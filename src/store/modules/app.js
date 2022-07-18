const state = {
  record: [],
}
const mutations = {
  AddRecord(state, data){
    state.record.push(data)
  },
  DeleteRecord(state){
    state.record = []
  }
}
const actions = {

}

export default {
  state,
  mutations,
  actions
};