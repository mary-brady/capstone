<template>
    <div>
        <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Goal Type
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Weight Loss/Gain</a>
                  <a class="dropdown-item" href="#">Endurance</a>
                  <a class="dropdown-item" href="#">Strength</a>
                </div>
              </div>
    <form @submit.prevent="addGoal" class="col-12 d-flex justify-content-center">
        <div class="form-group">
          <input type="text"  placeholder="Goal" class="form-control mb-1 mt-1">
          <input type="text" placeholder="Goal Details" class="form-control mb-1 mt-1">
          <button type="submit" class="btn btn-success mb-1 mt-1">Add Goal</button>
        </div>
      </form>
</div>
</template>

<script>
export default {
    name: 'goal',
    components: {

    }
}
</script>

<style>
</style>