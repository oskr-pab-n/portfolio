<template>
  <div id="ux-section" class="ux-section">
    <section class="users-image">
      <img src="../assets/img/oskr-pabon-users-group.png" alt="Oskr Pabon Logo" width="100%" height="auto">
    </section>
    <section class="columns">
      <article class="column">
        <h2 class="w-100">Let´s make complex problems simple!</h2>
        <p class="w-100">The solutions must be created with a deep analysis, the strategies should be planned to answer the correct questions, this outcomes unify with armony two different concepts, business growth and users sactisfaction.</p>
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
  font-size: 2.4em;
  font-weight: 800;
  margin: 0;
}
p { 
  font-size: 1.5em;
  text-align: left;
}
.ux-section {
  align-content: center;
  background: url('../assets/img/second-background-oskr-pabon.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 40px 0px;
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
    padding-top: 20px;
    width: 80%;

    .column {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 10px 30px;
      width: 60%;
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
