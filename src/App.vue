<template>
  <div id="root">
    <NavBar></NavBar>
    <router-view/>
  </div>
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

<style scoped lang="scss">
#app {

}

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
