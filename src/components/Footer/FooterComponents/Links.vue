<script>

export default {
    data(){
        return{
            trainingsLinks: [
                'Riding Lesson',
                'Safe Driving',
                'Mountain Bike',
                'Trail Drive',
                'Pedaling',
            ],
            quickLinks: [
                'Home',
                'Abous us',
                'Blog',
                'Packages',
                'Contact',
            ]
        }
    }
    
}
</script>

<template>
    <div id="links-wrapper" class="d-flex mt-3">
        <div id="trainings" class="me-5">
            <h3 class="mb-3">
                Trainings
            </h3>
            <p v-for="item in trainingsLinks" class="d-flex align-items-center mb-2">
                <font-awesome-icon icon="fa-solid fa-minus" class="me-2"/>
                {{ item }}
            </p>
        </div>
        <div id="quick-links" class="ms-5">
            <h3 class="mb-3">
                Quick Links
            </h3>
            <p v-for="item in quickLinks" class="d-flex align-items-center mb-2">
                <font-awesome-icon icon="fa-solid fa-minus" class="me-2"/>
                {{ item }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>