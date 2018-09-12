import Vue from 'vue';
import Profile from './views/Profile.vue';

Vue.config.productionTip = false

export const bus = new Vue();

new Vue({
    el:'#profile',
    template: '<Profile/>',
    components: {Profile}
});