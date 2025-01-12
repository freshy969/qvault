import '@babel/polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueScrollTo from 'vue-scrollto';
import {shell} from 'electron';
 
Vue.use(VueScrollTo);
Vue.use(VueRouter);

import QvaultApp from './qvault.vue';

import HeaderBar from './components/header_bar.vue';
import StepProgress from './components/step_progress.vue';
import DecoratedTextInput from './components/decorated_text_input.vue';
import LoadingOverlay from './components/loading_overlay.vue';

Vue.component('HeaderBar', HeaderBar);
Vue.component('StepProgress', StepProgress);
Vue.component('DecoratedTextInput', DecoratedTextInput);
Vue.component('LoadingOverlay', LoadingOverlay);

// Open all http links in external browsers
document.addEventListener('click', function (event) {
  if (event.target.tagName === 'A' && event.target.href.startsWith('http')) {
    event.preventDefault();
    shell.openExternal(event.target.href);
  }
});

window.QvaultApp = new Vue(QvaultApp);
window.QvaultApp.$mount('#qvault');
