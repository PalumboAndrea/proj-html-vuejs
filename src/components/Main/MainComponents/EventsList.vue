<script>
import {store} from '../../../../store'

export default {
    data(){
        return{
            store,
            eventsList: [
                {
                    name: 'Toronto Cycling Event 2023',
                    when: '2022-06-22 @01:30 - 2023-08-11 @ 07:00',
                    where: 'Toronto',
                    tag: 'Bycycle Race',
                    img: 'event1.jpg',
                },
                {
                    name: 'Istanbul Cycling Event 2023',
                    when: '2022-06-30 @01:30 - 2023-08-11 @ 07:00',
                    where: 'Istanbul',
                    tag: 'Bike Sport',
                    img: 'event2.jpg',
                },
                {
                    name: 'Paris Cycling Event 2023',
                    when: '2022-06-22 @01:30 - 2023-08-11 @ 07:00',
                    where: 'Paris',
                    tag: 'Cycling tour',
                    img: 'event3.jpg',
                },
                {
                    name: 'New Jersey Cycling Event 2023',
                    when: '2022-06-25 @01:30 - 2023-08-11 @ 07:00',
                    where: 'New Jersey',
                    tag: 'Bycycle Race',
                    img: 'event4.jpg',
                },
                {
                    name: 'London Cycling Event 2023',
                    when: '2022-06-28 @01:30 - 2023-08-11 @ 07:00',
                    where: 'London',
                    tag: 'Bike Sport',
                    img: 'event5.jpg',
                },
                {
                    name: 'Kiev Cycling Event 2023',
                    when: '2022-06-29 @01:30 - 2023-08-11 @ 07:00',
                    where: 'Kiev',
                    tag: 'Bycycle Race',
                    img: 'event6.jpg',
                },
                {
                    name: 'Colorado Cycling Event 2023',
                    when: '2022-06-28 @01:30 - 2023-08-11 @ 07:00',
                    where: 'Colorado',
                    tag: 'Bike Sport',
                    img: 'event7.jpg',
                },
                {
                    name: 'Amsterdam Cycling Event 2023',
                    when: '2022-06-28 @01:30 - 2023-08-11 @ 07:00',
                    where: 'Amsterdam',
                    tag: 'Bycycle Race',
                    img: 'event8.jpg',
                },
                {
                    name: 'Toronto Cycling Event 2023',
                    when: '2022-06-22 @01:30 - 2023-08-11 @ 07:00',
                    where: 'Toronto',
                    tag: 'Bycycle Race',
                    img: 'event9.jpg',
                },
                {
                    name: 'Paris Cycling Event 2023',
                    when: '2022-06-26 @01:30 - 2023-08-11 @ 07:00',
                    where: 'Paris',
                    tag: 'Bycycle Race',
                    img: 'event10.jpg',
                },
            ]
        }
    },
    methods:{
        getDateFormat(dateString){
            const date = dateString.toString().split(' ')[0].split('-')[2];
            return date
        },
        getMonthFormat(month){
            const newMonth = parseInt(month.toString().split(' ')[0].split('-')[1],10);
            return(this.store.monthsList[newMonth].name)
        }
    },
    created() {
    },
}
</script>

<template>
    <div class="container text-center pb-5">
        <h2 class="big-title">
            Don't Miss Our Events!
        </h2>
        <p class="subtitle mb-4">
            Get the amazing cycling experience
        </p>
        <div class="d-flex justify-content-between mx-3">
            <span>
                Events
            </span>
            <div class="d-flex align-items-center">
                <div class="box-view me-1">
                    <div class="int-square"></div>
                </div>
                <div class="list-view d-flex justify-content-center align-items-center">
                    <font-awesome-icon icon="fa-solid fa-bars" />
                </div>
                
            </div>
        </div>
        <div id="events-container" class="d-flex flex-wrap text-start">
            <div class="card" v-for="event in eventsList">
                <div class="event-date d-flex flex-column align-items-center justify-content-center">
                    <h3>
                        {{getDateFormat(event.when)}}
                    </h3>
                    <p class="m-0">
                        {{getMonthFormat(event.when)}}
                    </p>
                </div>
                <img :src="store.methods.getImagePath(event.img)" class="card-img-top" alt="event">
                <div class="card-body">
                    <p class="card-event-name">
                        {{ event.name }}
                    </p>
                    <p class="card-event-subtitle">
                        <font-awesome-icon icon="fa-solid fa-clock" />
                        {{ event.when }}
                    </p>
                    <p class="card-event-subtitle">
                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                        {{ event.where }}
                    </p>
                    <p class="event-tag px-2 py-1">
                        {{ event.tag }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../src/styles/partials/variables' as *;
    @use '../src/styles/general.scss' as *;

    span{
        font-size: 24px;
    }

    .list-view{
        background-color: rgb(245,245,245);
        height: 32px;
        width: 32px;
        border-radius: 3px;
    }
    .box-view{
        height: 32px;
        width: 32px;
        background-color: $main-bg-color;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        .int-square{
            background-color: white;
            height: 35%;
            width: 35%;
            border-radius: 1px;
        }
    }

    .card{
        width: calc(100% / 3 - 30px);
        margin: 15px;
        position: relative;
        &:hover{
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            transition: all .2s ease;
        }

        .event-date{
            position: absolute;
            background-color: rgb(255,255,255);
            border-radius: 3px;
            top: 15px;
            left: 15px;
            height: 60px;
            width: 60px;
            p{
                font-size: 1.1rem;
                color: grey;
            }
            h3{
                line-height: 12px;
                font-size: 1.7rem;
                margin: 12px 0 0 0;
            }
        }
        .card-event-name{
            font-weight: 500;
            font-size: 1.2rem;
        }
        .card-event-subtitle{
            font-size: 0.85rem;
        }
        .event-tag{
            font-size: 0.8rem;
            background-color: rgb(245,245,245);
            display: inline-block;
            border-radius: 5px;
        }
    }


</style>