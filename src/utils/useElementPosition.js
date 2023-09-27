import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useScrollTracker} from '@/utils/useScrollTracker.js';


//x: rect.left + window.scrollX,   X POINTS ARE NOT CORRECT FOR SURE.
export function useElementLocation(elementToTrack) {
  const { scrollY, viewportWidth, viewportHeight } = useScrollTracker();
  const pointA = ref({ x: 0, y: 0 });
  const pointB = ref({ x: 0, y: 0 });
  const pointC = ref({ x: 0, y: 0 });
  const pointD = ref({ x: 0, y: 0 });
  const width = ref(0);
  const height = ref(0);

  const updateElementPosition = () => {
    if (elementToTrack.value) {
      const rect = elementToTrack.value.getBoundingClientRect();
      pointA.value = { x: rect.left + window.scrollX, y: rect.top + window.scrollY };
      pointB.value = { x: rect.right + window.scrollX, y: rect.top + scrollY.value };
      pointC.value = { x: rect.right + window.scrollX, y: rect.bottom + scrollY.value };
      pointD.value = { x: rect.left + window.scrollX, y: rect.bottom + scrollY.value };
      width.value = rect.width;
      height.value = rect.height;
      // console.log(" pointA.value ",pointA.value.y," rect.top ",rect.top," scrollY ",scrollY.value);
    }
    
  };

  onMounted(() => {
    updateElementPosition();
    window.addEventListener('resize', updateElementPosition);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateElementPosition);
  });

  return {
    pointA,
    pointB,
    pointC,
    pointD,
    width,
    height,
  };
}


export function setAnimationProgress(elementRef,scrollPosition, elemStartPos, elemEndPos) {
  // console.log("i am here");
  let animationProgress = 0;
  if (scrollPosition >= elemStartPos && scrollPosition < elemEndPos) {
    animationProgress = (scrollPosition - elemStartPos) / (elemEndPos - elemStartPos);
  } else if (scrollPosition >= elemEndPos) {
    animationProgress = .999;
    return animationProgress;
  }
  const animationDelay = -animationProgress + "s";
  elementRef.value.style.animationDelay = animationDelay;
    // Set vendor-specific animation-delay properties
    elementRef.value.style.webkitAnimationDelay = animationDelay; // Webkit
    elementRef.value.style.mozAnimationDelay = animationDelay;    // Mozilla
    elementRef.value.style.msAnimationDelay = animationDelay;     // Microsoft
    elementRef.value.style.oAnimationDelay = animationDelay;      // Opera
    // console.log(elementRef.value.style['-webkit-animation-delay']," and ",elementRef.value.style['animation-delay'])
  return animationDelay
}

//to use 
{/* <template>
    <div>
      <!-- Element to track -->
      <div ref="elementToTrack">Element to Track</div>
  
      <!-- Display element's points and dimensions -->
      <p>A: {{ pointA.x }}, {{ pointA.y }}</p>
      <p>B: {{ pointB.x }}, {{ pointB.y }}</p>
      <p>C: {{ pointC.x }}, {{ pointC.y }}</p>
      <p>D: {{ pointD.x }}, {{ pointD.y }}</p>
      <p>Width: {{ width }}</p>
      <p>Height: {{ height }}</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useIntersectionObserver } from '@/utils/centralizedElementPositions'; // Import the composition function
  
  export default {
    setup() {
      const elementToTrack = ref(null);
  
      // Use the composition function to set up Intersection Observer
      const { pointA, pointB, pointC, pointD, width, height } = useIntersectionObserver(
        elementToTrack,
        (entries) => {
          // Intersection Observer callback function
          // You can add your custom logic here if needed
        }
      );
  
      return {
        elementToTrack,
        pointA,
        pointB,
        pointC,
        pointD,
        width,
        height,
      };
    },
  };
  </script>
   */}