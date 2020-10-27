<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body {
  margin: 0;
  overflow-x: hidden;
  padding: 0;

  img { max-width: 100%; }
}

ul {
  padding: 0;
  line-height: 30px;

  li {
    list-style: none;
    font-size: 18px;
  }
}

.button {
  background: #000;
  color: #fff;
  display: block;
  font-weight: 800;
  padding: 15px 30px;
  text-decoration: none;
  width: fit-content;
}

.navigation-section {
  position: absolute;
  width: 50%;

  #nav {
    padding: 30px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;

    a {
      font-weight: bold;
      color: #000000;
      margin-right: 20px;
      text-decoration: none;
    }

    a.router-link-exact-active {
      color: #D40D54;
    }
  }
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  position: absolute;
  top: 0;

  &:before {
    background: #fff;
    position: absolute;
    height: 100vh;
    width: 100%;
  }
}
</style>
