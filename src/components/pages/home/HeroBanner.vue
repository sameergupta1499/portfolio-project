<template>
  <div class="vpContainer hero-container position-relative flexCenter">
    <div class="hero-content flexCenterColumn overflow-visible">
      <h5 class="hero-description-top white-color overflow-visible">Hi, My name is Sameer Gupta,</h5>
    <div class="hero-hedding-container">
      <h2 class="hero-heading white-color fontface-revamped flexCenterColumn">
      FULL-STACK WEB DEVELOPER
    </h2>
    </div>
    <h5 class="hero-description-bottom white-color overflow-visible">
      <!-- with a strong focus on backend development and 4+ years of practical experience. I'm all about turning ideas into real, efficient solutions that help businesses grow. Welcome to my coding journey! -->
        Welcome to my coding journey!
    </h5>
    <div class="flexCenter buttons-container">
      <button class="project-button font-weight-five" @click="scrollTO('section_about_me')"> ABOUT ME </button>
      <button class="recent-projects-button font-weight-five" @click="scrollTO('section_recent_project')"> RECENT PROJECTS </button>
    <button class="experience-button font-weight-five" @click="scrollTO('section_experience')">EXPERIENCE</button>
    </div>

    </div>

  </div>
</template>
  
<script>
import { setAnimationProgress, useElementLocation } from '@/utils/useElementPosition';
import { useScrollTracker } from '@/utils/useScrollTracker.js';
export default {
  setup() {
    let { scrollY, viewportWidth, viewportHeight,scrollbar } = useScrollTracker();
    const scrollTO = (elem_id)=>{
      let elem = document.getElementById(elem_id);
      console.log("called",elem,elem_id)
      scrollbar.scrollIntoView(elem);
    };
    return {
      scrollTO
    };
  },
  components: {
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/animations.scss";
@import "@/styles/variables.scss";

.hero-container {
  background-image: url('/hero-banner-bg.jpg');
  /* Replace with your image URL */
  background-size: cover;
  background-position: center;
  position: relative;
  // align-items: flex-start;
}

.hero-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  /* Adjust the opacity here */
  z-index: 1;
  /* Ensure the overlay is on top of the background image */
}
.hero-content{
  padding: 0 10%;
}

.hero-heading {
  font-weight: 600;
  z-index: 2;
  text-align: center;
}

.hero-description-top {
  z-index: 2;
}

.hero-description-bottom {
  z-index: 2;
  text-align: center;
  line-height: 1.8rem;
  margin-bottom: 1rem;
}

.buttons-container {
  padding-top:1rem;
  z-index: 2;
  flex-wrap: wrap;
}
button{
  padding:1rem 2rem;
  border-radius: 1rem;
  min-width: 10rem;
}
button:hover {
  background:#666;
  color:white;
  padding:1rem 2rem;
  border-radius: 1rem;
}
.experience-button{
  margin-left:5rem;
}
.recent-projects-button{
  margin-left:5rem;
}
.hero-hedding-container{
 padding:1rem;
 z-index: 2;
 flex-wrap: wrap;

}
@media (max-width: 768px) {
    .hero-hedding-container {
      // padding:0 5rem;
    }
    .buttons-container{
      // padding:0 5rem;
    }
    .experience-button{
      margin-left:0;
    }
    button{
      margin:.5rem;
    }
  }
</style>
