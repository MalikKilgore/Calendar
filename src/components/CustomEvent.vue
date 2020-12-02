<template >
  <div class="customEventForm" v-if="editActive">
    <form @submit.prevent>
      <label for="title">Title</label>
      <input
        id="title"
        v-model="title"
        type="text"
        name="title"
        placeholder="Title of the event"
        required
      />
    </form>
    <form @submit.prevent>
      <label for="startDate">Start Date</label>
      <input
        id="startDate"
        v-model="startDate"
        type="text"
        name="startDate"
        placeholder="mm/dd/yyyy"
        required
      />
    </form>
    <form @submit.prevent>
      <label for="endDate">End Date</label>
      <input
        id="endDate"
        v-model="endDate"
        type="text"
        name="endDate"
        placeholder="mm/dd/yyyy"
        required
      />
    </form>
    <form @submit.prevent>
      <label for="startTime">Start Time</label>
      <input
        id="startTime"
        v-model="startTime"
        type="text"
        name="startTime"
        placeholder="--:-- --"
      />
    </form>
    <form @submit.prevent>
      <label for="endTime">End Time</label>
      <input
        id="endTime"
        v-model="endTime"
        type="text"
        name="endTime"
        placeholder="--:-- --"
      />
    </form>
    <form @submit.prevent>
      <label for="description">Description</label>
      <input
        id="description"
        v-model="description"
        type="text"
        name="description"
        placeholder="description of the event"
      />
    </form>
    <button v-on:click="toggleDisplay"></button>
  </div>
    <div class="customEventDisplay" v-else>
        <div class="display">

        </div>
        <button v-on:click="toggleDisplay"></button>
    </div>
</template>
<script>
import Vue from "vue";
import router from "../router";
import store from "../store";
import Vuex from "vuex";
import { db, usersCollection } from "../firebase/firebase.js";

export default {
  name: "CustomEvent",
  data() {
    return {
      editActive: false,
      title: "",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      description: "",
    };
  },
  methods: {
      renderDisplay(){

      },
      renderForm(){

      },
    //Dispatches to VueX store, sets event in Firestore. HIDES form afterwards.
    //Still needs changed from original function
    editEvent() {
      this.$store.dispatch("editEvent", {
        title: this.title,
        startDate: this.startDate,
        endDate: this.endDate,
        startTime: this.startTime,
        endTime: this.endTime,
        description: this.description,
      });
    },
    toggleDisplay(){
      switch(this.editActive){
        case false:
          return this.editActive = true
          break
        case true: 
          return this.editActive = false
          break
      }
    }
  },
  computed: {
      editActive(){
          return this.editActive
      }
  },
  mounted(){

  },
};
</script>
<style scoped lang="scss">
.customEventForm {
  font-weight: bold;
  font-size: 18px;
  max-height: 50px;
  color: #ffffff;
  background-color: #4b4b4b;
  border-radius: 5px;
  vertical-align: middle;
  text-decoration: none;
}
.customEventDisplay {
  font-weight: bold;
  font-size: 18px;
  max-height: 50px;
  color: #ffffff;
  background-color: #4b4b4b;
  border-radius: 5px;
  vertical-align: middle;
  text-decoration: none;
}
input [type="text"] {
  height: 30px;
  width: 100%;
  font-size: 20px;
  border-radius: 5px;
  background-color: #616161;
  color: #ffffff;
  padding: 5px;
}
</style>
