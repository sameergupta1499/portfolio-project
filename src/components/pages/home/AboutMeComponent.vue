<template>
    <div class="about-me-wrapper">
        <SectionHeadingComponent data="ABOUT ME" section_id="section_about_me" />
        <div class="container flexCenter container-wrapper position-relative">
            <div class="about-me-img-container">
                <img src="/about_me.png" id="about-me-img" alt="about-me" />
            </div>
            <div class="about-me-content-container">
                <h5 class="white-color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore, eum
                    quibusdam
                    velit enim
                    iste culpa eveniet aliquam. Veniam, quasi fugiat? Vitae nobis cupiditate iure autem beatae consequuntur
                    nam!
                    Animi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore, eum quibusdam velit enim
                    iste culpa eveniet aliquam. Veniam, quasi fugiat? Vitae nobis cupiditate iure autem beatae consequuntur
                    nam!
                    Animi!</h5>
            </div>
        </div>
    </div>
</template>



<script>
import SectionHeadingComponent from '@/components/pages/home/SectionHeadingComponent.vue';

export default {
    setup() {
        return {
        };
    },
    components: {
        SectionHeadingComponent,
    },
};
</script>
 

<style lang="scss" scoped>
.container-wrapper {
    padding: 2rem 0 5rem 0;
    flex-wrap: wrap;
}

.about-me-img-container {
    width: 25%;

    img {
        width: 100%;
        object-fit: contain;
        filter: grayscale(100%);
    }

    img:hover {
        filter: none;
    }
}

.about-me-content-container {
    width: 40%;
    margin-left: 5%;
    padding: 3%;
    background: grey;
    border-radius: 3rem;
    // Vendor-specific prefixes for 'border-radius'
    -webkit-border-radius: 3rem;
    -moz-border-radius: 3rem;
    border-radius: 3rem;
}
@media (max-width: 768px) {
    .about-me-img-container{
        width:60%;
    }
    .about-me-content-container{
        width:70%;
        margin-left: 0;
        padding: 5%;
        margin-top:5%;
    }
}
</style>
