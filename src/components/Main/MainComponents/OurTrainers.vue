<script>
import {store} from '../../../../store'

export default {
    data(){
        return{
            store,
            trainersList: [
                {
                    name: 'Michael Lee',
                    role: 'Biker',
                    img: 'biker1.jpg',
                },
                {
                    name: 'Robert Lee',
                    role: 'Biker',
                    img: 'biker4.jpg',
                },
                {
                    name: 'John Doe',
                    role: 'Biker',
                    img: 'biker3.jpg',
                },
                {
                    name: 'Emily Brown',
                    role: 'Biker',
                    img: 'biker2.jpg',
                },
            ]
        }
    }
    
}
</script>

<template>
    <div class="container-fluid">
        <div class="container text-center py-4">
            <div class="tile-container">
                <p class="big-title m-0">
                    Our Expert Trainers
                </p>
                <p class="subtitle">
                    Learn to ride a bike from the experts.
                </p>
            </div>
            <div class="cards-container d-flex mt-4">
                <div class="cards-wrapper m-2 d-flex justify-content-center align-items-center" v-for="trainer in trainersList">
                    <div class="my-card">
                        <img :src="store.methods.getImagePath(trainer.img)" class="mb-4" alt="Trainer">
                        <div class="card-body">
                            <p class="card-trainer-name mb-1">
                                {{ trainer.name }}
                            </p>
                            <p class="card-trainer-role mb-2">
                                {{ trainer.role }}
                            </p>
                            <p class="px-2">
                                <font-awesome-icon icon="fa-brands fa-facebook"/>
                                <font-awesome-icon icon="fa-brands fa-instagram" class="icon-social ms-2"/>
                                <font-awesome-icon icon="fa-brands fa-twitter" class="icon-social ms-2"/>
                            </p>
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

    .container-fluid{
        background: linear-gradient(to bottom, rgb(251,251,251) 0%, rgb(251,251,251) 40%, white 20%, white 100%);

        .cards-wrapper{
            background-color: rgb(247,247,247);
            width: calc(100% / 4);
            height: 400px;
            .my-card{
                width: 95%;
                height: 95%;
                background-color: $main-bg-color;
                color: white;

                &:hover{
                    border-radius: 5px;
                }
            
                &:hover img{
                    opacity: (0.4);
                    border-radius: 5px;
                    height: 230px;
                    transition: all .6s ease;
                }
                img{
                    width: 100%;
                    object-fit: cover;
                    object-position: top;
                    height: 240px;
                }
                .card-trainer-name{
                    font-weight: 500;
                    font-size: 1.2rem;
                }
                .card-trainer-role{
                    color: grey;
                    font-weight: 500;
                }
            }
        }

        
        
    }


</style>