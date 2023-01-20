<script>
import {store} from '../../../../store'

export default {
    data(){
        return{
            store,
            imgPathIndex: 0,
            text: [
                {
                    title: 'Unforgettable Cycling Experience',
                    img: 'slider-bike-4.jpg',
                },
                {
                    title: 'Learn Mountain Bike From The Expert',
                    img: 'slider-bike-9.jpg',
                },
                {
                    title: 'Professional Cycling Club',
                    img: 'slider-bike-12.jpg',
                },
            ]
        }
    },
    methods: {
        minusImgPathIndex(){
            if(this.imgPathIndex == 0){
                this.imgPathIndex = (this.text.length - 1);
            } else {
                this.imgPathIndex--;
            }
        },
        plusImgPathIndex(){
            if(this.imgPathIndex == (this.text.length - 1)){
                this.imgPathIndex = 0;
            } else {
                this.imgPathIndex++;
            }
        }
    },
    
}
</script>

<template>
    <div id="carousel-wrapper" class="container-fluid d-flex align-items-center justify-content-between px-5 mb-4">
        <img :src="store.methods.getImagePath(text[imgPathIndex].img)" alt="slider-photo">
        <div class="icon-wrapper col-1">
            <font-awesome-icon icon="fa-solid fa-angle-left" class="icon-arrow" @click="minusImgPathIndex()"/>
        </div>
        <div class="text-wrapper col-6">
            <h2 class="very-big-title">
                {{text[imgPathIndex].title}}
            </h2>
            <span class="subtitle-bold">
                Learn cycling from the pros.
            </span>
            <button class="btn btn-primary py-3 px-5 mt-4 d-flex align-items-center">Learn More
                <font-awesome-icon icon="fa-solid fa-arrow-right" class="ms-1"/>
            </button>
        </div>
        <div class="icon-wrapper col-1 offset-4">
            <font-awesome-icon icon="fa-solid fa-angle-right" class="icon-arrow" @click="plusImgPathIndex()"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../src/styles/partials/variables' as *;

    #carousel-wrapper{
        height: 100vh;
        color: white;
        position: relative;
        img{
            padding: 0;
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -1;
            object-fit: cover;
            left: 0;
        }
        .text-wrapper{
            padding-left: 100px;
        }
        .icon-wrapper{
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $main-bg-color;
            border-radius: 5px;
            height: 60px;
            width: 60px;
            .icon-arrow{
                font-size: 1.5rem;
                cursor: pointer;
            }
        }
        p{
            font-weight: 500;
            font-size: 3rem;
        }
        span{
            display: block;
        }
        button{
            @include black-button;
        }
    }
    
</style>