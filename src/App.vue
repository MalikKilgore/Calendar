<template>
  <div id="root">
    <NavBar></NavBar>
    <EventForm v-show="display"></EventForm>
    <router-view/>
  </div>
</template>
<script>
import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import NavBar from './components/NavBar'
import EventForm from './components/EventForm'

export default {
  name: 'App',
  data() {
    return {
      display: store.state.showForm,
      unsubscribe: null,
    }
  },
  components: {
    NavBar,
    EventForm,
  },
  computed: {
    display(){
      return store.state.showForm
    }
  },
}
</script>

<style scoped lang="scss">
#root {
  padding: 0;
  margin: 0;

	a {
    font-weight: bold;
	  color: #2c3e50;
	  font-size: 24px;
	  text-decoration: none;
    	&.router-link-exact-active {
      		color: #e8edff;
		  }
    	&:hover {
      		color: #c9ccf0;
    	}	
  }
}
</style>
