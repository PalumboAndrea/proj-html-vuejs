<script>
import {store} from '../../../../store'

export default {
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <div class="container p-5 d-flex align-items-center">
        <div class="position-relative me-5">
            <img :src="store.methods.getImagePath('bike-circle.png')" alt="bike-circle" id="bike-circle">
            <img :src="store.methods.getImagePath('bike-player.png')" alt="bike-player" id="bike-player">
        </div>
        <div class="text-container">
            <h3 class="middle-title mb-3">
                Do you want to be a professional cyclist?
            </h3>
            <p class="subtitle mb-2">
                We offer 6 coursers of varying difficulty and beautiful scenery
                that cyclyist of all levels can enjoy. You will learn cycling from
                professional with our competent and experienced staff. You
                will have a lot of fun with our amazing space.
            </p>
            <img :src="store.methods.getImagePath('divider.jpg')" alt="divider" class="divider mb-4">
            <div class="d-flex pe-5 mt-3">
                <img :src="store.methods.getImagePath('helmet.png')" alt="helmet" class="helmet-icon mt-2 pe-3">
                <div>
                    <h4>
                        Professional Team
                    </h4>
                    <p class="subtitle">
                        We make you professional by adding your 
                        sincerity as well as professionalism.
                    </p>
                </div>
            </div>
            <div class="d-flex mb-3 pe-5">
                <img :src="store.methods.getImagePath('construction-helmet.png')" alt="helmet" class="helmet-icon mt-2 pe-3">
                <div>
                    <h4>
                        Professional Trainings
                    </h4>
                    <p class="subtitle">
                        We always ride with the best equipment,
                        respecting nature and fun.
                    </p>
                </div>
                
            </div>
            <button class="py-3 px-5">
                Get to know us
                <font-awesome-icon icon="fa-solid fa-arrow-right" class="icon-arrow ms-2" />
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../src/styles/partials/variables' as *;

@keyframes bike-circle-animation {
    0% { transform: rotate( 0); }
  100% { transform: rotate( 360deg); }
}

    #bike-circle{
        height: 600px;
        transform: scale(0.2);
        animation: bike-circle-animation 15s linear infinite;
    }

    #bike-player{
        position: absolute;
        transform: scale(0.8);
        top: -100px;
        left: 50%;
        transform: translate(-50%) scale(0.8);
    }

    .text-container{
        width: 450px;

        button{
            @include black-button;
        }
        h4{
            font-weight: 700;
            font-size: 1.3rem;
        }
        .helmet-icon{
            height: 60px;
        }
    }

</style>