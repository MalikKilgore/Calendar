<template>
  <div class="eventRoot">
    <ul id="eventList" ref="eventList">
    </ul>
  </div>
</template>

<script>
import Vue, { h } from 'vue'
import router from '../router'
import store from '../store'
import Vuex from 'vuex'
import CustomEvent from '../components/CustomEvent'
import firebase from 'firebase/app'
import {usersCollection, db} from '../firebase/firebase'

export default {
  name: 'Events',
  data() {
    return {
      unsubscribe: null,
    }
  },
  components: {
    CustomEvent
  },
  methods: {
    //renders events to the DOM with Firebase listener.
    renderEvents(){
      const user = store.state.currentUser
      const calendar = usersCollection.doc(user.uid).collection('calendar')
      const eventList = document.getElementById('eventList')

      function render() {
          return Vue.h(CustomEvent, {
            editActive: false,
            title: "",
            startDate: "",
            endDate: "",
            startTime: "",
            endTime: "",
            description: "",
          })
        }
      this.unsubscribe = calendar.orderBy('createdOn').onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            //Event Added
            if (change.type === 'added') {
              console.log('New event: ', change.doc.data());
              /*
              Can instead generate a component here and give it unique identifier.

              let eventItem = document.createElement('li');
              eventItem.classList = 'event'
              eventItem.style.border = '0.5rem solid black'
              eventItem.style.listStyle = 'none'
              eventItem.style.backgroundColor = 'white'
              eventItem.innerHTML = change.doc.data().title 
              
              
              instance.$slots.default = [Vue.h(instance)]
              instance.$mount()
              this.$refs.eventList.appendChild(instance.$el) */
  
              eventList.appendChild(eventItem)
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
    showForm(){
      this.$store.dispatch("showForm")
    },
    hideForm(){
      this.$store.dispatch("hideForm")
    },
  },
  mounted(){
    this.hideForm()
    this.renderEvents()
  },
}
</script>
