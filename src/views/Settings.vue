<template>
  <div class="settings">
    <h1>This is where you might be able to change your settings, if necessary.</h1>
  </div>
</template>

<script>
import Vue from 'vue'
import router from '../router'
import store from '../store'
import Vuex from 'vuex'

export default {
  name: 'Settings',
  methods: {
    showForm(){
      this.$store.dispatch("showForm")
    },
    hideForm(){
      this.$store.dispatch("hideForm")
    },
  },
  mounted(){
    this.hideForm()
  },
}
</script>
