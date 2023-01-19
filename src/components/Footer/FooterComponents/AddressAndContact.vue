<script>
import {store} from '../../../../store'

export default {
    data(){
        return{
            store,
            contacts: {
                    address: 'New Jersey, USA',
                    phoneNumber: '+1 (234) 567 89 10',
                    email: 'example@example.com',
                },
        }
    }
    
}
</script>

<template>
    <div class="wrapper">
        <img :src="store.methods.getImagePath('logo-gobike.png')" alt="Logo">
        <p>
            <font-awesome-icon icon="fa-solid fa-location-dot" class="contacts-icon"/>
            {{ contacts.address }}
        </p>
        <p>
            <font-awesome-icon icon="fa-solid fa-phone-volume" class="contacts-icon"/>
            {{ contacts.phoneNumber }}
        </p>
        <p>
            <font-awesome-icon icon="fa-regular fa-envelope" class="contacts-icon"/>
            {{ contacts.email }}
        </p>
        <div>
            <font-awesome-icon icon="fa-brands fa-facebook-f" class="adress-icon"/>
            <font-awesome-icon icon="fa-brands fa-instagram" class="adress-icon"/>
            <font-awesome-icon icon="fa-brands fa-twitter" class="adress-icon"/>

        </div>
        
    </div>
</template>

<style lang="scss" scoped>

    .wrapper{
        width: 300px;
        img{
            filter: invert(100%);
            width: 80%;
        }

        p{
            display: flex;
            align-items: center;
            color: white;
            margin: 20px 0;

            .contacts-icon{
                width: 50px;
                font-size: 1.6rem;
                filter: brightness(0.8);
            }
        }

        .adress-icon{
            color: white;
            padding: 5px;
            height: 30px;
            width: 50px;
            border: 1px solid grey;
            filter: brightness(0.8);
            margin: 0 10px;
        }
    }
    

    
</style>