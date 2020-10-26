<template>
  <div class="ux-section">
    <section class="users-image">
      <img src="../assets/img/oskr-pabon-users-group.png" alt="Oskr Pabon Logo" width="100%" height="auto">
    </section>
    <section class="columns">
      <article class="column">
        <h2>Experiences for<br>the users needs</h2>
      </article>
      <article class="column">
        <p>Currently, the technological industry is growing making products focused in users needs, the Design responsibilities are creating more efficient processes in order to guarantee a correct match between the message and the consumer.</p>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'UxSection'
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 52px;
  font-weight: 800;
  margin: 0;
}
p { 
  font-size: 25px;
  text-align: left;
}
.ux-section {
  align-content: center;
  background: #D9DEE2;
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-wrap: wrap;
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
    justify-content: space-around;
    width: 80%;

    .column {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 10px 30px;
      width: 40%;
    }
  }
}

@media only screen and (max-width: 768px) {
  h2 { font-size: 30px; }
  .ux-section {
    height: auto;
    padding-bottom: 50px;

    .users-image { margin-bottom: 30px; }
    .columns { 
      width: 100%; 

      .column { 
        padding: 10px 30px;
        width: 100%; 
      }
    }
  }
}
</style>
