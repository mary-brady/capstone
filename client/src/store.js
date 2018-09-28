import Vue from 'vue';
import Vuex from 'vuex';
import Axios from "axios";
import router from "./router"

Vue.use(Vuex)

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//yoft.herokuapp.com/' : '//localhost:3000/';

let api = Axios.create({
  baseURL: baseUrl + 'api/',
  timeout: 2000,
  withCredentials: true
})
let auth = Axios.create({
  baseURL: baseUrl + 'auth/',
  timeout: 2000,
  withCredentials: true
})

let weatherApi = Axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35",
  timeout: 3000,
})

let healthTip = Axios.create({
  baseURL: "https://healthfinder.gov/FreeContent/Developer/Search.xml?api_key=demo_api_key&CategoryID=17",
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    user: {},
    weight: [],
    endurance: [],
    strength: [],
    weightGoals: [],
    enduranceGoals: [],
    strengthGoals: [],
    posts: [],
    feed: [],
    tips: [],
    weather: {},
    quotes: [],
    workouts: [],
    strengthExercises: [],
    cardioExercises: [],
    comments: {},
    feedComments: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = {},
        state.weight = [],
        state.endurance = [],
        state.strength = [],
        state.weightGoals = [],
        state.enduranceGoals = [],
        state.strengthGoals = [],
        state.posts = []
    },
    setWeight(state, weight) {
      Vue.set(state, "weight", weight)
      // state.weight = weight;
    },
    setEndurance(state, endurance) {
      Vue.set(state, "endurance", endurance)
      //state.endurance = endurance;
    },
    setStrength(state, strength) {
      state.strength = strength;
    },
    setWeightGoals(state, data) {
      state.weightGoals = data.sort((a, b) => {
        let dateOne = Date.parse(a.created)
        let dateTwo = Date.parse(b.created)
        if (dateOne < dateTwo) {
          return 1
        } else if (dateOne > dateTwo) {
          return -1
        }
        return 0
      })
      state.weightGoals.forEach(weightGoals => {
        weightGoals.created = new Date(weightGoals.created).toDateString()
      })
    },
    setEnduranceGoals(state, data) {
      state.enduranceGoals = data.sort((a, b) => {
        let dateOne = Date.parse(a.created)
        let dateTwo = Date.parse(b.created)
        if (dateOne < dateTwo) {
          return 1
        } else if (dateOne > dateTwo) {
          return -1
        }
        return 0
      })
      state.enduranceGoals.forEach(enduranceGoals => {
        enduranceGoals.created = new Date(enduranceGoals.created).toDateString()
      })
    },
    setStrengthGoals(state, data) {
      state.strengthGoals = data.sort((a, b) => {
        let dateOne = Date.parse(a.created)
        let dateTwo = Date.parse(b.created)
        if (dateOne < dateTwo) {
          return 1
        } else if (dateOne > dateTwo) {
          return -1
        }
        return 0
      })
      state.strengthGoals.forEach(strengthGoals => {
        strengthGoals.created = new Date(strengthGoals.created).toDateString()
      })
    },
    setComments(state, data) {
      Vue.set(state.comments, data.postId, data.comments);
    },
    setFeedComments(state, data) {
      Vue.set(state.feedComments, data.postId, data.comments);
    },
    setPosts(state, posts) {
      state.posts = posts.sort((a, b) => {
        let dateOne = Date.parse(a.created)
        let dateTwo = Date.parse(b.created)
        if (dateOne < dateTwo) {
          return 1
        } else if (dateOne > dateTwo) {
          return -1
        }
        return 0
      })
      state.posts.forEach(posts => {
        posts.created = new Date(posts.created).toDateString()
      })
    },
    setFeed(state, feed) {
      state.feed = feed.sort((a, b) => {
        let dateOne = Date.parse(a.created)
        let dateTwo = Date.parse(b.created)
        if (dateOne < dateTwo) {
          return 1
        } else if (dateOne > dateTwo) {
          return -1
        }
        return 0
      })
      state.feed.forEach(feed => {
        feed.created = new Date(feed.created).toDateString()
      })
    },
    setTips(state, data) {
      state.tips = data
    },
    setWeather(state, weather) {
      state.weather = weather
    },
    setQuotes(state, data) {
      state.quotes = data
    },
    setWorkouts(state, data) {
      state.workouts = data
    },
    setStrengthEx(state, data) {
      state.strengthExercises = data
    },
    setCardioEx(state, data) {
      state.cardioExercises = data
    }
  },
  actions: {
    //AUTH
    register({ commit, dispatch }, newUser) {
      auth.post("register", newUser).then(res => {
        commit("setUser", res.data);
        router.push({ name: "profile" });
        dispatch('getPosts', res.data._id)
      });
    },
    authenticate({ commit, dispatch }) {
      auth.get("authenticate").then(res => {
        commit("setUser", res.data);
        router.push({ name: "profile" });
        dispatch('getPosts', res.data._id)
      });
    },
    login({ commit, dispatch }, creds) {
      auth.post("login", creds).then(res => {
        commit("setUser", res.data);
        router.push({ name: "profile" });
        dispatch('getPosts', res.data._id)
      });
    },
    logout({ commit }) {
      auth.delete("logout").then(() => {
        commit("clearUser");
        router.push({ name: "home" });
      });
    },
    ///////Weight, Endurance, and Strength for Charts

    getEndurance({ commit }) {
      api.get('endurance')
        .then(stats => {
          commit('setEndurance', stats.data)
        })
    },
    addEndurance({ commit, dispatch }, enduranceData) {
      api.post('endurance', enduranceData)
        .then(stats => {
          dispatch('getEndurance')
        })
    },
    getWeight({ commit }) {
      api.get('weight')
        .then(stats => {
          commit('setWeight', stats.data)
        })
    },
    addWeight({ commit, dispatch }, weightData) {
      api.post('weight', weightData)
        .then(stats => {
          dispatch('getWeight')
        })
    },
    getStrength({ commit }) {
      api.get('strength')
        .then(stats => {
          commit('setStrength', stats.data)
        })
    },
    addStrength({ commit, dispatch }, strengthData) {
      api.post('strength', strengthData)
        .then(stats => {
          dispatch('getStrength')
        })
    },
    ///////Weight and Endurance for Goals

    getWeightGoals({ commit }) {
      api.get('weight-goal')
        .then(goal => {
          commit('setWeightGoals', goal.data)
        })
    },
    addWeightGoal({ commit, dispatch }, weightGoal) {
      api.post('weight-goal', weightGoal)
        .then(goal => {
          dispatch('getWeightGoals', goal.data)
        })
    },
    deleteWeightGoal({ commit, dispatch }, _id) {
      api.delete('weight-goal/' + _id)
        .then(res => {
          dispatch('getWeightGoals')
        })
    },
    editWeightGoal({ commit, dispatch }, weightGoal) {
      api.put('weight-goal/' + weightGoal._id, {
        completed: weightGoal.completed
      })
        .then(goal => {
          dispatch('getWeightGoals')
        }
        )
    },
    getStrengthGoals({ commit }) {
      api.get('strength-goal')
        .then(goal => {
          commit('setStrengthGoals', goal.data)
        })
    },
    addStrengthGoal({ commit, dispatch }, strengthGoal) {
      api.post('strength-goal', strengthGoal)
        .then(goal => {
          dispatch('getStrengthGoals', goal.data)
        })
    },
    deleteStrengthGoal({ commit, dispatch }, _id) {
      api.delete('strength-goal/' + _id)
        .then(res => {
          dispatch('getStrengthGoals')
        })
    },
    editStrengthGoal({ commit, dispatch }, strengthGoal) {
      api.put('strength-goal/' + strengthGoal._id, {
        completed: strengthGoal.completed
      })
        .then(goal => {
          dispatch('getStrengthGoals')
        }
        )
    },
    getEnduranceGoals({ commit }) {
      api.get('endurance-goal')
        .then(goal => {
          commit('setEnduranceGoals', goal.data)
        })
    },
    addEnduranceGoal({ commit, dispatch }, enduranceGoal) {
      api.post('endurance-goal', enduranceGoal)
        .then(goal => {
          dispatch('getEnduranceGoals', goal.data)
        })
    },
    deleteEnduranceGoal({ commit, dispatch }, _id) {
      api.delete('endurance-goal/' + _id)
        .then(res => {
          dispatch('getEnduranceGoals')
        })
    },
    editEnduranceGoal({ commit, dispatch }, enduranceGoal) {
      api.put('endurance-goal/' + enduranceGoal._id, {
        completed: enduranceGoal.completed
      })
        .then(goal => {
          dispatch('getEnduranceGoals')
        }
        )
    },

    //USER PROFILE EDITS
    getUser({ commit }, userId) {
      auth.get('/' + userId)
        .then(res => {
          commit('setUser', res.data)
        })
    },
    updateName({ dispatch }, profileUpdate) {
      auth.put(profileUpdate.userId, { name: profileUpdate.name })
        .then(res => {
          dispatch('getUser', profileUpdate.userId)
        })
    },

    updateEmail({ dispatch }, profileUpdate) {
      auth.put(profileUpdate.userId, { email: profileUpdate.email })
        .then(res => {
          dispatch('getUser', profileUpdate.userId)
        })
    },

    updateAge({ dispatch }, profileUpdate) {
      auth.put(profileUpdate.userId, { age: profileUpdate.age })
        .then(res => {
          dispatch('getUser', profileUpdate.userId)
        })
    },

    updateGym({ dispatch }, profileUpdate) {
      auth.put(profileUpdate.userId, { gym: profileUpdate.gym })
        .then(res => {
          dispatch('getUser', profileUpdate.userId)
        })
    },

    updateDescription({ dispatch }, profileUpdate) {
      auth.put(profileUpdate.userId, { description: profileUpdate.description })
        .then(res => {
          dispatch('getUser', profileUpdate.userId)
        })
    },
    updateLevel({ dispatch }, profileData) {
      auth.put(profileData.userId, { level: profileData.level })
        .then(res => {
          dispatch('getUser', profileData.userId)
        })
    },
    updateXp({ dispatch }, profileData) {
      auth.put(profileData.userId, { xp: profileData.xp })
        .then(res => {
          dispatch('getUser', profileData.userId)
        })
    },
    updateUserType({ dispatch }, profileUpdate) {
      auth.put(profileUpdate.userId, { userType: profileUpdate.userType })
        .then(res => {
          dispatch('getUser', profileUpdate.userId)
        })
    },
    //FEED STUFF
    getFeed({ commit }) {
      api.get('feed/')
        .then(res => {
          commit('setFeed', res.data)
        })
    },

    //POSTS
    getPosts({ commit }, userId) {
      api.get('posts/' + userId)
        .then(res => {
          commit('setPosts', res.data)
        })
    },
    addPost({ dispatch }, postData) {
      api.post('posts/', postData.postData)
        .then(res => {
          dispatch('getPosts', postData.userId)
        })
    },
    deletePost({ dispatch }, postData) {
      api.delete('posts/' + postData._id)
        .then(res => {
          dispatch('getPosts', postData.authorId)
        })
    },
    deleteFeedPost({ dispatch }, postData) {
      api.delete('posts/' + postData._id)
        .then(res => {
          dispatch('getFeed')
        })
    },
    //Comments
    deleteComment({ dispatch }, commentData) {
      api.delete('comments/' + commentData._id)
        .then(res => {
          dispatch('getComments', commentData.postId)
        })
    },
    addComment({ dispatch }, commentData) {
      api.post('comments/', commentData.comment)
        .then(res => {
          dispatch('getComments', commentData.postId)
        })
    },
    editUp({ dispatch }, commentData) {
      api.put('comments/' + commentData.commentId, { numUp: commentData.num })
        .then(res => {
          dispatch('getComments', commentData.postId)
        })
    },
    editDown({ dispatch }, commentData) {
      api.put('comments/' + commentData.commentId, { numDown: commentData.num })
        .then(res => {
          dispatch('getComments', commentData.postId)
        })
    },
    getComments({ commit }, postId) {
      api.get('comments/post/' + postId)
        .then(res => {
          commit('setComments', { postId, comments: res.data })
        })
    },

    //Weather
    getWeather({ commit }) {
      weatherApi.get("")
        .then(res => {
          commit('setWeather', res.data)
        })
    },
    ////Quote
    getQuote({ commit }) {
      api.get('quotes')
        .then(res => {
          commit('setQuotes', res.data)
        })
    },

    //Workouts & Exercises
    getWorkouts({ commit }) {
      api.get('workouts/')
        .then(res => {
          commit('setWorkouts', res.data)
          console.log('getworkouts :', res.data)
        })
    },
    addWorkout({ dispatch }, workoutData) {
      api.post('workouts/', workoutData.workoutData)
        .then(res => {
          dispatch('getWorkouts')
        })
    },
    getStrengthEx({ commit }) {
      api.get('strength-exercise')
        .then(res => {
          commit('setStrengthEx', res.data)
          console.log('strengthEx: ', res.data)
        })
    },
    getCardioEx({ commit }) {
      api.get('cardio-exercise')
        .then(res => {
          commit('setCardioEx', res.data)
          console.log('cardioEx: ', res.data)
        })
    }
  },
  getters: {
    enduranceChartData(state) {
      let data = state.endurance
      let chartData = {
        type: 'line',
        data: {
          labels: [],
          datasets: [{
            label: 'Time',
            data: [],
            backgroundColor: "rgba(153,255,51,0.4)"
          }
          ]
        }
      }
      data.forEach(eData => {
        let myLabel = eData.created.split('T').join("-").substr(5, 5)
        chartData.data.labels.push(myLabel)
        chartData.data.datasets[0].data.push(eData.time)
      })
      return chartData
    },
    weightChartData(state) {
      let data = state.weight
      let chartData = {
        type: 'line',
        data: {
          labels: [],
          datasets: [{
            label: 'Weight',
            data: [],
            backgroundColor: "rgba(153,255,51,0.4)"
          }
          ]
        }
      }
      data.forEach(eData => {
        let myLabel = eData.created.split('T').join("-").substr(5, 5)
        chartData.data.labels.push(myLabel)
        chartData.data.datasets[0].data.push(eData.weight)
      })
      return chartData
    },
    strengthChartData(state) {
      let data = state.strength
      let chartData = {
        type: 'bar',
        data: {
          labels: [],
          datasets: [{
            label: 'Squats',
            data: [],
            backgroundColor: "rgba(92, 205, 240, 0.4)"

          },
          {
            label: 'Row',
            data: [],
            backgroundColor: "rgba(213, 14, 253, 0.4)"
          },
          {
            label: 'Bench Press',
            data: [],
            backgroundColor: " rgba(27, 172, 59, 0.4)"
          },
          {
            label: 'Shoulder Press',
            data: [],
            backgroundColor: "rgba(250, 183, 39, 0.4)"
          },
          {
            label: 'Deadlift',
            data: [],
            backgroundColor: "rgba(253, 14, 14, 0.4)"
          }
          ]
        }
      }
      data.forEach(sData => {
        let myLabel = sData.created.split('T').join("-").substr(5, 5)
        chartData.data.labels.push(myLabel)
        chartData.data.datasets[0].data.push(sData.squats)
        chartData.data.datasets[1].data.push(sData.rows)
        chartData.data.datasets[2].data.push(sData.benches)
        chartData.data.datasets[3].data.push(sData.shoulders)
        chartData.data.datasets[4].data.push(sData.deadlifts)
      })
      return chartData
    },
  }
})
