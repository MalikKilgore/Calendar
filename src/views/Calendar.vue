<template>
  <div class="calendar-root">

  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import router from '../router'
import Vuex from 'vuex'
import NavBar from '../components/NavBar'

export default {
  name: 'Calendar',
  data() {
    return {
      route: {
        id: this.$route.params,
        path: this.$route.path,
      },
    }
  },
  components: {
    NavBar
  },
  methods: {

  }
}
</script>
