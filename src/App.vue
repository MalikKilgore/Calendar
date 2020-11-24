<template>
  <div id="nav">
    <router-link to="/">Calendar</router-link> |
    <router-link to="/join/login">Join</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
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
