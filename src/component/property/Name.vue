<template>
  <div class="propertyItem">
      <p class="title">To Specify the Processing Transition</p>
      <div class="box">
        <p>a. W/O Name (v-class)</p>
        <button class="btn btn-success" @click="changeWO">Change</button>
        <transition mode="out-in">
            <component :is="withoutTran"></component>
        </transition>    
      </div>

      <div class="box">
        <p>b. W/ Name (name-class)</p>
        <button class="btn btn-success" @click="changeWith">Change</button>
        <transition name="change" mode="out-in">
          <component :is="withTran"></component>
        </transition>
      </div>
  </div>
</template>

<script>
import Com1 from "../Home/Component1.vue";
import Com2 from "../Home/Component2.vue";
import Com3 from "../Home/Component3.vue";
import Com4 from "../Home/Component4.vue";
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

.change-enter {
    color: #f5f5f5;
    background-color: #2c3e50;
}

.change-enter-active {
    transition: color 0.5s linear, background-color 0.5s linear;
}

.change-leave-active {
    color: #f5f5f5;
    background-color: #2c3e50;
    transition: color 0.5s linear, background-color 0.5s linear;
}

.change-leave {

}

.v-enter {
    opacity: 0;
}

.v-enter-active {
    transition: opacity 0.5s linear;
}

.v-leave-active {
    transition: opacity 0.5s linear;
    opacity: 0;
}

.v-leave {
    opacity: 1;
}
</style>
