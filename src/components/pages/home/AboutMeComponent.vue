<template>
    <div class="about-me-wrapper">
        <SectionHeadingComponent data="ABOUT ME" section_id="section_about_me" />
        <div class="container flexCenter container-wrapper position-relative">
            <div class="about-me-img-container">
                <img src="/about_me.png" id="about-me-img" alt="about-me" />
            </div>
            <div class="about-me-content-container">
                <h5 class="white-color">Hey there, I'm Sameer Gupta, a web developer based in Toronto, Canada. With over 4.5 years of experience, I'm your go-to guy for Python and backend wizardry, with a special affinity for Django Rest Framework.<br /><br />

But that's not the whole story. My skill set is a dynamic mix that includes Vue3, HTML, CSS, JavaScript, PostgreSQL, Redis, Restful APIs, and a host of other tech tools. Clean code is my mantra, and I'm a strong advocate for test-driven development. From software design to unit testing, I've got the know-how.<br/><br/>

My journey has seen me delve into the world of Full Stack Web Development, and I'm well-versed in Nginx, Gunicorn, Github Actions, Docker, Jira, and Git. Whether it's crafting sleek desktop apps or dynamic web experiences, I'm always ready to tackle challenges and deliver outstanding results.<br/><br/>

Let's collaborate and create something truly extraordinary!</h5>
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
    width: 60%;
    margin-left: 2%;
    padding: 3%;
    background: grey;
    border-radius: 3rem;
    // Vendor-specific prefixes for 'border-radius'
    -webkit-border-radius: 3rem;
    -moz-border-radius: 3rem;
    border-radius: 3rem;
    h6{
        br{
            padding-bottom:1rem;
        }
    }
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
