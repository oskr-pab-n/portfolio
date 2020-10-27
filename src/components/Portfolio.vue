<template>
  <div class="portfolio">
    <section class="columns">
      <h3 class="section-title">Portfolio</h3>

      <div class="portfolio-grid-laptop">
        <div class="column" v-for="(value, key) in items" :key="key" >
          <router-link :to="value.path"><div :hash="value.id" :id="value.id" class="portfolio-button" :style="{ background: value.background }"><p>{{ value.name }}</p></div></router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Portfolio',
  data () {
    return {
      items: [
        {
          name: 'Sproutloud',
          id: 'sproutloud',
          background: '#394047',
          path: '/sproutloud/#sproutloud',
          logo: '../assets/img/tv-logo-oskr-pabon.png'
        },
        {
          name: 'Gess',
          id: 'gess',
          background: '#000000',
          path: '/gess/#gess',
          logo: '../assets/img/tv-logo-oskr-pabon.png'
        },
        {
          name: 'Dish',
          id: 'dish',
          background: '#e41932',
          path: '/dish/#dish',
          logo: '../assets/img/tv-logo-oskr-pabon.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://unpkg.com/vue-agile/dist/VueAgile.css');

h3 {
  display: BLOCK;
  font-size: 52px;
  font-weight: 800;
  margin: 0 0 40px 0;
  text-align: center;
  width: 100%;
}
.portfolio {
  align-content: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  .users-image {
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    max-width: 100%;

    img { height: intrinsic; }
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 50px 0;
    width: 90%;

    .portfolio-grid-laptop {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 60px;
      width: 60%;
    }
  }
}

.portfolio-button {
  align-items: center;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-weight: 800;
  height: 200px;
  justify-content: center;
  position: relative;
  text-decoration: none;
  transform: scale(1);
  width: 200px;
  z-index: 1;

  -webkit-transition: transform .5s ease-out;
  -moz-transition: transform .5s ease-out;
  -ms-transition: transform .5s ease-out;
  transition: transform .5s ease-out;

  p { font-size: 20px; }
}

.portfolio-button:hover {
  transform: scale(1.1);
  z-index: 2;

  -webkit-transition: transform .5s ease-out;
  -moz-transition: transform .5s ease-out;
  -ms-transition: transform .5s ease-out;
  transition: transform .5s ease-out;
}

@media only screen and (max-width: 768px) {
  h2 { font-size: 30px; }
  .portfolio {
    height: auto;
    padding-bottom: 50px;

    .users-image { margin-bottom: 30px; }
    .columns { 
      width: 100%; 

      .portfolio-grid-laptop { width: 100%; }

      .column { 
        width: 50%;

        .portfolio-button { width: 100%; }
      }
    }
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
