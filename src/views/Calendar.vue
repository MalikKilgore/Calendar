<template>
  <div class="calendar-root">
    <EventForm @show-form="hideDisplay" v-if="styleObject.display"></EventForm>
    <div class="calendarNav">
      <img src="../assets/arrow-right-duotone.svg" id="back" v-on:click="backMonth"/>
      <img src="../assets/arrow-right-duotone.svg" id="forward" v-on:click="fwdMonth"/>
      <button id="create" v-on:click="hideDisplay">Create +</button>
      <h2>{{currentMonth}}, {{currentYear}}</h2>
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
import EventForm from '../components/EventForm'
import NavBar from '../components/NavBar'
import datefns, {eachDayOfInterval, format} from 'date-fns'

export default {
  name: 'Calendar',
  data() {
    return {
      styleObject: {
        display: false,
      },
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
      //date-fns months go from Jan-Dec, using 0-11.
      dateObj: {
        prevMonth: 9,
        prevMax: 31,
        thisMonth: 10,
        thisMax: 30,
        nexMonth: 11,
        nexMax: 31,
      },
    }
  },
  components: {
    EventForm,
    NavBar
  },
  methods: {
    //Generates the calendar days as CSS grid squares.
    createGrid(){
      const gridContainer = document.getElementById('calendarBody')
        for (let i = 0; i < 35; i++){
          let gridSquare = document.createElement('div');
          gridSquare.className = 'grid-square';
          gridSquare.style.border = '0.01rem solid black'
          gridSquare.style.color = 'black'
          gridContainer.appendChild(gridSquare)
        }
    },
    //From date-fns. Returns array of days between set time period.
    timeInterval(){
      let grid = document.querySelectorAll('.grid-square')
      if (this.currentMonth == 'December'){
        let result = eachDayOfInterval({
          start: new Date(this.currentYear, this.dateObj.prevMonth, this.dateObj.prevMax - 1),
          end: new Date(this.currentYear + 1, this.dateObj.nexMonth, this.dateObj.nexMax)
        })
        for (let i = 0; i < 35 ; i++){
          grid[i].innerText = format(result[i], "MMMM do ',' yyyy")
        }
      } else if (this.currentMonth == 'January') {
        let result = eachDayOfInterval({
          start: new Date(this.currentYear - 1, this.dateObj.prevMonth, this.dateObj.prevMax - 1),
          end: new Date(this.currentYear, this.dateObj.nexMonth, this.dateObj.nexMax)
        })
        for (let i = 0; i < 35 ; i++){
          grid[i].innerText = format(result[i], "MMMM do ',' yyyy")
        }
      } else {
        let result = eachDayOfInterval({
          start: new Date(this.currentYear, this.dateObj.prevMonth, this.dateObj.prevMax - 1),
          end: new Date(this.currentYear, this.dateObj.nexMonth, this.dateObj.nexMax)
        })
        for (let i = 0; i < 35 ; i++){
          grid[i].innerText = format(result[i], "MMMM do ',' yyyy")
        }
      }
    },
    //Moves currentMonth forward once.
    fwdMonth(){
      switch(this.currentMonth){
        case 'January':
          this.previousMonth = 'January'
          this.dateObj.prevMonth = 0
          this.dateObj.prevMax = this.monthMax.January
          this.currentMonth = 'February'
          this.nextMonth = 'March'
          this.dateObj.nexMonth = 2
          this.dateObj.nexMax = this.monthMax.March
          this.timeInterval()
          break
        case 'February':
          this.previousMonth = 'February'
          this.dateObj.prevMonth = 1
          this.dateObj.prevMax = this.monthMax.February
          this.currentMonth = 'March'
          this.nextMonth = 'April'
          this.dateObj.nexMonth = 3
          this.dateObj.nexMax = this.monthMax.April
          this.timeInterval()
          break
        case 'March':
          this.previousMonth = 'March'
          this.dateObj.prevMonth = 2
          this.dateObj.prevMax = this.monthMax.March
          this.currentMonth = 'April'
          this.nextMonth = 'May'
          this.dateObj.nexMonth = 4
          this.dateObj.nexMax = this.monthMax.May
          this.timeInterval()
          break
        case 'April':
          this.previousMonth = 'April'
          this.dateObj.prevMonth = 3
          this.dateObj.prevMax = this.monthMax.April
          this.currentMonth = 'May'
          this.nextMonth = 'June'
          this.dateObj.nexMonth = 5
          this.dateObj.nexMax = this.monthMax.June
          this.timeInterval()
          break
        case 'May':
          this.previousMonth = 'May'
          this.dateObj.prevMonth = 4
          this.dateObj.prevMax = this.monthMax.May
          this.currentMonth = 'June'
          this.nextMonth = 'July'
          this.dateObj.nexMonth = 6
          this.dateObj.nexMax = this.monthMax.July
          this.timeInterval()
          break
        case 'June':
          this.previousMonth = 'June'
          this.dateObj.prevMonth = 5
          this.dateObj.prevMax = this.monthMax.June
          this.currentMonth = 'July'
          this.nextMonth = 'August'
          this.dateObj.nexMonth = 7
          this.dateObj.nexMax = this.monthMax.August
          this.timeInterval()
          break
        case 'July':
          this.previousMonth = 'July'
          this.dateObj.prevMonth = 6
          this.dateObj.prevMax = this.monthMax.July
          this.currentMonth = 'August'
          this.nextMonth = 'September'
          this.dateObj.nexMonth = 8
          this.dateObj.nexMax = this.monthMax.September
          this.timeInterval()
          break
        case 'August':
          this.previousMonth = 'August'
          this.dateObj.prevMonth = 7
          this.dateObj.prevMax = this.monthMax.August
          this.currentMonth = 'September'
          this.nextMonth = 'October'
          this.dateObj.nexMonth = 9
          this.dateObj.nexMax = this.monthMax.October
          break
        case 'September':
          this.previousMonth = 'September'
          this.dateObj.prevMonth = 8
          this.dateObj.prevMax = this.monthMax.September
          this.currentMonth = 'October'
          this.nextMonth = 'November'
          this.dateObj.nexMonth = 10
          this.dateObj.nexMax = this.monthMax.November
          this.timeInterval()
          break
        case 'October':
          this.previousMonth = 'October'
          this.dateObj.prevMonth = 9
          this.dateObj.prevMax = this.monthMax.October
          this.currentMonth = 'November'
          this.nextMonth = 'December'
          this.dateObj.nexMonth = 11
          this.dateObj.nexMax = this.monthMax.December
          this.timeInterval()
          break
        case 'November':
          this.previousMonth = 'November'
          this.dateObj.prevMonth = 10
          this.dateObj.prevMax = this.monthMax.November
          this.currentMonth = 'December'
          this.nextMonth = 'January'
          this.dateObj.nexMonth = 0
          this.dateObj.nexMax = this.monthMax.January
          this.timeInterval()
          break
        case 'December':
          this.previousMonth = 'December'
          this.dateObj.prevMonth = 11
          this.dateObj.prevMax = this.monthMax.December
          this.currentMonth = 'January'
          this.nextMonth = 'February'
          this.dateObj.nexMonth = 1
          this.dateObj.nexMax = this.monthMax.February
          this.currentYear = this.currentYear + 1
          this.timeInterval()
          break
      }
    },
    //Moves currentMonth backward once
    backMonth(){
      switch(this.currentMonth){
        case 'January':
          this.previousMonth = 'November'
          this.dateObj.prevMonth = 10
          this.dateObj.prevMax = this.monthMax.November
          this.currentMonth = 'December'
          this.nextMonth = 'January'
          this.dateObj.nexMonth = 0
          this.dateObj.nexMax = this.monthMax.January
          this.currentYear = this.currentYear - 1
          this.timeInterval()
          break
        case 'February':
          this.previousMonth = 'December'
          this.dateObj.prevMonth = 11
          this.dateObj.prevMax = this.monthMax.December
          this.currentMonth = 'January'
          this.nextMonth = 'February'
          this.dateObj.nexMonth = 1
          this.dateObj.nexMax = this.monthMax.February
          this.timeInterval()
          break
        case 'March':
          this.previousMonth = 'January'
          this.dateObj.prevMonth = 0
          this.dateObj.prevMax = this.monthMax.January
          this.currentMonth = 'February'
          this.nextMonth = 'March'
          this.dateObj.nexMonth = 2
          this.dateObj.nexMax = this.monthMax.March
          this.timeInterval()
          break
        case 'April':
          this.previousMonth = 'February'
          this.dateObj.prevMonth = 1
          this.dateObj.prevMax = this.monthMax.February
          this.currentMonth = 'March'
          this.nextMonth = 'April'
          this.dateObj.nexMonth = 3
          this.dateObj.nexMax = this.monthMax.April
          this.timeInterval()
          break
        case 'May':
          this.previousMonth = 'March'
          this.dateObj.prevMonth = 2
          this.dateObj.prevMax = this.monthMax.March
          this.currentMonth = 'April'
          this.nextMonth = 'May'
          this.dateObj.nexMonth = 4
          this.dateObj.nexMax = this.monthMax.May
          this.timeInterval()
          break
        case 'June':
          this.previousMonth = 'April'
          this.dateObj.prevMonth = 3
          this.dateObj.prevMax = this.monthMax.April
          this.currentMonth = 'May'
          this.nextMonth = 'June'
          this.dateObj.nexMonth = 5
          this.dateObj.nexMax = this.monthMax.June
          this.timeInterval()
          break
        case 'July':
          this.previousMonth = 'May'
          this.dateObj.prevMonth = 4
          this.dateObj.prevMax = this.monthMax.May
          this.currentMonth = 'June'
          this.nextMonth = 'July'
          this.dateObj.nexMonth = 6
          this.dateObj.nexMax = this.monthMax.July
          this.timeInterval()
          break
        case 'August':
          this.previousMonth = 'June'
          this.dateObj.prevMonth = 5
          this.dateObj.prevMax = this.monthMax.June
          this.currentMonth = 'July'
          this.nextMonth = 'August'
          this.dateObj.nexMonth = 7
          this.dateObj.nexMax = this.monthMax.August
          this.timeInterval()
          break
        case 'September':
          this.previousMonth = 'July'
          this.dateObj.prevMonth = 6
          this.dateObj.prevMax = this.monthMax.July
          this.currentMonth = 'August'
          this.nextMonth = 'September'
          this.dateObj.nexMonth = 8
          this.dateObj.nexMax = this.monthMax.September
          this.timeInterval()
          break
        case 'October':
          this.previousMonth = 'August'
          this.dateObj.prevMonth = 7
          this.dateObj.prevMax = this.monthMax.August
          this.currentMonth = 'September'
          this.nextMonth = 'October'
          this.dateObj.nexMonth = 9
          this.dateObj.nexMax = this.monthMax.October
          this.timeInterval()
          break
        case 'November':
          this.previousMonth = 'September'
          this.dateObj.prevMonth = 8
          this.dateObj.prevMax = this.monthMax.September
          this.currentMonth = 'October'
          this.nextMonth = 'November'
          this.dateObj.nexMonth = 10
          this.dateObj.nexMax = this.monthMax.November
          this.timeInterval()
          break
        case 'December':
          this.previousMonth = 'October'
          this.dateObj.prevMonth = 9
          this.dateObj.prevMax = this.monthMax.October
          this.currentMonth = 'November'
          this.nextMonth = 'December'
          this.dateObj.nexMonth = 11
          this.dateObj.nexMax = this.monthMax.December
          this.timeInterval()
          break
      }
    },
    hideDisplay(){
      console.log('EMIT RECEIVED')
      switch(this.styleObject.display){
        case false:
          this.styleObject.display = true
          break
        case true:
          this.styleObject.display = false
          break
      }
    }
  },

  mounted(){
    this.createGrid()
    this.timeInterval()
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

    img {
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 50%;
      fill: grey;
      background-color: #e0e0e0;
      box-shadow: 0px 0px 10px grey;
      padding: 3px;
      cursor: pointer;
      margin-top: 1rem;
      
      &#back {
        transform: rotatez(-180deg);
        margin-right: 1.3rem;
      }

      &:hover {
        background-color: #b8b8b8;
      }
    }

    h2 {
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }
}

button {
  padding: 5px 15px;
  margin-top: 1rem;
  background: #ffffff;
  color: #2c3e50;
  border: 0;
  border-radius: 5px;
  font-size: 25px;
  margin-left: 2rem;

  &:hover {
    background: #bebebe;
  }
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