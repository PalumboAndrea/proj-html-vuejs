<script>

export default {
    
}
</script>

<template>
    <div class="container p-5 d-flex align-items-center">
        <div class="position-relative">
            <img src="../../../assets/img/bike-circle.png" alt="bike-circle" id="bike-circle">
            <img src="../../../assets/img/bike-player.png" alt="bike-player" id="bike-player">
        </div>
        <div class="pe-5">
            <h3>
                Do you want to be a professional cyclist?
            </h3>
            <p class="mb-2">
                We offer 6 coursers of varying difficulty and beautiful scenery
                that cyclyist of all levels can enjoy. You will learn cycling from
                professional with our competent and experienced staff. You
                will have a lot of fun with our amazing space.
            </p>
            <img src="../../../assets/img/divider.jpg" alt="divider" class="mb-4">
            <div class="d-flex pe-5">
                <font-awesome-icon icon="fa-solid fa-helmet-un" class="helmet-icon pt-1 pe-3"/>
                <div>
                    <h4>
                        Professional Team
                    </h4>
                    <p>
                        We make you professional by adding your 
                        sincerity as well as professionalism.
                    </p>
                </div>
            </div>
            <div class="d-flex mb-3 pe-5">
                <font-awesome-icon icon="fa-solid fa-helmet-un" class="helmet-icon pt-1 pe-3"/>
                <div>
                    <h4>
                        Professional Trainings
                    </h4>
                    <p>
                        We always ride with the best equipment,
                        respecting nature and fun.
                    </p>
                </div>
                
            </div>
            <button class="py-3 px-5">Get to know us</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../src/styles/partials/variables' as *;

#bike-circle{
    transform: scale(0.9);
}

#bike-player{
    position: absolute;
    transform: scale(0.9);
    top: -50px;
    left: 0;
}

button{
    @include black-button;
}

.helmet-icon{
    height: 60px;
}
    
</style>