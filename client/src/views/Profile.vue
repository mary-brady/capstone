<template>
    <div class="profile">
        <span class="label">profile</span>
        <h1>Profile Page :)</h1>
    <button @click="switchComponents('ProfileEdit')" :disabled="currentComp === 'ProfileEdit'">Edit Profile</button>
    <button @click="switchComponents('Posts')" :disabled="currentComp === 'Posts'">Go Back</button>
    <div>
        <component id="profile" :is="currentComp"></component>
    </div>    

    </div>
</template>
<script>
import ProfileEdit from "@/components/ProfileEdit.vue"
import GoalEdit from "@/components/GoalEdit.vue"
import GoalDetail from "@/components/GoalDetail.vue"
import Posts from "@/components/Posts.vue"
import {bus} from "../index.js" 
export default {
    name: 'profile',
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
        switchComponent(comp){
            bus.$emit('switchComp', comp)
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
</style>
