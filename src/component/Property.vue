<template>
  <div class="property">
      <h3>Transition Property</h3>
      <a target="_blank" href="https://vuejs.org/v2/guide/transitions.html">Vuejs.org - Transition</a>
      <ul class="propertyList">
          <router-link tag="li" class="propertyItem" active-class="active" to="/property/use">How to use</router-link>
          <router-link tag="li" class="propertyItem" active-class="active" to="/property/class">Transition class</router-link>
          <router-link tag="li" class="propertyItem" active-class="active" to="/property/name">Transition name</router-link>
          <router-link tag="li" class="propertyItem" active-class="active" to="/property/mode">Transition mode</router-link>
          <router-link tag="li" class="propertyItem" active-class="active" to="/property/appear">Transition appear</router-link>
      </ul>
      <transition name="propertyDetail" mode="out-in">
          <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import Use from './property/Use.vue'
import Name from './property/Name.vue'
import Class from './property/Class.vue'
import Mode from './property/Mode.vue'
import Appear from './property/Appear.vue'


export default {
    data() {
        return {
             page:'app-use'
        }
    },
    methods:{
        selectPage(page) {
            this.page = page
        }
    },
    components:{
        appUse:Use,
        appName:Name,
        appClass:Class,
        appMode:Mode,
        appAppear:Appear,
    }
};
</script>

<style scoped>
.property {
  animation-duration: 0.35s;
}


.propertyList {
  margin: 0 auto;
  margin-top: 10px;
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

.propertyList li {
  border: 1px solid #8c8c8c;
  margin: 0 5px;
  padding: 2.5px 5px; 
  cursor: pointer;
}

.propertyList li.active {
  border: 1px solid #2c3e50;  
  background: #2c3e50;
  color: white;
}

.propertyDetail-enter {

}

.propertyDetail-enter-active {
  animation: property-in 0.3s;
}

.propertyDetail-leave-active {
  animation: property-out 0.3s;
}

.propertyDetail-leave {

}

@keyframes property-in {
  0% {
    transform: scale(0.5) translateX(100%);
    opacity: 0;
  }
  100% {
    transform: scale(1) translateX(0);
    opacity: 1;
  }
}

@keyframes property-out {
  0% {
    transform: scale(1) translateX(0);
    opacity: 1;
  }
  100% {
    transform: scale(0.5) translateX(-100%);
    opacity: 0;
  }
}
</style>
