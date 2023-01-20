<script>
import {store} from '../../../../store'

export default {
    data(){
        return{
            store,
            imgPathIndex: 0,
            imgPath: [
                'slider-bike-4.jpg',
                'slider-bike-9.jpg',
                'slider-bike-12.jpg',
            ]
        }
    },
    methods: {
        minusImgPathIndex(){
            if(this.imgPathIndex == 0){
                this.imgPathIndex = (this.imgPath.length - 1);
            } else {
                this.imgPathIndex--;
            }
        },
        plusImgPathIndex(){
            if(this.imgPathIndex == (this.imgPath.length - 1)){
                this.imgPathIndex = 0;
            } else {
                this.imgPathIndex++;
            }
        }
    },
    
}
</script>

<template>
    <div id="carousel-wrapper" class="container-fluid d-flex align-items-center justify-content-between px-5">
        <img :src="store.methods.getImagePath(imgPath[imgPathIndex])" alt="slider-photo">
        <div class="icon-wrapper col-1">
            <font-awesome-icon icon="fa-solid fa-angle-left" class="icon-arrow" @click="minusImgPathIndex()"/>
        </div>
        <div class="text-wrapper col-4">
            <h2 class="big-title">
                Professional Cycling Club
            </h2>
            <span class="subtitle-bold">
                Learn cycling from the pros.
            </span>
            <button class="btn btn-primary py-3 px-5 mt-4 d-flex align-items-center">Learn More
                <font-awesome-icon icon="fa-solid fa-arrow-right" class="ms-1"/>
            </button>
        </div>
        <div class="icon-wrapper col-1 offset-6">
            <font-awesome-icon icon="fa-solid fa-angle-right" class="icon-arrow" @click="plusImgPathIndex()"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../src/styles/partials/variables' as *;

    #carousel-wrapper{
        height: 80vh;
        color: white;
        position: relative;
        img{
            padding: 0;
            position: absolute;
            width: 100%;
            height: 80vh;
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
            background-color: black;
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