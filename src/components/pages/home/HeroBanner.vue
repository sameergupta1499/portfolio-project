<template>
  <div class="vpContainer hero-container position-relative flexCenter">
    <div class="hero-content flexCenterColumn overflow-visible">
      <h4 class="hero-description-top white-color overflow-visible">Hi, My name is Sameer Gupta,</h4>
    <div class="hero-hedding-container">
      <h2 class="hero-heading white-color fontface-revamped flexCenterColumn">
      FULL-STACK WEB DEVELOPER
    </h2>
    </div>
    <h4 class="hero-description-bottom white-color overflow-visible">
      with a strong focus on backend development and 4+ years of practical experience. I'm all about turning ideas into real, efficient solutions that help businesses grow. Welcome to my coding journey!</h4>
    </div>

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
}
.hero-hedding-container{
 padding:1rem;
 z-index: 2;
}
</style>
