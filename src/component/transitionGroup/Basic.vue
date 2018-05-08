<template>
  <div class="groupItem">
      <p class="title">Update Content</p>
      <input type="text" v-model="filter">
      <transition-group name="fade" tag="ul" class="fruits">
        <li v-for="item in filterFruit" :key="item">{{item}}</li>
      </transition-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fruits:['apple', 'banana', 'coconut', 'durian', 'eggfruit', 'fig', 'grava', 'honeydew melon'],
      filter:'',
    }
  },
  computed: {
    filterFruit() {
      let vm = this;
      return this.fruits.filter(item => {
        return item.includes(vm.filter)
      })
    }
  }
};
</script>

<style scoped>
.groupItem {
  width: 650px;
  height: 400px;
  border: 1px solid #8c8c8c;
  margin: 10px auto;
  padding: 0 10px;
  animation-duration: 0.5s;
}

.title{
    padding: 5px 0;
    margin: 0;
}

.fruits{
  list-style: none;
  padding: 0;
  margin: 15px 0 0 0;
}

.fruits li{
  margin: 5px 0;
  padding: 5px 0;
  background: #b0b1b2;
  border-radius: 5px; 
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5s linear;
}

.fade-leave {
  /* opacity: 1; */
}

.fade-leave-active {
  transform: scaleY(0);
  transition: opacity 0.5s linear, transform 0.5s linear;
  opacity: 0;
  position: absolute;
}

.fade-move {
  transition: transform 0.5s;
}

</style>
