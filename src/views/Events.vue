<template>
  <div class="events">
    <h1>This will hold your saved events</h1>
  </div>
</template>

<script>
import Vue from 'vue'
import router from '../router'
import store from '../store'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import {usersCollection, db} from '../firebase/firebase'
import EventForm from '../components/EventForm'

export default {
  name: 'Events',
  components: {
    //Can also create events from this page.
    EventForm
  },
  methods: {
    //renders events to the DOM
    renderEvents(){
      const user = store.state.currentUser
      const calendar = usersCollection.doc(user.uid).collection('calendar')
      
      this.unsubscribe = calendar.orderBy('createdOn').onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            //Event Added
            if (change.type === 'added') {
              console.log('New event: ', change.doc.data());
              
            }
            //Event Modified
            if (change.type === 'modified') {
              console.log('Modified event: ', change.doc.data());
            }
            //Event Removed
            if (change.type === 'removed') {
              console.log('Removed event: ', change.doc.data());
            }
        });
      });
    }, 
  },
}
</script>
