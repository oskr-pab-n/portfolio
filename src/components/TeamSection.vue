<template>
  <div class="team">
    <section class="column text-center">
      <h3>Why Team work is key?</h3>
    </section>
    <section class="column">
      <p>Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.</p>
    </section>
  </div>
</template>

<script>

export default {
  name: 'TeamSection'
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
  color: #ff005e;
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
