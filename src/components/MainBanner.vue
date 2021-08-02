<template>
  <div class="home" id="banner">
    <div class="columns">
      <section class="brand column">
        <div class="w-100" data-aos="fade-up" data-aos-duration="2000">
          <h1>We are called to be architects of the future!</h1>
          <img class="is-mobile" src="../assets/img/bubble-oskr-pabon.png" alt="" width="200">
        </div>
        <p class="pt20 w-50">Specialist creating <strong>aesthetically pleasing products</strong>, applying analytical techniques to find correct solutions for users, identifying biases to have the best outcome for multiple business perspectives.</p>
      </section>
      <section class="column main-img" data-aos="fade-left" data-aos-duration="2000">
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainBanner'
}
</script>

<style lang="scss" scoped>
.pt-20 { padding-top: 20px; }
.home {
  align-items: center;
  background: #000;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  height: 80vh;
  justify-content: center;
  width: 100%;

  .slide-down-button {
    background: rgba(0,0,0,0);
    bottom: 0;
    display: block;
    padding: 22px;
    position: absolute;
    width: 50%;

    &::before {
      background-image: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='angle-down' class='svg-inline--fa fa-angle-down fa-w-10' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23ffffff' d='M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z'%3E%3C/path%3E%3C/svg%3E");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      bottom: 20px;
      content: '';
      right: 48%;
      padding: 12px;
      position: absolute;
    }
  }

  .brand {
    align-content: center;
    color: #fff;
    display: flex;
    height: 100%;
    justify-content: left;
    flex-wrap: wrap;
    padding: 0 30px;
    text-align: left;
    width: 60%;

    .w-50 {
      padding-top: 20px;
      width: 50%; 
    }
    p {
      font-size: 1.1em;
      font-weight: 300;
      line-height: 1.4em;
      margin-top: 0;
    }

    h1 {
      color: #ec9a42;
      font-family: 'EB Garamond', serif;
      font-size: 5em;
      line-height: .9em;
      margin-bottom: 10px;
      margin-top: 0;
    }

    h3 {
      font-family: 'Lato', sans-serif;
      font-size: 1.5em;
      color: #ff005e;
      font-weight: 800;
      margin-bottom: 10px;
      width: 100%;
    }
  }

  .columns {
    display: flex;

    .column {
      padding: 20px 20px 20px 40px;
      width: 50%;

      &.main-img {
        padding: 0;
        background: url('../assets/img/background-oskr-pabon.jpg');
        background-size: cover;
      }
    }
  }
}

.is-mobile { display: none; }

@media only screen and (max-width: 768px) {
  .is-desktop { display: none !important; }
  .home {
    background-position: center;
    height: auto;

    .brand { 
      width: 100%; 
      height: auto;

      .w-50 { width: 100%; }
    }
    .main-illustration { 
      background-size: 100%;
      width: 10%;
    }
    .columns {
      display: flex;
      flex-wrap: wrap;
      height: inherit;

      .column {
        padding: 20px 20px 20px 40px;
        width: 100%;

        h1 { font-size: 3em; }

        &.main-img {
          padding: 0;
          height: 200px;
          background-position-y: 20%;
          display: none;
        }
      }
    }
  }
  .is-mobile { display: block; }
}

@media only screen and (max-width: 425px) {
  .home { background-position: right; }
}
</style>
