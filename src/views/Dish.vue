<template>
  <div class="dish">
    <section id="dish" class="columns">
      <article class="column pl80">
        <router-link :to="{ name: 'Home', hash: '#portfolio' }"><div class="back-button"></div></router-link>
        <h2>Dish</h2>
        <p>Team effort to create design systems and modular application of mark-up to support styles. Applying good practices for readability, consistency and top-down organization. Designing patterns that will granted the accessibility on the websites.</p>
        <ul>
          <li>UI Interface Design</li>
          <li>UX Interface Design</li>
          <li>Web Development</li>
          <li>Accessibility</li>
        </ul>
        <a class="button" href="http://d8aczad.dish.cloudbackend.net/" target="_blank">Visit site</a>
      </article>
      <article class="column img-large"></article>
      <article class="column split-section">
        <div class="site-image"></div>
        <div class="quote">TV made<br>for you.</div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Dish'
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 52px;
  font-weight: 800;
  margin: 0;
}
p { 
  font-size: 18px;
  text-align: left;
}
ul { margin-bottom: 40px; }
li { font-weight: 800; }
.back-button {
  background-image: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='far' data-icon='caret-circle-left' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='svg-inline--fa fa-caret-circle-left fa-w-16 fa-3x'%3E%3Cpath fill='currentColor' d='M296 157.1v197.8c0 10.7-13 16.1-20.5 8.5l-98.3-98.9c-4.7-4.7-4.7-12.2 0-16.9l98.3-98.9c7.5-7.7 20.5-2.3 20.5 8.4zM256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm0-48c110.5 0 200-89.5 200-200S366.5 56 256 56 56 145.5 56 256s89.5 200 200 200z' class=''%3E%3C/path%3E%3C/svg%3E");
  padding: 20px;
  background-repeat: no-repeat;
  cursor: pointer;
  margin-bottom: 68px;
  width: 20px;
}
.dish {
  align-content: center;
  background: #fff;
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  .columns {
    align-items: center;
    display: flex;
    height: 100vh;
    width: 100%;

    .column {
      display: flex;
      flex-direction: column;
      padding: 10px 30px;
      text-align: left;
      width: 40%;

      &.img-large {
        background: url('../assets/img/tv-image-oskr-pabon.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
        width: 25%;
      }

      &.split-section {
        align-items: center;
        height: 100vh;
        justify-items: center;
        padding: 0;
        width: 22.4%;

        .site-image { 
          background: url('../assets/img/tv-oskr-pabon.jpg');
          background-position: center;
          background-size: cover;
          height: 62%;
          width: 100%;
        }

        .quote {
          align-items: center;
          display: flex;
          font-size: 43px;
          font-weight: 800;
          height: 38%;
          justify-content: center;
          padding: 30px;
          width: 100%;
        }
      }

      &.pl80 { padding-left: 80px; }
    }
  }
}

@media only screen and (max-width: 768px) {
  h2 { font-size: 30px; }
  .dish{
    height: auto;
    padding-bottom: 50px;

    .users-image { margin-bottom: 30px; }
    .columns { 
      display: block;

      .column { 
        padding: 30px;
        width: 80%;

        &.img-large {
          background: url(/img/tv-image-oskr-pabon.7442abc7.jpg);
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          height: 100px;
          width: 83%;
        }

        &.split-section {
          align-items: center;
          height: 151px;
          justify-items: center;
          padding: 0;
          width: 100%;
          flex-direction: row;

          .site-image {
            height: 100%;
            width: 100%;
          }

          .quote {
            font-size: 24px;
            padding: 0;
            width: 30%∫;
          }
        }

        &.pl80 { 
          margin: 70px 0;
          padding-left: 30px;
        }
      }
    }
  }
}
</style>
