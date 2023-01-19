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
                    img: 'biker2.jpg',
                },
                {
                    name: 'John Doe',
                    role: 'Biker',
                    img: 'biker3.jpg',
                },
                {
                    name: 'Emily Brown',
                    role: 'Biker',
                    img: 'biker4.jpg',
                },
            ]
        }
    }
    
}
</script>

<template>
    <div class="container-fluid">
        <div class="container text-center py-5">
            <div class="tile-container">
                <p class="title">
                    Our Expert Trainers
                </p>
                <p class="subtitle">
                    Learn to ride a bike from the experts.
                </p>
            </div>
            <div class="cards-container d-flex">
                <div class="my-card m-2" v-for="trainer in trainersList">
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
</template>

<style lang="scss" scoped>
    @use '../src/styles/partials/variables' as *;
    @use '../src/styles/general.scss' as *;

    .container-fluid{
        background: linear-gradient(to bottom, rgb(251,251,251) 0%, rgb(251,251,251) 40%, white 20%, white 100%);

        .my-card{
            width: calc(100% / 4);
            border: 10px solid rgb(247,247,247);
            background-color: black;
            color: white;


           img{
            width: 100%;
            object-fit:cover;
            object-position: top;
            height: 220px;
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


</style>