<template>
  <div id="app">
    <h1>Vue Transition</h1>
    <router-link tag="button" class="btn btn-default" to="/">Home</router-link>
    <router-link tag="button" class="btn btn-secondary" to="/property">Transition Property</router-link>
    <!-- <router-link tag="button" class="btn btn-danger" to="/application">Application</router-link> -->
    <router-link tag="button" class="btn btn-dark" to="/group">Transition Group</router-link>
    <hr>
    <transition mode="out-in"
      appear
      enter-class=""
      enter-active-class="animated rollIn"
      leave-class=""
      leave-active-class="animated rollOut">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  min-width: 700px;
  overflow: hidden;
}

.btn-default{
  border: 1px solid #ccc;
}
</style>
