<template>
<div class="profile-edit row d-flex justify-content-center">
    <div class="navbar col-12"></div>
    <div class="col-6 d-flex justify-content-center text-left bg-color">
        <ul class="mt-2 padding">
    <li><strong>Name</strong>: {{userData.name}} &nbsp; &nbsp; <span @click="nameEditVisible = !nameEditVisible"><i class="clickable fa fa-edit"></i></span></li>
        <form v-if="nameEditVisible" @submit.prevent="editName()">
            <input type="text" v-model="profileUpdate.name" class="form-control" placeholder="Put Thy Name">
            <button class="btn btn-primary btn-sm mt-1" type="submit">Submit Changes</button>            
        </form>

    <li><strong>Email</strong>: {{userData.email}} &nbsp; &nbsp; <span @click="emailEditVisible = !emailEditVisible"><i class="clickable fa fa-edit"></i></span></li>
        <form v-if="emailEditVisible" @submit.prevent="editEmail()">
            <input type="text" v-model="profileUpdate.email" class="form-control" placeholder="Put Thy email">
            <button class="btn btn-primary btn-sm mt-1" type="submit">Submit Changes</button>            
        </form>

     <li><strong>Age</strong>: {{userData.age}} &nbsp; &nbsp; <span @click="ageEditVisible = !ageEditVisible"><i class="clickable fa fa-edit"></i></span></li>
        <form v-if="ageEditVisible" @submit.prevent="editAge()">
            <input type="number" v-model="profileUpdate.age" class="form-control" placeholder="Put Thy Age">
            <button class="btn btn-primary btn-sm mt-1" type="submit">Submit Changes</button>            
        </form>
           
     <li><strong>Gym</strong>: {{userData.gym}} &nbsp; &nbsp; <span @click="gymEditVisible = !gymEditVisible"><i class="clickable fa fa-edit"></i></span></li>
        <form v-if="gymEditVisible" @submit.prevent="editGym()">
            <input type="text" v-model="profileUpdate.gym" class="form-control" placeholder="Put Thy gym">
            <button class="btn btn-primary btn-sm mt-1" type="submit">Submit Changes</button>    
        </form>

     <li><strong>About Thee</strong>: {{userData.description}} &nbsp; &nbsp; <span @click="descriptionEditVisible = !descriptionEditVisible"><i class="clickable fa fa-edit"></i></span></li>
        <form v-if="descriptionEditVisible" @submit.prevent="editDescription()">
            <textarea row="4" type="text" v-model="profileUpdate.description" class="form-control" placeholder="Who Art Thou?"></textarea>
            <button class="btn btn-primary btn-sm mt-1" type="submit">Submit Changes</button>            
        </form>

     <li><strong>Title</strong>: {{userData.userType}} &nbsp; &nbsp; <span @click="userTypeEditVisible = !userTypeEditVisible"><i class="clickable fa fa-edit"></i></span></li>
        <form v-if="userTypeEditVisible" @submit.prevent="editUserType()">
            <input type="text" v-model="profileUpdate.userType" class="form-control" placeholder="Are ye trainer?">
            <button class="btn btn-primary btn-sm mt-1" type="submit">Submit Changes</button>    
        </form>
        </ul>
    </div>
    <div class="col-12 mb-1 mt-3">
       <button class="btn btn-warning" @click="switchComponents('Posts')" :disabled="currentComp === 'Posts'">Go Back</button>
    </div>
</div>
</template>

<script>
import { bus } from "../index.js";
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
      userTypeEditVisible: false
    };
  },
  computed: {
    userData() {
      return this.$store.state.user;
    }
  },
  methods: {
    switchComponents(comp) {
      bus.$emit("switchComp", comp);
    },
    editName() {
      this.$store.dispatch("updateName", {
        name: this.profileUpdate.name,
        userId: this.userData._id
      });
      this.nameEditVisible = false;
      this.profileUpdate.name = "";
    },
    editEmail() {
      this.$store.dispatch("updateEmail", {
        email: this.profileUpdate.email,
        userId: this.userData._id
      });
      this.emailEditVisible = false;
      this.profileUpdate.email = "";
    },
    editAge() {
      this.$store.dispatch("updateAge", {
        age: this.profileUpdate.age,
        userId: this.userData._id
      });
      this.ageEditVisible = false;
      this.profileUpdate.age = "";
    },
    editGym() {
      this.$store.dispatch("updateGym", {
        gym: this.profileUpdate.gym,
        userId: this.userData._id
      });
      this.gymEditVisible = false;
      this.profileUpdate.gym = "";
    },
    editDescription() {
      this.$store.dispatch("updateDescription", {
        description: this.profileUpdate.description,
        userId: this.userData._id
      });
      this.descriptionEditVisible = false;
      this.profileUpdate.description = "";
    },
    editUserType() {
      this.$store.dispatch("updateUserType", {
        userType: this.profileUpdate.userType,
        userId: this.userData._id
      });
      this.userTypeEditVisible = false;
      this.profileUpdate.userType = "";
    }
  }
};
</script>
<style scoped>
.clickable:hover {
  cursor: pointer;
}
ul {
  list-style: none;
}

.bg-color {
  background-color: rgb(235, 235, 235);
  border: 2px dashed black;
}
.padding {
  -webkit-padding-start: 10px;
}
</style>

