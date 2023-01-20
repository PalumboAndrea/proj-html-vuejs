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
        <h3 class="big-title mb-1">
            Our Professional Cycling Trainings
        </h3>
        <span class="light-grey-text">
            Learn from the mountain biking expert
        </span>
        <div class="d-flex mt-4 mb-5">
            <div v-for="n in cardsImgNameList" class="my-card card m-3 position-relative">
                <img :src="store.methods.getImagePath(n.image)" alt="">
                <div class="lesson-title">
                    {{ n.title }}
                </div>
                <div class="view">
                    <span>
                        View
                    </span>
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
            border: 8px solid $main-bg-color;
            border-radius: 0;
            position: relative;
            &:hover .view{
                transition: all .5s ease;
                filter: opacity(1);
            }
            &:hover img{
                filter: brightness(80%);
                transition: all .7s ease;
            }
            img{
                filter: brightness(60%);
            }
            .lesson-title{
                color: white;
                position: absolute;
                top: 20px;
                left: 20px;
                font-weight: 500;
                font-size: 1.5rem;
            }
            .view{
                filter: opacity(0);
                color: white;
                position: absolute;
                height: 40px;
                width: 110px;
                cursor: pointer;
                bottom: 20px;
                left: 20px;
                background-color: black;
                span{
                    font-weight: 700;
                    font-size: 1.2rem;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                &:hover{
                    transform: scale(0.98);
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
                    transition: all .3s ease;
                }
                &:hover span{
                    font-size: 1.15rem;
                    transition: all .2s ease;
                }
            }
        }
        .left-arrow,
        .right-arrow{
            border: 2px solid black;
            padding: 15px;
        }

        
    }


    
</style>