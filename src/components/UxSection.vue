<template>
  <div id="ux-section" class="ux-section">
    <section class="users-image">
      <img src="../assets/img/oskr-pabon-users-group.png" alt="Oskr Pabon Logo" width="100%" height="auto">
    </section>
    <section class="columns" data-aos="fade-up" data-aos-duration="1000">
      <h2 class="column">Let´s make complex problems simple!</h2>
      <p class="column">Throughout a good process, people are in control. Apps usually take over the decision-making adding friction to users mental processes. It is our responsability to find the correct balance between enabling users and avoiding unwanted outcomes. An app can make people feel like they’re in control by keeping interactive elements familiar and predictable, confirming destructive actions, and making it easy to cancel operations, even when they’re already underway.</p>
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
  color: #000;
  font-family: 'EB Garamond', serif;
  font-size: 2.2em;
  font-weight: 700;
  margin: 0;
}
p { 
  font-size: 1.1em;
  text-align: left;
  font-weight: 600;
}
.ux-section {
  align-content: center;
  background: url('../assets/img/second-background-oskr-pabon.jpg');
  background-position: center;
  background-size: cover;
  color: #000;
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
