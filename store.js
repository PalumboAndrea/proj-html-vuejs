import { reactive } from 'vue';

export const store = reactive({
    methods: {
        getImagePath: function (imgPath){
            return new URL(`/src/assets/img/${imgPath}`, import.meta.url).href;
        }
    },
    monthsList:{
        1: {
            name: 'Jan'
        },
        2: {
            name: 'Feb'
        },
        3: {
            name: 'Mar'
        },
        4: {
            name: 'Apr'
        },
        5: {
            name: 'May'
        },
        6: {
            name: 'Jun'
        },
        7: {
            name: 'Jul'
        },
        8: {
            name: 'Aug'
        },
        9: {
            name: 'Sep'
        },
        10: {
            name: 'Oct'
        },
        11: {
            name: 'Nov'
        },
        12: {
            name: 'Dec'
        },
        

    }
});