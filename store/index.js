export const state = () => ({
  user: {},
  messages: [],
  users: []
})

export const mutations = {
  setUser(state, user) {
    state.user = user
    let curUser = JSON.stringify(user)
    localStorage.setItem('currentUser', curUser)
  },
  clearData(state) {
    state.user = {}
    state.messages = []
    state.users = []
  },
  SOCKET_newMessage(state, message) {
    state.messages.push(message)
  },
  SOCKET_updateUsers(state, users) {
    state.users = users
  }
}

export const action = {
  SOCKET_newMessage({ commit }, data) {
    commit("newMessage", data);
  }
};
