<template>
<div class="profile-edit">
    <div class="navbar"></div>
    <div class="card">
        <img src="//placehold.it/150x150" alt="" class="card-img-top">
    </div>
        <ul>

    <li><strong>Name</strong>: {{userData.name}} &nbsp &nbsp <span @click="nameEditVisible = !nameEditVisible"><i class="clickable fa fa-edit"></i></span></li>
        <form v-if="nameEditVisible" @submit.prevent="editName()">
            <input type="text" v-model="profileUpdate.name" class="form-control" placeholder="Put Thy Name">
            <button class="btn btn-primary btn-sm mt-1" type="submit">Submit Changes</button>            
        </form>

    <li><strong>Email</strong>: {{userData.email}} &nbsp &nbsp <span @click="emailEditVisible = !emailEditVisible"><i class="clickable fa fa-edit"></i></span></li>
        <form v-if="emailEditVisible" @submit.prevent="editEmail()">
            <input type="text" v-model="profileUpdate.email" class="form-control" placeholder="Put Thy email">
            <button class="btn btn-primary btn-sm mt-1" type="submit">Submit Changes</button>            
        </form>

     <li><strong>Age</strong>: {{userData.age}} &nbsp &nbsp <span @click="ageEditVisible = !ageEditVisible"><i class="clickable fa fa-edit"></i></span></li>
        <form v-if="ageEditVisible" @submit.prevent="editAge()">
            <input type="number" v-model="profileUpdate.age" class="form-control" placeholder="Put Thy Age">
            <button class="btn btn-primary btn-sm mt-1" type="submit">Submit Changes</button>            
        </form>
           
     <li><strong>Gym</strong>: {{userData.gym}} &nbsp &nbsp <span @click="gymEditVisible = !gymEditVisible"><i class="clickable fa fa-edit"></i></span></li>
        <form v-if="gymEditVisible" @submit.prevent="editGym()">
            <input type="text" v-model="profileUpdate.gym" class="form-control" placeholder="Put Thy gym">
            <button class="btn btn-primary btn-sm mt-1" type="submit">Submit Changes</button>    
        </form>

     <li><strong>About Thee</strong>: {{userData.description}} &nbsp &nbsp <span @click="descriptionEditVisible = !descriptionEditVisible"><i class="clickable fa fa-edit"></i></span></li>
        <form v-if="descriptionEditVisible" @submit.prevent="editDescription()">
            <textarea row="4" type="text" v-model="profileUpdate.description" class="form-control" placeholder="Who Art Thou?"></textarea>
            <button class="btn btn-primary btn-sm mt-1" type="submit">Submit Changes</button>            
        </form>

     <li><strong>Title</strong>: {{userData.userType}} &nbsp &nbsp <span @click="titleEditVisible = !titleEditVisible"><i class="clickable fa fa-edit"></i></span></li>
        <form v-if="titleEditVisible" @submit.prevent="edituserType()">
            <input type="text" v-model="profileUpdate.userType" class="form-control" placeholder="Are ye trainer?">
            <button class="btn btn-primary btn-sm mt-1" type="submit">Submit Changes</button>    
        </form>
        </ul>
</div>
</template>

<script>
export default {
  name: "profileEdit",
  data() {
    return {
      profileUpdate: {
        name: "",
        email: "",
        age: "",
        gym: "",
        description: "",
        userType: ""
      },
      nameEditVisible: false,
      emailEditVisible: false,
      ageEditVisible: false,
      gymEditVisible: false,
      descriptionEditVisible: false,
      titleEditVisible: false
    };
  },
  computed: {
    userData() {
      return this.$store.state.user;
    }
  },
  methods: {}
};
</script>
<style scoped>
.clickable:hover {
  cursor: pointer;
}
</style>

