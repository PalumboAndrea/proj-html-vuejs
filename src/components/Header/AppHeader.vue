<script>
import {store} from '../../../store'

export default {
    data(){
        return{
            store,
            dropdownMenuIndex: null,
            menuList: [
                {
                    title: 'Home',
                    subtitle: []
                },
                {
                    title: 'About Us',
                    subtitle: []
                },
                {
                    title: 'Trainings',
                    subtitle: [
                        'Riding Lesson',
                        'Safe Driving',
                        'Mountain Bike',
                        'Trail Drive',
                        'Pedaling',
                        'All Trainings',
                    ]
                },
                {
                    title: 'Packages',
                    subtitle: []
                },
                {
                    title: 'Blog',
                    subtitle: []
                },
                {
                    title: 'Contact',
                    subtitle: []
                },
            
            ]
        }
    },
    methods: {
        changeDropdownMenuIndex(index) {
            this.dropdownMenuIndex = index;
        }
    },
}
</script>

<template>
   <div id="header-container" class="container-fluid">
        <div class="row d-flex justify-content-center justify-content-between align-items-center h-100" @mouseleave="changeDropdownMenuIndex()">
            <div id="logo-container" class="col-2 d-flex align-items-center h-100">
                <img :src="store.methods.getImagePath('logo-gobike.png')" alt="logo" class="h-100">
            </div>
            <ul id="header-menu" class="col d-flex justify-content-center m-0">
                <li v-for="item, index in menuList" class="my-0 ms-4 menu-item" @click="changeDropdownMenuIndex(index)">
                    {{ item.title }}
                    <ul class="my-dropdown-menu p-0" @mouseleave="changeDropdownMenuIndex()">
                        <li v-for="item in menuList[index].subtitle" class="py-2 px-3" :class="(index == dropdownMenuIndex) ? '' : 'd-none'">
                            {{item}}
                        </li>
                    </ul>
                </li>
            </ul>
            <div id="upcoming-events" class="col-3 d-flex align-items-center">
                <img :src="store.methods.getImagePath('fries-menu-icon.png')" alt="fries menu icon" class="fries-menu">
                <button class="py-2 px-4 d-flex align-items-center black-button ms-4">
                    <img :src="store.methods.getImagePath('helmet.png')" alt="helmet">
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
@use '../src/styles/partials/variables' as *;

    #header-container{
        padding: 0 150px;
        position: fixed;
        z-index: 3;
        background-color: white;
        height: 10vh;
        img{
            transform: scale(0.8);
        }
    }
    #header-menu{
        list-style-type: none;
        .menu-item{
            font-weight: 500;
            cursor: pointer;
            position: relative;
            border-bottom: 3px solid white;
            &:hover{
                border-bottom: 3px solid black;
            }
            
            .my-dropdown-menu{
                z-index: 3;
                top: 40px;
                position: absolute;
                background-color: white;
                white-space: nowrap;
                border-radius: 5px;
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                li{
                    font-weight: 500;
                    border-radius: 5px;
                    &:hover{
                        cursor: pointer;
                        background-color: rgb(232,235,235);
                    }
                }
                
            }
        }
    }
    #upcoming-events{
        .menu-icon{
            font-size: 1.5rem;
        }
        .fries-menu{
            height: 30px;
            transform: rotate(180deg);
        }
        .black-button{
            @include black-button;
            
            img{
                filter: invert(100%);
                height: 55px;

            }
            span{
                font-weight: 400;
            }
        }
    }
    
</style>