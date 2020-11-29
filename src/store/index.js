import { createStore } from 'vuex'
import router from '../router/index'
import { usersCollection, auth } from '../firebase/firebase.js'

export default createStore({
  state: {
    //Stores user profile
    userProfile: {},
    //Stores current route associated with the page you're viewing
    currentRoute: {},
    //Stores current database associated with the page you're viewing
    currentDatabase: {},
    //Stores current signed in user reference
    currentUser: {},
    //Event emit response
    showForm: false,
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    },
    setCurrentRoute(state, val) {
      state.currentRoute = val
    },
    setCurrentDatabase(state, val) {
      state.currentDatabase = val
    },
    setCurrentUser(state, val) {
      state.currentUser = val
    },
    setShowForm(state, val) {
      state.showForm = val
      console.log(`NEW VALUE IS ${state.showForm}`)
    },
  },
  actions: {
    async login({ dispatch }, form) {
      // Signs the user in
      const { user } = await auth.signInWithEmailAndPassword(form.email, form.password)
  
      // Fetches the current user profile and updates it in state
      dispatch('fetchUserProfile', user).then(alert(`Sign-in successful for ${form.email}`))
    },

    async fetchUserProfile({ commit }, user) {
      // Fetches the current user profile
      const userProfile = await usersCollection.doc(user.uid).get()
  
      // Sets user profile in state
      commit('setUserProfile', userProfile.data())

      //Sets active user in state
      commit('setCurrentUser', user)
      
      // Reroutes to dashboard/home
      router.push('/')
    },

    async createUser({ dispatch }, form) {
      // Registers user account in Firebase
      const { user } = await auth.createUserWithEmailAndPassword(form.email, form.password)
    
      // Creates user profile in usersCollections database/firestore
      await usersCollection.doc(user.uid).set({
        name: form.name,
        email: form.email,
        password: form.password,
        edit: false,
        uid: user.uid
      })

      //Creates calendar collection for user profile upon account creation.
      await usersCollection.doc(user.uid).collection('calendar').doc('default event').set({
        startDate: 'empty',
        endDate: 'empty',
        createdBy: user.uid,
        createdOn: new Date(),
        startTime: 'empty',
        endTime: 'empty',
        title: 'default title',
        description: 'This is a filler test event.',
      })

      // Fetches the current user profile and updates it in state
      dispatch('fetchUserProfile', user).then(alert(`Account created for ${form.email}`))
    },

    async logout({ commit }) {
      await auth.signOut().then(alert(`You've successfully signed out`))
    
      // Clears userProfile and redirect to login page
      commit('setUserProfile', {})
      router.push('/join/login')
    },

    //Adds event document to user's calendar collection in Firestore.
    async createEvent({dispatch}, form){
      const user = this.state.currentUser
      const calendar = await usersCollection.doc(user.uid).collection('calendar')

      calendar.doc().set({
        startDate: form.startDate,
        endDate: form.endDate,
        createdBy: user.uid,
        createdOn: new Date(),
        startTime: form.startTime,
        endTime: form.endTime,
        title: form.title,
        description: form.description,
      }).then(dispatch('hideForm'))
    },
    async showForm({commit}){
      commit('setShowForm', true)
    },
    async hideForm({commit}){
      commit('setShowForm', false)
    }
  },
  modules: {
  }
})
