<template>
  <div id="root">
    <NavBar></NavBar>
  </div>
  
  <router-view/>
</template>
<script>
import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#root {
  padding: 30px;

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
