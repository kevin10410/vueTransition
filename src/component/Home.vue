<template>
  <div class="home">
      <h3>Home Page</h3>
      <h5>Why Transition</h5>
      <p class="adv">1. More Prettier</p>
      <p class="adv">2. More Clear</p>
      <div class="box">
        <p>a. W/O Transition</p>
        <button class="btn btn-success" @click="changeWO">Change</button>
        <component :is="withoutTran"></component>
      </div>

      <div class="box">
        <p>b. W/ Transition</p>
        <button class="btn btn-success" @click="changeWith">Change</button>
        <transition name="fade" mode="out-in">
          <component :is="withTran"></component>
        </transition>
      </div>
  </div>
</template>

<script>
import Com1 from "./Home/Component1.vue";
import Com2 from "./Home/Component2.vue";
import Com3 from "./Home/Component3.vue";
import Com4 from "./Home/Component4.vue";
export default {
  data() {
    return {
      withoutTran: "app-com1",
      withTran: "app-com3"
    };
  },
  methods: {
    changeWO() {
      if (this.withoutTran === "app-com1") {
        this.withoutTran = "app-com2";
      } else {
        this.withoutTran = "app-com1";
      }
    },
    changeWith() {
      if (this.withTran === "app-com3") {
        this.withTran = "app-com4";
      } else {
        this.withTran = "app-com3";
      }
    }
  },
  components: {
    appCom1: Com1,
    appCom2: Com2,
    appCom3: Com3,
    appCom4: Com4
  }
};
</script>

<style scoped>
.home {
  animation-duration: 0.35s;
}

.adv {
  margin: 0;
}

.box {
  width: 500px;
  height: 150px;
  border: 1px solid #ccc;
  margin: 20px auto;
  padding: 0 10px;
}

.box p {
  margin-bottom: 10px;
}

.fade-enter {
  opacity: 0;
  transform: translateX(100%);
}

.fade-enter-active {
  transition: opacity 0.5s linear, transform 0.5s linear;
}

.fade-leave {
  transform: translateX(0%);
}

.fade-leave-active {
  transform: translateX(-100%);
  opacity: 0;
  transition: opacity 0.5s linear, transform 0.5s linear;
}
</style>
