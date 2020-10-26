<template>
  <div class="home">
    <section class="brand">
      <img src="../assets/img/oskr-pabon-brand.svg" alt="Oskr Pabon Logo" width="400" height="auto">
    </section>
    <section class="main-illustration">
      <img src="../assets/img/illustration-oskr-pabon.svg" alt="Oskr Pabon Logo" width="500" height="auto">
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
    background: #D40D54;
    display: flex;
    height: 100%;
    justify-content: center;
    padding: 0 30px;
    width: 50%;
  }

  .main-illustration {
    padding: 0 30px;
    width: 50%;
  }
}

@media only screen and (max-width: 768px) {
  .home {
    .brand { width: 100%; }
    .main-illustration { display: none;}
  }
}
</style>
