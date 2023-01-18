<script>

export default {
    methods: {
        getImagePath: function (imgPath){
            return new URL(`../../assets/img/${imgPath}`, import.meta.url).href;
        }
    }
    
}
</script>

<template>
    <div class="container">
        <div class="row d-flex justify-content-center justify-content-between align-items-center">
            <div class="col-2">
                <img :src="getImagePath('favicon-gobike.png')" alt="logo">
            </div>
            <div id="header-menu" class="col-4">
                menu
            </div>
            <div id="upcoming-events" class="col-3">
                events
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>

    #header-menu{
        background-color: green;
    }

    #upcoming-events{
        background-color: blue;
    }
    
</style>