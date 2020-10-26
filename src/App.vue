<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body {
  margin: 0;
  padding: 0;

  img { max-width: 100%; }
} 

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
