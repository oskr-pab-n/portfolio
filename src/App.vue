<template>
  <div id="app">
    <nav class="nav">
      <section class="left">
        <router-link :to="{ name: 'Home', hash: '#banner' }"><h3>Oskr Pabon</h3></router-link>
        <ul>
          <li>
            <router-link class="button" :to="{ name: 'Home', hash: '#study' }">Study Case</router-link>
          </li>
          <li>
            <router-link class="button" to="#portfolio">Clients</router-link>
          </li>
        </ul>
      </section>
      <section class="right">
        <a href="https://www.linkedin.com/in/oscar-pabón-51b833a2/" class="button i-linked-in" target="_blank"></a>
      </section>
    </nav>
    <keep-alive >
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'Andale Mono Regular';
  font-style: normal;
  font-weight: normal;
  src: local('Andale Mono Regular'), url('assets/fonts/ANDALEMO.woff') format('woff');
}

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
h3 {
  font-family: 'Lato', sans-serif;
  font-size: 1.5em;
  color: #ff005e;
  font-weight: 800;
  margin: 0px;
}
.nav {
  background: #000;
  padding: 10px 40px;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 10;
  text-align: left;
  justify-content: space-between;

  .left {
    display: flex;
  }

  .button.i-linked-in {
    background-image: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='linkedin-in' class='svg-inline--fa fa-linkedin-in fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='%23000' d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'%3E%3C/path%3E%3C/svg%3E");
    padding: 15px;
    background-color: #fff;
    border-radius: 50%;
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: center center;
  }

  ul {
    list-style: none;
    display: flex;
    margin: 0 0 0 40px;

    li {
      color: #fff;
      margin-right: 20px;

      a {
        color: #fff;
        padding: 2px 0;
        font-size: 16px;
      }
    }
  }
}
a { text-decoration: none; }
body {
  font-family: 'Lato';
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

.w-100 { width: 100%; }

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
  font-family: 'Lato', sans-serif;
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

@media only screen and (max-width: 768px) {
  .nav {
    width: 100%;
    padding: 10px 20px;

    ul { margin: 0 0 0 20px; }
    li { margin-right: 10px; }
  }
}
</style>
