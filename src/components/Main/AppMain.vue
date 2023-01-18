<script>
import Carousel from './MainComponents/Carousel.vue'
import CoursesIntro from './MainComponents/CoursesIntro.vue'
import CoursesList from './MainComponents/CoursesList.vue'
import EventsList from './MainComponents/EventsList.vue'
import OurTrainers from './MainComponents/OurTrainers.vue'
import SpecialPacks from './MainComponents/SpecialPacks.vue'
import ArticlesAndNews from './MainComponents/ArticlesAndNews.vue'

export default {
    components:{
        Carousel,
        CoursesIntro,
        CoursesList,
        EventsList,
        OurTrainers,
        SpecialPacks,
        ArticlesAndNews,
    
  },
  data(){
    return {
      
    }
  }
}
</script>

<template>
    <Carousel />
    <CoursesIntro />
    <CoursesList />
    <EventsList />
    <OurTrainers />
    <SpecialPacks />
    <ArticlesAndNews />

</template>

<style lang="scss" scoped>
    
</style>