<template>
  <div class="navBar">
    <img
      src="../assets/arrow-right-duotone.svg"
      class="expandNav"
      v-on:click="expand"
    />

    <ul class="navList">
      <li class="listItem">
        <router-link to="/">
          <img src="../assets/calendar-duotone.svg" />
          <p>Calendar</p>
        </router-link>
      </li>
      <li class="listItem">
        <router-link to="/events">
          <img src="../assets/hard-drives-duotone.svg" />
          <p>Events</p>
        </router-link>
      </li>
      <li class="listItem">
        <router-link to="/settings">
          <img src="../assets/gear-duotone.svg" />
          <p>Settings</p>
        </router-link>
      </li>
      <li id="logout" class="listItem" v-on:click="logout">
        <a href="#">
          <img src="../assets/sign-out-duotone.svg" />
          <p>Logout</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  methods: {
    //Log user out of application
    logout() {
      this.$store.dispatch("logout");
    },
    //Changes navbar opened/closed state.
    expand() {
      let navBar = document.querySelector(".navBar");
      navBar.classList.toggle("nav-closed");
    },
  },
};
</script>

<style scoped lang="scss">
:root {
  /* border radius */
  --radius: 0.2rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.navBar {
  box-shadow: 0px 0px 10px grey;
  position: absolute;
  height: 100vh;
  background-color: #e0e0e0;
  left: -1rem;
  top: 0;

  .expandNav {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    fill: grey;
    background-color: #e0e0e0;
    box-shadow: 0px 0px 10px grey;
    padding: 3px;
    right: -1rem;
    top: 1rem;
    z-index: 99;
    position: absolute;
    cursor: pointer;
    transform: rotatez(-180deg);
    transition: transform 200ms ease-in-out;

    &:hover {
      background-color: #b8b8b8;
    }
  }

  .navList {
    display: flex;
    flex-direction: column;

    .listItem {
      transition: all 200ms ease-in;
      list-style: none;
      padding: 1rem 1.5rem;
      border-left: 6px solid transparent;
      cursor: pointer;

      &:hover {
        background-color: grey;
      }

      a {
        display: flex;
        gap: 1rem;
        align-items: center;
        color: grey;
        text-decoration: none;
        font-weight: 500;
      }

      img {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }
}

a {
  font-size: 40px;
  color: #18243a;
  text-decoration: none;
  vertical-align: middle;
  padding: 7px;
  &.router-link-exact-active {
    color: #e8edff;
    background-color: grey;
  }
  &:hover {
    color: #e8edff;
  }
}

.listItem #logout {
  &:hover {
    color: #e8edff;
    background-color: grey;
  }
}

//close state
.nav-closed .expandNav {
  transform: rotatez(0deg);
}

.nav-closed .listItem p {
  display: none;
}
</style>
