<script>
import AddressAndContact from './FooterComponents/AddressAndContact.vue'
import NewsLetter from './FooterComponents/NewsLetter.vue'
import Links from './FooterComponents/Links.vue'

export default {
    components: {
        AddressAndContact,
        NewsLetter,
        Links,
    }
    
}
</script>

<template>
    <div id="footer-container" class="container-fluid">
        <div class="container d-flex py-4">
            <AddressAndContact />
            <NewsLetter />
            <Links />
        </div>
    </div>
</template>

<style lang="scss" scoped>

    *{
        color: white;
    }

    #footer-container{
        background-color: black;
    
    }
    
</style>