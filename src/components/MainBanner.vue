<template>
  <div class="home">
    <section class="brand">
      <img src="../assets/img/oskr-pabon-brand.svg" alt="Oskr Pabon Logo" width="300" height="auto">
    </section>
    <section class="main-illustration">
    </section>
  </div>
</template>

<script>
export default {
  name: 'MainBanner'
}
</script>

<style lang="scss" scoped>
.home {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;

  .brand {
    background: #000;
    display: flex;
    height: 100%;
    justify-content: center;
    padding: 0 30px;
    width: 50%;
  }

  .main-illustration {
    background: url('../assets/img/oskr-pabon-main-bg.jpg');
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
    padding: 0 30px;
    width: 50%;
  }
}

@media only screen and (max-width: 768px) {
  .home {
    .brand { width: 100%; }
    .main-illustration { 
      background-size: 100%;
      width: 10%;
    }
  }
}
</style>
