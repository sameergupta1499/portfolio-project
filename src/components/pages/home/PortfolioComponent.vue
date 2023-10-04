<template>
    <ProjectsLineComponent />
    <div class="vpContainer hero-container position-relative">
        <div class="flexCenter project-container">
            <VideoComponent videoSrc="/ecommerce-video.mp4" />
            <div class="project-content-container flexCenterColumn overflow-visible">
                <h4 class="project-content-header white-color overflow-visible">
                    Ecommerce Website
                </h4>
                <h6 class="project-content-description white-color">
                    Fully functional product listing page for an ecommerce website.
                </h6>
                <h6 class="project-content-description font-weight-five white-color">
                    TECH:
                </h6>
                <h6 class="project-content-description white-color">
                    Backend: Python Django Rest Framework, PostgreSQL, Redis Cache.
                </h6>
                <h6 class="project-content-description white-color">
                    Frontend: Vue3
                </h6>
                <h6 class="project-content-description white-color">
                    DevOps: EC2 (Linux), Gunicorn, Nginx, Github Workflows & Actions, Github Pages, Amazon RDS PostgreSQL
                </h6>
            </div>


        </div>
    </div>
</template>
    
<script>
import ProjectsLineComponent from '@/components/pages/home/ProjectsLineComponent.vue';
import VideoComponent from '@/components/pages/home/VideoComponent.vue';

export default {
    setup() {
        return {
        };
    },
    components: {
        ProjectsLineComponent,
        VideoComponent
    },
};
</script>
<style lang="scss" scoped>
@import "@/styles/animations.scss";
@import "@/styles/variables.scss";

.project-container{
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
    text-decoration: underline;
    text-underline-offset: 1rem;
}

.project-content-description {
    line-height: 1.8rem;
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
</style>
  