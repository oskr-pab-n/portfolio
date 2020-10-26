<template>
  <div class="team">
    <section class="column text-center">
      <h3>Team effort</h3>
    </section>
    <section class="column">
      <p>Currently, the technological industry is growing making products focused in users needs, the Design responsibilities are creating more efficient processes in order to guarantee a correct match between the message and the consumer.</p>
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
  justify-content: center;
  padding: 50px 30px;

  .column {
    width: 40%;
  }
}

p { 
  font-size: 25px;
  text-align: left;
}

.text-center { text-align: center; }

h3 {
  display: BLOCK;
  font-size: 52px;
  font-weight: 800;
  width: 100%;
}
</style>
