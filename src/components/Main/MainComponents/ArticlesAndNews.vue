<script>
import {store} from '../../../../store'

export default {
  data(){
    return{
        store,
        articlesList: [
            {
                title: 'Road bike or mountain bike?',
                text: 'Compared to similat road bikes with a solid frame structure, [...]',
                img: 'news-bike5.jpg',
                date: '22.06.2022 - Bike',
            },
            {
                title: 'What is mountain biking called?',
                text: 'Mountain biking is one of the most popular outdoors sports, [...]',
                img: 'news-bike6.jpg',
                date: '22.06.2022 - Bike',
            },
            {
                title: 'How much should you cycle a day?',
                text: 'In order to get the right benefit from the exercise [...]',
                img: 'news-bike3.jpg',
                date: '22.06.2022 - Bike',
            },
            {
                title: 'How long does it take 5km by bike?',
                text: 'It takes 5 km and 10 minutes, sir. But at [...]',
                img: 'news-bike4.jpg',
                date: '22.06.2022 - Bike',
            },
        ]
    }
  }  
}
</script>

<template>
    <div id="articles-wrapper" class="container-fluid pt-5">
        <div class="container">
            <p class="big-title  text-center m-0">
                Resent New & Articles
            </p>
            <p class="subtitle text-center m-0">
                Important information about bike
            </p>
            <div class="news-container d-flex">
                <article class="single-article p-4 m-4" v-for="article in articlesList">
                    <img :src="store.methods.getImagePath(article.img)" alt="Article Image">
                    <p class="text-center">
                        {{ article.date }}
                    </p>
                    <p class="cards-title text-center">
                        {{ article.title }}
                    </p>
                    <p class="cards-subtitle">
                        {{ article.text }}
                    </p>
                    <div class="d-flex justify-content-center mt-4">
                        <button class="py-3 px-5">More</button>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../src/styles/partials/variables' as *;
    @use '../src/styles/general.scss' as *;


    #articles-wrapper{
        background-color: $light-grey-bgcolor;
        padding-bottom: 120px;

        .single-article{
            width: calc(100% / 4);
            height: 400px;
            box-shadow: 3px 3px 13px 0 rgb(0 0 0 / 10%);
            border-radius: 8px;
            position: relative;

            img{
                width: 100%;
            }

            div{
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translate(-50%, 0)
            }

            button{
                @include black-button;
            }
        }
    }

</style>