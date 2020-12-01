<template> 
  <div class="eventForm">
    <form @submit.prevent>
      <div class="form-control">
        <label for="title">Title</label>
        <input
          id="title"
          v-model="title"
          type="text"
          name="title"
          placeholder="Title of the event"
          required
        >
        <label for="startDate">Start Date</label>
        <input
          id="startDate"
          v-model="startDate"
          type="text"
          name="startDate"
          placeholder="mm/dd/yyyy"
          required
        >
        <label for="endDate">End Date</label>
        <input
          id="endDate"
          v-model="endDate"
          type="text"
          name="endDate"
          placeholder="mm/dd/yyyy"
          required
        >
        <label for="startTime">Start Time</label>
        <input
          id="startTime"
          v-model="startTime"
          type="text"
          name="startTime"
          placeholder="--:-- --"
        >
        <label for="endTime">End Time</label>
        <input
          id="endTime"
          v-model="endTime"
          type="text"
          name="endTime"
          placeholder="--:-- --"
        >
        <label for="description">Description</label>
        <input
          id="description"
          v-model="description"
          type="text"
          name="description"
          placeholder="description of the event"
        >
        <button class="btn" v-on:click="createEvent">
          Create Event
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import router from "../router";
import store from '../store'
import Vuex from "vuex";
import { db, usersCollection } from "../firebase/firebase.js";

export default {
  name: 'EventForm',
  data() {
    return {
      display: store.state.showForm,
      title: '',
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      description: '',
    };
  },
  methods: {
    //Dispatches to VueX store, sets event in Firestore. HIDES form afterwards.
    createEvent(){
      this.$store.dispatch('createEvent', {
        title: this.title,
        startDate: this.startDate,
        endDate: this.endDate,
        startTime: this.startTime,
        endTime: this.endTime,
        description: this.description
      })
    }
  },

};
</script>

<style scoped lang="scss">
.eventForm{
  display: flex;
  align-items: flex-start;
  background-color: rgba(0,0,0,.64);
  height: 97vh;
  width: 93vw;
  justify-content: center;
  margin: auto;
  overflow-y: auto;
  position: fixed;
  z-index: 20;

    form {
      background-color: rgb(163, 163, 163);
      padding: 40px 50px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      vertical-align: center;
    }

}
/*
.eventHeader{
  text-align: center;
  padding: 20px;
  background: grey;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  z-index: 21;
} 
*/
label {
  color: #000000;
  font-weight: bold;
	text-align: center;
}
input {
  display: flex;
  font-size: 20px;
	padding: 5px;
	height: 40px;
  width: 100%;
	flex: 1;
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
</style>