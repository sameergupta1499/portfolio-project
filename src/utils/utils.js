// Define the throttle function
export function throttle(func, interval) {
    let lastExecutionTime = 0;
  
    return function (...args) {
      const currentTime = Date.now();
      if (currentTime - lastExecutionTime >= interval) {
        func(...args);
        lastExecutionTime = currentTime;
      }
    };
  }

  export function debounce(callback, delay) {
    let timerId;
  
    return function () {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        callback.apply(this, arguments);
      }, delay);
    };
  }
  export function getCSSVariableValue(variableName) {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
  }
  