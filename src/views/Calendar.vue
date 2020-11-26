<template>
  <div class="calendar-root">
    <div class="calendarNav">
      <button v-on:click="backMonth">backward </button>
      <h2>{{currentMonth}}, {{currentYear}}</h2>
      <button v-on:click="fwdMonth">forward</button>

    </div>

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
      previousMonth: 'October',
      currentMonth: 'November',
      nextMonth: 'December',
      currentDay: '',
      currentYear: 2020,
      monthMax: {
        January: 31,
        February: 28,
        March: 31,
        April: 30,
        May: 31,
        June: 30,
        July: 31,
        August: 31,
        September: 30,
        October: 31,
        November: 30,
        December: 31
      },
      currentMax: 30,
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
            if (i == 0){
              gridSquare.innerText = this.previousMonth
            } else if (i > this.currentMax){
              gridSquare.innerText = this.nextMonth
            } else {
              gridSquare.innerText = i
            }
          
          gridContainer.appendChild(gridSquare)
        }
    },
    //Moves currentMonth forward once
    fwdMonth(){
      switch(this.currentMonth){
        case 'January':
          this.previousMonth = 'January'
          this.currentMonth = 'February'
          this.currentMax = this.monthMax.February
          this.nextMonth = 'March'
          break
        case 'February':
          this.previousMonth = 'February'
          this.currentMonth = 'March'
          this.currentMax = this.monthMax.March
          this.nextMonth = 'April'
          break
        case 'March':
          this.previousMonth = 'March'
          this.currentMonth = 'April'
          this.currentMax = this.monthMax.April
          this.nextMonth = 'May'
          break
        case 'April':
          this.previousMonth = 'April'
          this.currentMonth = 'May'
          this.currentMax = this.monthMax.May
          this.nextMonth = 'June'
          break
        case 'May':
          this.previousMonth = 'May'
          this.currentMonth = 'June'
          this.currentMax = this.monthMax.June
          this.nextMonth = 'July'
          break
        case 'June':
          this.previousMonth = 'June'
          this.currentMonth = 'July'
          this.currentMax = this.monthMax.July
          this.nextMonth = 'August'
          break
        case 'July':
          this.previousMonth = 'July'
          this.currentMonth = 'August'
          this.currentMax = this.monthMax.August
          this.nextMonth = 'September'
          break
        case 'August':
          this.previousMonth = 'August'
          this.currentMonth = 'September'
          this.currentMax = this.monthMax.September
          this.nextMonth = 'October'
          break
        case 'September':
          this.previousMonth = 'September'
          this.currentMonth = 'October'
          this.currentMax = this.monthMax.October
          this.nextMonth = 'November'
          break
        case 'October':
          this.previousMonth = 'October'
          this.currentMonth = 'November'
          this.currentMax = this.monthMax.November
          this.nextMonth = 'December'
          break
        case 'November':
          this.previousMonth = 'November'
          this.currentMonth = 'December'
          this.currentMax = this.monthMax.December
          this.nextMonth = 'January'
          break
        case 'December':
          this.previousMonth = 'December'
          this.currentMonth = 'January'
          this.currentMax = this.monthMax.January
          this.nextMonth = 'February'
          this.currentYear = this.currentYear + 1
          break
      }
    },
    backMonth(){
      switch(this.currentMonth){
        case 'January':
          this.currentMonth = 'December'
          this.currentYear = this.currentYear - 1
          break
        case 'February':
          this.currentMonth = 'January'
          break
        case 'March':
          this.currentMonth = 'February'
          break
        case 'April':
          this.currentMonth = 'March'
          break
        case 'May':
          this.currentMonth = 'April'
          break
        case 'June':
          this.currentMonth = 'May'
          break
        case 'July':
          this.currentMonth = 'June'
          break
        case 'August':
          this.currentMonth = 'July'
          break
        case 'September':
          this.currentMonth = 'August'
          break
        case 'October':
          this.currentMonth = 'September'
          break
        case 'November':
          this.currentMonth = 'October'
          break
        case 'December':
          this.currentMonth = 'November'
          break
      }
    }
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
  margin: 0;
  position: absolute;
  right: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.13fr 1.2fr;
  grid-template-areas:
  "calendarNav"
  "calendarBody";
  grid-area: calendar-root;
  height: 97vh;
  width: 93vw;
}

.calendarNav {
  font-weight: 500;
  font-size: 2rem;
  grid-area: calendarNav;
  color: rgb(238, 235, 235);
  background-color:  #3a3c3f;
}

#calendarBody {
  display: grid;
  grid-area: calendarBody;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-auto-flow: row;
  background-color: white;
  color: white;
  border: black solid;
}

.grid-square {
  color: black;
  background-color: white;
}

</style>