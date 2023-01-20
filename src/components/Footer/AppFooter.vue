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
    <div id="footer-container" class="container-fluid pb-4">
        <div class="container d-flex pt-4 pb-5 justify-content-between">
            <AddressAndContact />
            <NewsLetter />
            <Links />
        </div>
        <div class="text-center">
            © 2022 Gobike - All rights Reserved.
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/variables' as *;

    *{
        color: white;
    }

    #footer-container{
        background-color: $main-bg-color;
    }
    
</style>