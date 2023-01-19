<script>
import {store} from '../../../../store'

export default {
    data(){
        return{
            store,
            cardsImgNameList: [
                {
                    title: 'Riding Lesson',
                    image: 'training-box-1.jpg',
                },
                {
                    title: 'Safe Driving',
                    image: 'training-box-2.jpg',
                },
                {
                    title: 'Mountain Bike',
                    image: 'training-box-3.jpg',
                },
                {
                    title: 'Tail Drive',
                    image: 'training-box-4.jpg',
                },

            ]
        }
    }
    
}
</script>

<template>
    <div id="courses-list-container" class="container d-flex flex-column align-items-center pb-5">
        <p class="title mb-1">
            Our Professional Cycling Trainings
        </p>
        <span class="light-grey-text">
            Learn from the mountain biking expert
        </span>
        <div class="d-flex mt-4 mb-5">
            <div v-for="n in cardsImgNameList" class="my-card card m-3 position-relative">
                <img :src="store.methods.getImagePath(n.image)" alt="">
                <div class="lesson-title">
                    {{ n.title }}
                </div>
            </div>
        </div>
        <div class="arrows">
            <font-awesome-icon icon="fa-solid fa-angle-left" class="left-arrow"/>
            <font-awesome-icon icon="fa-solid fa-angle-right" class="right-arrow ms-2"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../src/styles/partials/variables' as *;
    @use '../src/styles/general.scss' as *;

    #courses-list-container{
        padding-top: 200px;

        .my-card{
            border: 8px solid black;
            border-radius: 0;

            img{
                filter: brightness(70%);
            }
            .lesson-title{
                color: white;
                position: absolute;
                top: 20px;
                left: 20px;
                font-weight: 500;
                font-size: 1.5rem;
            }
        }
        .left-arrow,
        .right-arrow{
            border: 2px solid black;
            padding: 15px;
        }

        
    }


    
</style>