<template>
  <div class="propertyItem">
      <p class="title">To Specify the Order of Transition</p>
      <div class="modes">
          <p>No mode ( In &amp Out transition at the same time => Visual Bug )</p>
          <button class="btn btn-danger" @click="noMode = !noMode">Switch</button>
          <transition name="slide">
              <p class="item" v-if="noMode === true" key="yes">YES</p>
              <p class="item" v-else key="no">NO</p>
          </transition>
      </div>
      <div class="modes">
          <p>Mode = "out-in"( Out first then do In )</p>
          <button class="btn btn-danger" @click="outIn = !outIn">Switch</button>
          <transition name="slide" mode="out-in">
              <p class="item" v-if="outIn === true" key="outInYes">YES</p>
              <p class="item" v-else key="outInNo">NO</p>
          </transition>
      </div>
      <div class="modes">
          <p>Mode = "in-out"( In first then do Out => Special case )</p>
          <button class="btn btn-danger" @click="inOut = !inOut">Switch</button>
          <transition name="slide" mode="in-out">
              <p class="item" v-if="inOut === true" key="inOutYes">YES</p>
              <p class="item" v-else key="inOutNo">NO</p>
          </transition>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noMode: true,
      outIn: true,
      inOut: true
    };
  }
};
</script>

<style scoped>
p {
  margin: 2.5px 0;
}

.propertyItem {
  width: 650px;
  height: 400px;
  border: 1px solid #8c8c8c;
  margin: 10px auto;
  padding: 0 10px;
}

.title {
  padding: 5px 0;
  margin: 0;
}

.modes {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 5px;
}

.modes .btn {
    padding: 2.5px 10px
}

.item {
  
}

.slide-enter {
   opacity: 0;
}

.slide-enter-active {
    transition: opacity 0.5s linear;
}

.slide-leave {
    /* opacity: 1; */
}

.slide-leave-active {
    transition: opacity 0.5s linear;
    opacity: 0;
}




</style>