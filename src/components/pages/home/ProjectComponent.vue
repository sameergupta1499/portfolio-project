<template>
    <SectionHeadingComponent data="RECENT PROJECTS" section_id="section_recent_project"/>

    <!-- ECOMMERCE WEBSITE -->
    <div class="container project-container-wrapper position-relative">
        <div class="flexCenter project-container overflow-visible">
            <VideoComponent
                videoSrc="https://ik.imagekit.io/4wtsetrh6/portfolio-project/portfolioProjectVideo.mp4?updatedAt=Latest" />
            <div class="project-content-container padding-left flexCenterColumn overflow-visible">
                <div class="project-content-header flexCenter">
                    <h4 class="white-color font-weight-five overflow-visible">
                        Ecommerce Website
                    </h4>
                    <a href="https://sameergupta1499.github.io/ecommerce_website_frontend/" target="_blank"><button
                            class="try-now-button">Try Now</button></a>
                </div>
                <h6 class="project-content-description white-color ">
                    Fully functional product listing page for an ecommerce website.
                </h6>
                <h6 class="project-content-description project-content-tech font-weight-five overflow-visible">
                    TECHNOLOGIES :
                </h6>
                <h6 class="project-content-description ">
                    <span>Backend - </span> Python, Django Rest Framework, PostgreSQL, Redis Cache.
                </h6>
                <h6 class="project-content-description">
                    <span>Frontend - </span> Vue3
                </h6>
                <h6 class="project-content-description">
                    <span>DevOps - </span> EC2 (Linux), Gunicorn, Nginx, Github Workflows & Actions, Github Pages, Amazon
                    RDS PostgreSQL
                </h6>
            </div>


        </div>
    </div>

    <!-- HUE AND TINT STUDIO -->
    <div class="container project-container-wrapper position-relative">
        <div class="flexCenter hue-tint-project-container project-container overflow-visible">
            <div class="project-content-container padding-right flexCenterColumn overflow-visible">
                <div class="project-content-header flexCenter">
                    <h4 class="white-color font-weight-five overflow-visible">
                        Hue And Tint Studio
                    </h4>
                    <a href="https://www.hueandtintstudio.com/" target="_blank"><button class="try-now-button">Try
                            Now</button></a>
                </div>
                <h6 class="project-content-description white-color ">
                    A portfolio mobile responsive website showcasing the creative works of a graphic designer.
                </h6>
                <h6 class="project-content-description ">
                    <a href="https://www.hueandtintstudio.com/" target="_blank"><button class="try-now-button padding-rem">SITE UNDER CONSTRUCTION</button></a>
                </h6>
                <h6 class="project-content-description project-content-tech font-weight-five overflow-visible">
                    TECHNOLOGIES :
                </h6>
                <h6 class="project-content-description">
                    <span>Frontend - </span> Vue3, Matter-js, Vuetify.
                </h6>
                <h6 class="project-content-description">
                    <span>DevOps - </span> EC2 (Linux), Nginx, Route53, Github Workflows & Actions
                </h6>
            </div>

            <VideoComponent
                videoSrc="https://ik.imagekit.io/4wtsetrh6/portfolio-project/hueandtintstudiovideo.mp4?updatedAt=Latest" />
        </div>
    </div>
</template>
    
<script>
import SectionHeadingComponent from '@/components/pages/home/SectionHeadingComponent.vue';
import VideoComponent from '@/components/pages/home/VideoComponent.vue';

export default {
    setup() {
        return {
        };
    },
    components: {
        SectionHeadingComponent,
        VideoComponent
    },
};
</script>
<style lang="scss" scoped>
@import "@/styles/animations.scss";
@import "@/styles/variables.scss";

.project-container-wrapper {
    padding: 5rem 0;
}

.padding-right {
    padding-right: 5%;
}

.padding-left {
    padding-left: 5%;
}



.project-container {
    flex-wrap: wrap;
}

.project-content-container {
    width: 40%;
    align-items: flex-start;
}

.project-content-header {
    padding-bottom: 1rem;
    font-weight: 500;
    width: 100%;
    justify-content: flex-start;

    a {
        margin-left: 15%;
        cursor: pointer;
    }
}

.project-content-tech {
    padding: 0.7rem 0 0.2rem 0 !important;
    text-decoration: underline;
    text-underline-offset: .3rem;
}

.project-content-description {
    line-height: 1.5rem;
    color: white;
    padding-top: .5rem;

    span {
        font-size: inherit;
        font-weight: 500;
        line-height: 1.5rem;
        color: white;
    }
}

@media (max-width: 768px) {
    .project-content-container {
        width: 80%;
        padding: 10%;
        text-align: center;
        align-items: center;
    }

    .project-content-header {
        text-align: center;
        justify-content: center;
    }
    .hue-tint-project-container {
        flex-direction: column-reverse;
    }
}

button {
    padding: 0.5rem 0rem;
    border-radius: 1rem;
    min-width: 6rem;
    background-color: white;
    color: black;
    cursor: pointer;
    // transition: background-color 0.3s, color 0.3s;
    animation: buttonAnimation 1s infinite;
}

@keyframes buttonAnimation {
    0% {
        background-color: white;
        color: black;
    }

    50% {
        background-color: grey;
        color: white;
    }

    100% {
        background-color: white;
        color: black;
    }
}</style>
  