<template>
    <div class="weather row">
        <div class="col-12">
            <h1 class="font-size">What Be The Weather In...</h1>
            <p>{{weather.name}}</p>
        </div>
        <div class="col-12">
            <h1>{{temp}}&#176;F</h1>
        </div>
        <div class="col-12">
            <div class="row">
                <div class="col-6"> <p>MinTemp: {{minTemp}}&#176;F</p>  </div>
                <div class="col-6"> <p>MaxTemp: {{maxTemp}}&#176;F</p> </div>
            </div>
        </div>
        <div class="col-12">
            <p>{{weather.weather[0].description}}</p>
        </div>
        <div class="col-12">
            <h5 >There's Always Time for An Exercise</h5>
        </div>
    </div>
</template>

<script>
export default {
  name: "weather",
  computed: {
    weather() {
      return this.$store.state.weather;
    },
    temp() {
      let temperature = Math.floor(9 / 5 * (this.weather.main.temp - 273) + 32);
      return temperature;
    },
    minTemp() {
      let tempMin = Math.floor(9 / 5 * (this.weather.main.temp_min - 273) + 32);
      return tempMin;
    },
    maxTemp() {
      let tempMax = Math.floor(9 / 5 * (this.weather.main.temp_max - 273) + 32);
      return tempMax;
    }
  }
};
</script>
<style>
.font-size {
  font-family: "Oldenburg", cursive;
}
</style>


