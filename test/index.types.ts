import Vue from 'vue';

// or as a component
import FpaInlineSvg from '../';
import {FpaInlineSvgComponent, FpaInlineSvgPlugin} from '../';
// import InlineSvg = require('../')
Vue.component('fpa-inline-svg', FpaInlineSvg);
Vue.component('fpa-inline-svg2', FpaInlineSvgComponent);
Vue.use(FpaInlineSvgPlugin);
