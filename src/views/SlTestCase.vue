<template>
  <div class="study-case">
    <section class="columns">
      <h1>SproutLoud Search Engine Redesign</h1>
      <article>
        <h2>Overview</h2>
        <p>After a review of data generated from App logs and trends, it was identified the Search Engine page is a critical frustration feature for users while performing day-to-day tasks in the SproutLoud Application.</p>
        <p>The goal for this project was to identify any usability issues with the current search engine page, determine the critical features to prioritize, and provide an interface with all the capabilities users need to perform accurate searches through items in the application.</p>
      </article>
      <article>
        <h2>Background</h2>
        <p>Sproutloud is a US-based platform that provides brands complete management of the marketing activities their retailers perform to offer their products.</p>
        <a href="https://sproutloud.com/software/overview" target="_blank" class="button is-outlined">More about Sproutloud</a>
        <p>I joined Sproutloud as a UI/UX designer almost three years ago, I am part of 5 design members on the team, 50 engineers, and 8 product managers. I am responsible of the design process on some key aspects of our business.</p>
        <p>I’ve grown during last two years by making some key achievements such as:</p>
        <ul>
          <li><strong>Provide improvement to the design process:</strong> This has helped our team establish structure and data arguments to drive decisions through the design process, making user experience and interfaces more effective.</li>
          <li><strong>Improved usability across the platform:</strong> It was not included usability testing as part of the design process, we determine a solid structure by using methodologies like design thinking to make empathy steps and journey maps that provide insightful and accurate objectives for development cycles</li>
          <li><strong>Design kit enhancements:</strong> It was necessary to have a consistent and scalable UI Kit that provides hierarchy and correct use of the space through layouts. It makes easier our lives all the time!</li>
          <li><strong>Design System enhancements:</strong> Providing quality documentation to the product and engineering team about the components defined instead of others during the design process, making the decisions open to feedback and participation.</li>
          <li><strong>Vue.js Patterns library:</strong> As some main aspects of the implementation phase was to have a consistent look with the high quality design, we create a vue.js library that offer a one source of truth about the styles and look of elements to compose interfaces during the development process, this make easier the management of design patterns and control over changes.</li>
        </ul>
      </article>
      <article>
        <h2>The process</h2>
        <p>We rely on the priority of products to determine our process. For some urgent features, we use a Lean UX process to have a quick MVP that helps us refine expected functionalities and plan on how the key is to invest in these features base on standard technology business against our own path. </p>
        <p>To apply innovation in our features oriented to key business aspects, we follow the Design thinking methodology to know deeply our user’s needs and journeys, we identify priorities to create a clear path to develop a quality product. This also includes strategies to measure the effectiveness of the product such as necessary logs and support. </p>
        <img src="../assets/img/design-thinking.png" class="mb20" alt="">
      </article>
      <article>
        <h2>Understanding the Problem</h2>
        <p>As the platform has been created 20 years ago, we definitely have evolved some concepts and methodologies to generate products. This product was laking on usability testing and have low considerations on user’s main tasks and flows. </p>
        <p>I conducted research interviews with our primary users to find all the friction points they were experiencing while performing searches in the application. </p>
        <p>My goals with this research were: </p>
        <ul>
          <li>Understand the flows users require to use the Search Engine</li>
          <li>Uncover pain points with the existing journey</li>
          <li>Determine successful elements participating in the current process</li>
        </ul>
      </article>
      <article>
        <h2>Gathering insights</h2>
        <p>After having all the interviews with users recorded and organized, I shared the transcripts and a presentation to my teammates before meet with them and start an affinity mapping session to synthesize and ideate about the pains identified. This activity with my coworkers provided a clear organization with common themes and features, we collect some ideas to solve the search engine page problems, and additionally a prioritization considering with them these three aspects: Task critically, impact, frequency. With this exercise, we provide a severity score for each theme.</p>
        <img src="../assets/img/mapping-oskr-pabon.png" class="mb20" alt="Afinity Mapping Sessions - Oskr Pabon - UI UX Designer">
      </article>
      <article>
        <h2>Prioritization</h2>
        <p>This was the resulting share to the product team after analyzing and organizing the session:</p>
        <img src="../assets/img/epics-oskr-pabon.png" class="mb20" alt="Epic - Oskr Pabon - UI UX Designer">
        <p> categorize these problems into Epics to present to the Product team and Engineers,  it summarizes highlighting key areas of the platform that needed to be addressed from a usability standpoint. This saves us time prioritizing usability issues against business needs and clears the product roadmap for the quarter.</p>
        <p>We conclude that the first Epic we would prioritize would be the SERP(Search Engine Page) redesign due to severity score, UX, and engineering effort required to rebuild it.</p>
      </article>
      <article>
        <h2>Narrowing down the scope of work</h2>
        <p>Based on the interviews with 10 users on the existing SERP page, we found the following key points to put our attention:</p>
        <ul>
          <li>A lack of filtering and sorting ends with more time finding assets through the catalog in the application affecting 73% of users</li>
          <li>Descriptions and details were missing affecting the accuracy of the results, as a result, 44% of users performed multiple searches to find the correct asset</li>
          <li>30% of users didn’t memorize the names of the assets, making them go directly to the catalog instead of performing a search</li>
        </ul>
      </article>
      <article>
        <h2>Creating Wireframes</h2>
        <p>Based on the above problems identified, I worked towards addressing these pains by coming up with potential solutions:</p>
        <ul>
          <li>Providing sorting tools to organize the data displayed when a search is performed. Additionally, the use of navigational tags, collateral tags, and tag groups as a reference to filter the catalog.</li>
          <li>Adding a summary view including additional information of the assets to avoid confusion through the SERP</li>
          <li>Create an autosuggestion tool to show some coincidence while users are typing on the search field</li>
        </ul>
        <img src="../assets/img/design-process-oskr-pabon.jpg" class="mb20" alt="Afinity Mapping Sessions - Oskr Pabon - UI UX Designer">
      </article>
      <article>
        <h2>Validating Designs</h2>
        <p>After validating and iterating on the wireframes through A/B Testing the high fidelity mocks come to life to be presented to the Development Team and Stakeholders.</p>
        <p>During those sessions, I observe they interacted with the prototype and search for catalog items. The usability session revealed that it was less arduous to find items in the catalog by applying filters and narrow down the options using the tags, it was easy for users to type searches using the autocomplete tool. </p>
        <img src="../assets/img/search-oskr-pabon.png" class="mb20" alt="Epic - Oskr Pabon - UI UX Designer">
        <img src="../assets/img/serp-oskr-pabon.jpg" class="mb20" alt="Epic - Oskr Pabon - UI UX Designer">
      </article>
      <article>
        <h2>Developing Designs</h2>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'sl-test-case'
}
</script>

