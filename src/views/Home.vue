<template>
  <div class="home">
    <MainBanner/>
    <UxSection/>
    <study-case/>
    <Portfolio id="portfolio"/>
    <TeamSection/>
  </div>
</template>

<script>
import MainBanner from '@/components/MainBanner.vue'
import UxSection from '@/components/UxSection.vue'
import Portfolio from '@/components/Portfolio.vue'
import TeamSection from '@/components/TeamSection.vue'
import StudyCase from '@/components/StudyCase.vue'

export default {
  name: 'Home',
  components: {
    MainBanner,
    UxSection,
    Portfolio,
    TeamSection,
    StudyCase
  }
}
</script>

<style lang="scss" scoped>
.home { z-index: 1; }
</style>