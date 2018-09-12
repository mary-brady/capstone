<template>
    <div class="profile">
        <h1>Profile Page :)</h1>
    <button @click="switchComponents('ProfileEdit')">Edit Profile</button>
        <component :is="currentComp"></component>
    </div>
</template>
<script>
import ProfileEdit from "@/components/ProfileEdit.vue"
import GoalEdit from "@/components/GoalEdit.vue"
import GoalDetail from "@/components/GoalDetail.vue"
import Posts from "@/components/Posts.vue"
import {bus} from "../index.js" 
export default {
    el:'#profile',
    data(){
        return {
            currentComp: Posts
        }
    },
    created(){
        bus.$on('switchComp', comp =>{
            this.currentComp = comp
        })
    },
    methods:{
        display(){
            getElent.classList.remove('hide')
        }
    },
    components:{
        ProfileEdit,
        GoalEdit,
        GoalDetail,
        Posts
    }
}
</script>
<style>
.hide{
    display: none;
}
.display{
    display:block;
}
</style>