<style lang="scss" scoped>
.mb20 { margin-bottom: 20px; }
.study-case {
  text-align: left;
  padding: 40px;
  width: 800px;
  margin: 0 auto;
}
h1 {
  font-family: 'EB Garamond', serif;
  font-size: 52px;
  font-weight: 800;
}
h2 {
  font-size: 2em;
  font-weight: 800;
}
p { 
  font-size: 18px;
  text-align: left;
}
ul {
  list-style-type: disc;

  li {
    list-style: disc;
    margin-left: 40px;
  }
}
.back-button {
  background-image: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='far' data-icon='caret-circle-left' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='svg-inline--fa fa-caret-circle-left fa-w-16 fa-3x'%3E%3Cpath fill='currentColor' d='M296 157.1v197.8c0 10.7-13 16.1-20.5 8.5l-98.3-98.9c-4.7-4.7-4.7-12.2 0-16.9l98.3-98.9c7.5-7.7 20.5-2.3 20.5 8.4zM256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm0-48c110.5 0 200-89.5 200-200S366.5 56 256 56 56 145.5 56 256s89.5 200 200 200z' class=''%3E%3C/path%3E%3C/svg%3E");
  padding: 20px;
  background-repeat: no-repeat;
  cursor: pointer;
  margin-bottom: 68px;
  width: 20px;
}

.button.is-outlined {
  border: 2px #000 solid;
  background: #fff;
  color: #000;
  padding: 5px 10px;

  -webkit-transition: all .2s ease;
  -moz-transition: all .2s ease;
  -ms-transition: all .2s ease;
  transition: all .2s ease;

  &:hover {
    background: #000;
    color: #fff;

    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -ms-transition: all .2s ease;
    transition: all .2s ease;
  }
}

@media only screen and (max-width: 800px) {
  h2 { font-size: 30px; }
  .study-case {
    text-align: left;
    padding: 40px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
