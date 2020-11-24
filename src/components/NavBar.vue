<template>
  <div class="navBar">
    <img src="../assets/paper-plane-right-duotone.svg" class="expandNav" />

    <ul class="navList">
      <li class="listItem">
        <a href="#"> <img src="../assets/calendar-duotone.svg" /> Calendar </a>
      </li>
      <li class="listItem">
        <a href="#"> <img src="../assets/hard-drives-duotone.svg" /> Events </a>
      </li>
      <li class="listItem">
        <a href="#"> <img src="../assets/gear-duotone.svg" /> Settings </a>
      </li>
      <li class="listItem">
        <a href="#"> <img src="../assets/list-duotone.svg" /> List </a>
      </li>
    </ul>

    <button class="btn" v-on:click="logout">Logout</button>
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
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    fill: grey;
    background-color: #e0e0e0;
    box-shadow: 0px 0px 10px grey;
    right: -1rem;
    top: 1rem;
    z-index: 99;
    position: absolute;
    cursor: pointer;
    transform: rotatez(-180deg);
    transition: transform 200ms ease-in-out;

    &:hover {
      fill: grey;
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

      &:first-child {
        margin-bottom: 2rem;
      }

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
        width: 2rem;
      }
    }
  }
}

a {
  font-weight: bold;
  font-size: 40px;
  color: #18243a;
  text-decoration: none;
  vertical-align: middle;
  padding: 7px;
  &.router-link-exact-active {
    color: #e8edff;
  }
  &:hover {
    color: #c9ccf0;
  }
}

.btn {
  padding: 5px 15px;
  background: #ffffff;
  color: #2c3e50;
  border: 0;
  border-radius: 5px;
  font-size: 25px;
  position: absolute;
  left: 2rem;
  bottom: 2rem;

  &:hover {
    background: #a4a7c3;
  }
}
</style>
