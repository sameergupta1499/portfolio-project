// maskerFunctions.js
import { ref } from 'vue';

export function useMaskerFunctions(yOffset) {
  const masker = ref(null);
  const small = '.9rem';
  const large = '15rem';

  const updateCursorPoints = (event) => {
    const newX = event.clientX + 'px';
    const newY = (event.clientY +yOffset.value) + 'px';  //subtracting window.scrollY since we have the Gscroll Enable

    // Use the ref to access the masker element and set its style properties
    masker.value.style.setProperty('--mask-position-x', newX);
    masker.value.style.setProperty('--mask-position-y', newY);
};

  const updateCursorSize = (size) => {

    let newSize = '0px';
    if (size === 'small') {
      newSize = small;
    } else if (size === 'large') {
      newSize = large;
    }
    // Use the ref to access the masker element and set its style properties
    masker.value.style.setProperty('--mask-width', newSize);
  };

  return {
    masker,
    updateCursorPoints,
    updateCursorSize,
  };
}
