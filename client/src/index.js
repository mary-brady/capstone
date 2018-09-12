import Vue from 'vue/dist/vue.js';
import Profile from './views/Profile.vue';


Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
    el:'#profile',
    template: '<Profile/>',
    components: {Profile}
});