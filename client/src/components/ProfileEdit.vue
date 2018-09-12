<template>
<div class="profile-edit">
    <div class="navbar"></div>
    <div class="card">
        <img src="" alt="" class="card-img-top">
    </div>
    <form>
        <div class="form-group">
            <input type="text" name="name" class="form-control" placeholder="Put Thy Name">
            <input type="text" name="email" class="form-control" placeholder="Change Thy Email">
            <input type="number" name="age" class="form-control" placeholder="Put Thy Age">
            <input type="text" name="gym" class="form-control" placeholder="Put Thy Gym">
            <input type="text" name="description" class="form-control" placeholder="Who Art Thou">
            <input type="text" name="usertype" class="form-control" placeholder="Put Thy Title">
            <input type="text" v-if="usertype == 'trainer' || usertype == 'owner'" class="form-control" placeholder="Enter Thy Arena">
            <input type="number" v-if="usertype == 'trainer' || usertype == 'owner'" class="form-control" placeholder="Enter Ye Olde Phone Number">
        </div>
    </form>
</div>
</template>

<script>
export default {
    
}
</script>
<style>

</style>

