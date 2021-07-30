<template>
  <div class="portfolio">
    <section class="columns">
      <h3 class="section-title">Portfolio</h3>

      <div class="portfolio-grid-laptop">
        <div class="column" v-for="(value, key) in items" :key="key" >
          <router-link :to="value.path">
            <div :id="value.id" class="portfolio-button" :style="{ 'background-image': 'url(' + value.background + ')' }">
              <p>{{ value.name }}</p>
              <router-link :to="value.path" class="button">
                Read more
              </router-link>
            </div>
          </router-link>
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
          background: require('../assets/img/sproutloud-oskr-pabon.jpg'),
          path: '/sproutloud'
        },
        {
          name: 'Dish',
          id: 'dish',
          background: require('../assets/img/dish-oskr-pabon.jpg'),
          path: '/dish'
        },
        {
          name: 'Gess',
          id: 'gess',
          background: require('../assets/img/gess-oskr-pabon.jpg'),
          path: '/gess'
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
      align-content: space-around;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 50px 0;
    width: 90%;

    .portfolio-grid-laptop {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      margin-bottom: 60px;
      width: 80%;

      .column { 
        margin-bottom: 20px;
        margin-left: 20px;
        width: 30%; 
      }
    }
  }
}

.portfolio-button {
  align-content: space-between;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  font-weight: 800;
  height: 500px;
  justify-content: left;
  position: relative;
  text-decoration: none;
  transform: scale(1);
  width: 100%;
  z-index: 1;

  -webkit-transition: transform .5s ease-out;
  -moz-transition: transform .5s ease-out;
  -ms-transition: transform .5s ease-out;
  transition: transform .5s ease-out;

  p { 
    color: #2c3e50;
    font-size: 2em;
    margin-top: 0;
    padding: 40px;
  }

  .button { 
    padding: 20px 20px;
    height: max-content;
    width: 100%;
  }
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

      .portfolio-grid-laptop { 
        width: 100%; 

        .column { 
        margin-right: 20px;
        width: 100%;
        }
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
