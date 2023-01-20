<script>
import {store} from '../../../../store'

export default {
    data(){
        return{
            store,
            packsList: [
                {
                    name: 'Basic',
                    subtitle: 'Learn to ride a bike from the professionals.',
                    accessories: [
                        {
                            accessorie: 'Phone Mountaineer bike training',
                            status: true, 
                        },
                        {
                            accessorie: 'Remote Excellent bike service',
                            status: true, 
                        },
                        {
                            accessorie: 'Onsite Safe cycling training',
                            status: true, 
                        },
                        {
                            accessorie: 'Saafety helmet on bike',
                            status: false, 
                        },
                        {
                            accessorie: 'Free bikes for children',
                            status: false, 
                        },
                    ],
                    icon: 'handshake-icon.png',
                    price: '$1800',
                },
                {
                    name: 'Standard',
                    subtitle: 'Learn to ride a bike from the professionals.',
                    accessories: [
                        {
                            accessorie: 'Phone Mountaineer bike training',
                            status: true, 
                        },
                        {
                            accessorie: 'Remote Excellent bike service',
                            status: true, 
                        },
                        {
                            accessorie: 'Onsite Safe cycling training',
                            status: true, 
                        },
                        {
                            accessorie: 'Saafety helmet on bike',
                            status: false, 
                        },
                        {
                            accessorie: 'Free bikes for children',
                            status: false, 
                        },
                    ],
                    icon: 'construction-helmet.png',
                    price: '$2500',
                },
                {
                    name: 'Premium',
                    subtitle: 'Learn to ride a bike from the professionals.',
                    accessories: [
                        {
                            accessorie: 'Phone Mountaineer bike training',
                            status: true, 
                        },
                        {
                            accessorie: 'Remote Excellent bike service',
                            status: true, 
                        },
                        {
                            accessorie: 'Onsite Safe cycling training',
                            status: true, 
                        },
                        {
                            accessorie: 'Saafety helmet on bike',
                            status: false, 
                        },
                        {
                            accessorie: 'Free bikes for children',
                            status: false, 
                        },
                    ],
                    icon: 'helmet.png',
                    price: '$5000',
                }
            ]
        }
    }
    
}
</script>

<template>
    <div class="container text-center">
        <div class="prize d-flex align-items-center justify-content-center m-auto mb-2">
            <img :src="store.methods.getImagePath('prize-icon.png')" alt="" class="award">
        </div>
        <p class="big-title mb-0">
            Special Packs
        </p>
        <p class="subtitle">
            Select pricing plan to get more
        </p>
        <div class="plans-container d-flex">
            <div class="plan m-3" v-for="plan in packsList">
                <div class="plan-reverse">
                    <p class="plan-name-reverse m-0">
                        {{ plan.name }}
                    </p>
                    <p class="prize">
                        {{ plan.price }}
                    </p>
                    <button>
                        Send Request!
                    </button>
                </div>
                <div class="plan-normal">
                    <img :src="store.methods.getImagePath(plan.icon)" alt="" class="icon mt-4">
                    <p class="plan-name mt-3">
                        {{ plan.name }}
                    </p>
                    <p>
                        {{ plan.subtitle }}
                    </p>
                    <div class="accessories">
                        <div v-for="item, index in plan.accessories" class="d-flex flex-column align-items-center">
                            <div class="d-flex align-items-center">
                                <font-awesome-icon icon="fa-solid fa-check" v-if="item.status === true" class="accessorie-icon"/>
                                <font-awesome-icon icon="fa-solid fa-x" v-else class="accessorie-icon"/>
                                {{ item.accessorie }}
                            </div>
                            <hr class="m-2" :class="(index == (plan.accessories.length - 1)) ? 'd-none' : ''">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../src/styles/partials/variables' as *;
    @use '../src/styles/general.scss' as *;

    .container{
        padding-top: 120px;
        padding-bottom: 50px;

        .prize{
            color: white;
            background-color: $main-bg-color;
            height: 80px;
            width: 90px;
            border-radius: 5px;

            .award{
                filter: invert(100%);
                height: 60px;
                width: 60px;
            }
        }

        .plan{
            height: 600px;
            width: calc(100% / 3);
            border-radius: 5px;
            background-image: -webkit-linear-gradient(-83deg, $main-bg-color 45%, white 45%);
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
            position: relative;
            &:hover{
                transition: all .6s ease;
                background-image: -webkit-linear-gradient(-83deg, $main-bg-color 100%, white 45%);
            }
            &:hover .plan-normal{
                transition-delay:1s;
                display: none;
            }
            &:hover .plan-reverse{
                transition: all 0.5s ease-in;
                opacity: 1;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                visibility: visible;
            }
            .plan-reverse{
                opacity: 0;
                position: absolute;
                visibility: hidden;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                .prize{
                    font-size: 2rem;
                    margin: 0 auto;
                    font-weight: bold;
                    background-color: $main-bg-color;
                }

                button{
                    border: 1px solid white;
                    background-color: $main-bg-color;
                    color: white;
                    padding: 25px 55px;
                    font-weight: 500;
                    margin-top: 100px;
                    border-radius: 3px;
                    white-space: nowrap;
                }
            }

            .icon{
                filter: invert(100%);
                height: 100px;
                color: white;
            }

            .plan-name,
            .plan-name-reverse{
                font-weight: 700;
                font-size: 1.3rem;
            }
            
            p{
                color: white;
            }

            .accessories{
                margin-top: 110px;
                hr{
                    border: 1px solid lightgrey;
                    width: 80%;
                }

                .accessorie-icon{
                    font-size: 0.7rem;
                    margin-right: 8px;
                }
            }
        }
    }

</style>