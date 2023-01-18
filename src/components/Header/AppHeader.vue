<script>

export default {
    methods: {
        getImagePath: function (imgPath){
            return new URL(`../../assets/img/${imgPath}`, import.meta.url).href;
        }
    },
    data(){
        return{
            menuList: ['Home', 'About Us', 'Trainings', 'Packages', 'Blog', 'Contact']
        }
    }
    
}
</script>

<template>
    <div id="header-container" class="container">
        <div class="row d-flex justify-content-center justify-content-between align-items-center h-100">
            <div id="logo-container" class="col-2 d-flex align-items-center h-100">
                <img :src="getImagePath('logo-gobike.png')" alt="logo" class="h-100">
            </div>
            <div id="header-menu" class="col d-flex justify-content-center">
                <p v-for="item in menuList" class="my-0 ms-3">
                    {{ item }}
                </p>
            </div>
            <div id="upcoming-events" class="col-3 d-flex align-items-center">
                <font-awesome-icon icon="fa-solid fa-bars" class="menu-icon me-4"/>
                <button class="py-2 px-4 d-flex align-items-center">
                    <font-awesome-icon icon="fa-solid fa-helmet-un" class="helmet-icon"/>
                    <span class="mx-2">
                        Upcoming Events
                    </span>
                    <font-awesome-icon icon="fa-solid fa-arrow-right" class="icon-arrow" />
                    
                </button>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>

    #header-container{
        height: 10vh;
        img{
            transform: scale(0.8);
        }
        
    }


   
    #header-menu{
        p{
            font-weight: 400;
        }
        
    }

    #upcoming-events{
        .menu-icon{
            font-size: 1.5rem;
        }
        button{
            color: white;
            background-color: rgb(0,0,0);
            border: none;
            border-radius: 5px;
            .helmet-icon{
                font-size: 3rem;
            }
            span{
                font-weight: 400;
            }
        }
    }
    
</style>