<template>
  <div class="calendar-root">
    <div class="calendarNav">Navigation</div>

    <div class="calendarBody" id="calendarBody">


    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import router from '../router'
import store from '../store'
import Vuex from 'vuex'
import firebase from 'firebase/app'

export default {
  name: 'Calendar',
  data() {
    return {

    }
  },
  components: {
  },
  methods: {
    createGrid(){
      const gridContainer = document.getElementById('calendarBody')

        for (let i = 0; i < 35; i++){
          let gridSquare = document.createElement('div');
          gridSquare.className = 'grid-square';
          gridSquare.style.border = '0.01rem solid black'
          gridSquare.style.color = 'black'
          gridSquare.innerText = i
          gridContainer.appendChild(gridSquare)
        }
    },
  },

  mounted(){
    console.log('CREATING GRID')
    this.createGrid()
  },
}
</script>

<style scoped lang="scss">
.calendar-root{
  padding: 0;
  margin: auto;
  right: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.13fr 1.2fr;
  grid-template-areas:
  "calendarNav"
  "calendarBody";
  grid-area: calendar-root;
  height: 100vh;
  width: 93vw;
}

.calendarNav {
  font-weight: 500;
  font-size: 1.8rem;
  grid-area: calendarNav;
  color: rgb(238, 235, 235);
  background-color:  #3a3c3f;
}

#calendarBody {
  display: grid;
  grid-area: calendarBody;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-auto-flow: column;
  background-color: white;
  color: white;
  border: black solid;
}

.grid-square {
  color: black;
  background-color: white;
}

</style>