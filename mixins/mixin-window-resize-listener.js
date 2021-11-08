/********************

## Configurable Pros ##

_onResize
  Function to fire on debounced resize

********************/


import {logger} from '@/utils/logger'
import {debounce} from '@/utils/debounce'

const log = logger({
  title: "MIXIN",
  time: false,
})

export const mixinWindowResizeListener = {

  mounted() {

    log.group(`mixinWindowResizeListener called from ${this.logRef}`);
    
    // set event listener
    log.task('set event listener');
    window.addEventListener(
      'resize',
      this.$_mixinWindowResizeListener_setDimensions,
    );
    this.$_mixinWindowResizeListener_setDimensions();
    log.groupEnd();
  },

  beforeDestroy() {
    log.group(this.mixinWindowResizeListener_groupTitle)
    log.task('remove event listener')
    window.removeEventListener(
      'resize',
      this.$_mixinWindowResizeListener_setDimensions
    )
    log.groupEnd();
  },

  methods: {
    mixinWindowResizeListener_onResize() {
      log.group(`mixinWindowResizeListener called from ${this.logRef}`);
      log.warn('Set mixinWindowResizeListener_onResize method on importing component to define resize behaviour')
      log.line(`resize: ${window.innerWidth} x ${window.innerHeight}`);
      log.groupEnd()
    },
    $_mixinWindowResizeListener_setDimensions: debounce(function() {
      this.mixinWindowResizeListener_onResize();
    }, 500) 
  }

}