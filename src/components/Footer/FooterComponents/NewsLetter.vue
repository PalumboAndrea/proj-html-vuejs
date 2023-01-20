<script>

export default {
    
}
</script>

<template>
    <div id="newsletter-wrapper" class="mt-3">
        <h3 class="mb-2">
            Join Our Newsletter
        </h3>
        <p>
            Subscribe to receive useful information.
        </p>
        <div class="input-container mt-4">
            <input type="email" placeholder="Your email address" class="p-3">
            <button class="mt-2">
                Subscribe
                <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    #newsletter-wrapper{
        width: 450px;

        h3{
            font-size: 2rem;
            font-weight: 500;
        }
        p:nth-child(2){
            font-size: 0.85rem;
        }

        .input-container{
            input{
                width: 100%;
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;
                border: none;
                height: 60px;
                &:focus{
                    outline: none;
                }
            }

            button{
                width: 100%;
                border: none;
                background-color: white;
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;
                height: 60px;
            }
        }

        
    }

    
    
</style>