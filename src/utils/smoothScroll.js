import { ref, onMounted, onBeforeUnmount } from 'vue';
import Scrollbar from 'smooth-scrollbar';

class DisableScrollPlugin extends Scrollbar.ScrollbarPlugin {
  static pluginName = 'disableScroll';
  
  static defaultOptions = {
    direction: null
  }
  
  transformDelta(delta) {
    if(this.options.direction) {
      delta[this.options.direction] = 0;
    }
    
    return { ...delta };
  }
}


export function init(elem) {
    let scrollbar = Scrollbar.init(document.getElementById(elem));
    // Scrollbar.use(DisableScrollPlugin)
    // let scrollbar = Scrollbar.init(document.getElementById(elem), {
    //   // damping: 0.2,
    //   plugins: {
    //     disableScroll: { direction: 'x' }
    //   }
    // });
    scrollbar.track.xAxis.element.remove();
    scrollbar.update();
    scrollbar.addListener((s) => {
      // console.log(s.offset.y); // returns “scrollTop” equivalent
    });
    return scrollbar;
};
