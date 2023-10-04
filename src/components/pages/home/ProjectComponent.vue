<template>
    <ProjectsSectionHeadingComponent />
    <!-- ECOMMERCE WEBSITE -->
    <div class="vpContainer hero-container position-relative">
        <div class="flexCenter project-container">
            <VideoComponent videoSrc="/ecommerce-video.mp4" />
            <div class="project-content-container flexCenterColumn overflow-visible">
                <div class="project-content-header flexCenter">
                    <h4 class="white-color font-weight-five overflow-visible">
                        Ecommerce Website
                    </h4>
                    <a href="https://sameergupta1499.github.io/ecommerce_website_frontend/" target="_blank"><button class="try-now-button">Try Now</button></a>
                </div>
                <h6 class="project-content-description white-color ">
                    Fully functional product listing page for an ecommerce website.
                </h6>
                <h6 class="project-content-description font-weight-five">
                    TECH:
                </h6>
                <h6 class="project-content-description ">
                    <span>BACKEND: </span>  Python Django Rest Framework, PostgreSQL, Redis Cache.
                </h6>
                <h6 class="project-content-description">
                    <span>FRONTEND: </span>  Vue3
                </h6>
                <h6 class="project-content-description">
                    <span>DevOps: </span>   EC2 (Linux), Gunicorn, Nginx, Github Workflows & Actions, Github Pages, Amazon RDS PostgreSQL
                </h6>
            </div>


        </div>
    </div>
</template>
    
<script>
import ProjectsSectionHeadingComponent from '@/components/pages/home/ProjectsSectionHeadingComponent.vue';
import VideoComponent from '@/components/pages/home/VideoComponent.vue';

export default {
    setup() {
        return {
        };
    },
    components: {
        ProjectsSectionHeadingComponent,
        VideoComponent
    },
};
</script>
<style lang="scss" scoped>
@import "@/styles/animations.scss";
@import "@/styles/variables.scss";

.project-container {
    flex-wrap: wrap;
}

.project-content-container {
    width: 40%;
    padding-left: 5%;
    align-items: flex-start;
}

.project-content-header {
    padding-bottom: 1rem;
    font-weight: 500;
    width: 100%;
    justify-content: flex-start;
    a {
    margin-left: 15%;
    cursor:pointer;
    }
}

.project-content-description{
    line-height: 1.5rem;
    color:white;
    padding-top:.5rem;
    span {
        font-size: inherit;
        font-weight: 500;
        line-height: 1.5rem;
        color:white;
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
    }
}

button {
    padding: 0.5rem 0rem;
    border-radius: 1rem;
    min-width: 6rem;
    background-color: white;
    color: black;
    cursor:pointer;
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
}
</style>
  