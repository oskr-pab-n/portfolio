<template>
  <div  class="team" id="study">
    <section class="column text-center">
      <h3>Learn about my process</h3>
    </section>
    <section class="column">
      <p>After a review of data generated from App logs and trends, it was identified the Search Engine page is a critical frustration feature for users while performing day-to-day tasks...</p>
      <router-link :to="{name: 'Sproutloud Test Case'}" class="button">
        Sproutloud Study Case
      </router-link>
    </section>
  </div>
</template>

<script>

export default {
  name: 'study-case'
}
</script>

<style lang="scss" scoped>
.team {
  align-items: center;
  background: #000;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px 30px;

  .column {
    width: 40%;
  }
}

.button {
  background: #000;
  border: 2px solid #fff;
  color: #fff;
  margin-top: 20px;

  -webkit-transition: all .2s ease;
  -moz-transition: all .2s ease;
  -ms-transition: all .2s ease;
  transition: all .2s ease;

  &:hover {
    background: #fff;
    color: #000;

    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -ms-transition: all .2s ease;
    transition: all .2s ease;
  }
}

blockquote { 
  font-size: 1.1em;
  text-align: left; 
}

p { 
  font-size: 1.1em;
  text-align: left;
}

.text-center { text-align: center; }

h3 {
  color: #ec9a42;
  display: block;
  font-family: 'EB Garamond', serif;
  font-size: 2.5em;
  font-weight: 800;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  h3 { font-size: 30px; }
  .team {
    height: auto;
    padding: 50px 0 50px 0;

    .column { 
      padding: 10px 30px;
      width: 100%; 
    }
  }
}
</style>
