<template>
  <div class="vpContainer hero-container flexCenterColumn">
    <h2 class="hero-heading white-color">
      FULL STACK <br/>DEVELOPER
    </h2>
    <h4 class="hero-description white-color">
      Hey there, I'm Sameer Gupta, a software engineer with a strong focus <br/>on backend development and four years of
      practical experience. I'm all <br/>about turning ideas into real, efficient solutions that help businesses <br/>grow. Welcome
      to my coding journey!
    </h4>
  </div>
</template>
  
<script>
export default {
  setup() {
    return {
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
  align-items: flex-start;
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
.hero-heading {
  font-weight: 600;
  padding:4rem 4rem 2rem 4rem;
}
.hero-description {
  padding:0 4rem 2rem 4rem;
  font-family: 'Josefin Sans';
}
</style>
