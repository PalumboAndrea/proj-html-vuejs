<script>

export default {
    
}
</script>

<template>
    <div id="carousel-wrapper" class="container-fluid p-0">
        <div id="carousel" class="container h-100">
            <div class="row h-100 d-flex align-items-center">
                <img src="../../../assets/img/slider-bike-9.jpg" alt="slider-photo">
                <div class="col-1 d-flex justify-content-center">
                    <font-awesome-icon icon="fa-solid fa-circle-left" class="icon-arrow"/>
                </div>
                <div class="col-4 ps-5">
                    <p class="m-0">
                        Professional Cycling Club
                    </p>
                    <span>
                        Learn cycling from the pros.
                    </span>
                    <button class="btn btn-primary py-4 px-5 mt-4">Learn More
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </button>
                </div>
                <div class="col-1 offset-6 d-flex justify-content-center">
                    <font-awesome-icon icon="fa-solid fa-circle-right" class="icon-arrow"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../src/styles/partials/variables' as *;

    #carousel-wrapper{
        height: 80vh;
        color: white;
        img{
            padding: 0;
            position: absolute;
            max-width: 100%;
            height: 80vh;
            z-index: -1;
            left: 0;
        }
        .icon-arrow{
            height: 30px;
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