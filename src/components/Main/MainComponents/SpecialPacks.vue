<script>

export default {
    data(){
        return{
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
                    ]
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
                    ]
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
                    ]
                }
            ]
        }
    }
    
}
</script>

<template>
    <div class="container py-5 text-center">
        <div class="prize d-flex align-items-center justify-content-center m-auto mb-2">
            <font-awesome-icon icon="fa-solid fa-award" class="award"/>
        </div>
        <p class="title mb-0">
            Special Packs
        </p>
        <p class="subtitle">
            Select pricing plan to get more
        </p>
        <div class="plans-container d-flex">
            <div class="plan m-3" v-for="plan in packsList">
                <font-awesome-icon icon="fa-solid fa-award" class="icon mt-4"/>
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
</template>

<style lang="scss" scoped>
    @use '../src/styles/partials/variables' as *;
    @use '../src/styles/general.scss' as *;
    
    .container{
        height: 1000px;

        .prize{
            color: white;
            background-color: black;
            height: 80px;
            width: 90px;
            border-radius: 5px;

            .award{
                height: 50px;
                width: 50px;
            }
        }

        .plan{
            height: 600px;
            width: calc(100% / 3);
            background-color: #013A6B;
            border-radius: 5px;
            background-image: -webkit-linear-gradient(-83deg, black 45%, white 45%);
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

            .icon{
                height: 80px;
                color: white;
            }

            .plan-name{
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