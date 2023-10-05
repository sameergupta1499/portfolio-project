import { ref, onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';
import Scrollbar from 'smooth-scrollbar';

const scrollY = ref(0);
const viewportWidth = ref(window.innerWidth);
const viewportHeight = ref(window.innerHeight);







// Add event listeners for window resize
// const handleResize = () => {
//   viewportWidth.value = window.innerWidth;
//   viewportHeight.value = window.innerHeight;
// };

// onMounted(() => {
//   window.addEventListener('resize', handleResize);
// });

// onBeforeUnmount(() => {
//   window.removeEventListener('resize', handleResize);
// });

export function useScrollTracker() {
    // Initialize SmoothScrollbar and GSAP ticker once the DOM is ready
    let scrollbar = Scrollbar.get(document.getElementById("scroll-wrapper"));
  
    gsap.ticker.add(() => {
      scrollY.value = scrollbar.offset.y;
    });
  return {
    scrollY,
    viewportWidth,
    viewportHeight,
    scrollbar
  };
}
