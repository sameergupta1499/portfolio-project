<template>
  <v-main>
    <NavigationBar v-if="scrollbar !== null" />
    <div id="scroll-wrapper">
      <div id="scroll-container-parent">
        <div id="scroll-container" v-if="scrollbar !== null">
          <HeroBanner />
          <ProjectComponent />
        </div>
      </div>
    </div>

  </v-main>
</template>
<script>
import { onMounted, provide, ref } from 'vue';
import DummyComponent from '@/components/common/DummyComponent.vue';
import NavigationBar from '@/components/common/NavigationBar.vue';
import HeroBanner from '@/components/pages/home/HeroBanner.vue';
import ProjectComponent from '@/components/pages/home/ProjectComponent.vue';
import { init } from '@/utils/smoothScroll.js';
export default {
  setup() {
    const scrollbar = ref(null);
    onMounted(() => {
      scrollbar.value = init("scroll-wrapper");
    });
    provide('scrollbar',scrollbar)
    return {
      scrollbar
    };
  },
  components: {
    DummyComponent,
    NavigationBar,
    HeroBanner,
    ProjectComponent,
  },
};
</script>
<style scoped>
#scroll-wrapper {
  height: 100vh;
  width: 100%;
  overflow: auto;
  background-color: var(--black);
}

/* .container-scrollbar {
  height: 100vh;
  width: 100%;
  overflow: auto;
} */
</style>

