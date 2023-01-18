import { reactive } from 'vue';

export const store = reactive({
    methods: {
        getImagePath: function (imgPath){
            return new URL(`/src/assets/img/${imgPath}`, import.meta.url).href;
        }
    },
});