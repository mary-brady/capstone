<template>
<div class="profile-edit">
    <div class="navbar"></div>
    <div class="card">
        <img src="https://image.shutterstock.com/image-vector/knight-front-view-illustration-260nw-566198422.jpg" alt="" class="card-img-top">
    </div>
    <form>
        <div class="form-group">
            <input type="text" name="name" class="form-control" placeholder="Put Thy Name">
            <input type="text" name="email" class="form-control" placeholder="Change Thy Email">
            <input type="number" name="age" class="form-control" placeholder="Put Thy Age">
            <input type="text" name="gym" class="form-control" placeholder="Put Thy Gym">
            <input type="text" name="description" class="form-control" placeholder="Who Art Thou">
            <input type="text" name="usertype" class="form-control" placeholder="Put Thy Title">
            <button type="submit">Submit Changes</button>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name: "profileEdit"
}
</script>
<style>

</style>

