<template>
    <div class="group">
        <h3>Transition a Group</h3>
        <a target="_blank" href="https://vuejs.org/v2/guide/transitions.html#List-Transitions">Vuejs.org - List-Transition</a>
        <ul class="groupList">
          <router-link tag="li" class="groupItem" active-class="active" to="/group/use">How to use</router-link>
          <router-link tag="li" class="groupItem" active-class="active" to="/group/basic">Basic Use</router-link>
          <router-link tag="li" class="groupItem" active-class="active" to="/group/advance">Advance</router-link>
        </ul>
        <transition 
            enter-class=""
            enter-active-class="animated flipInX"
            leave-class=""
            leave-active-class="animated flipOutX"
            mode="out-in">
            <router-view></router-view>
        </transition>
    </div> 
</template>

<script>
export default {
  data() {
    return {
      numbers: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    }
  }
};
</script>

<style scoped>
.group {
  animation-duration: 0.35s;
}

.groupList {
  margin: 0 auto;
  margin-top: 10px;
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

.groupList li {
  border: 1px solid #8c8c8c;
  margin: 0 5px;
  padding: 2.5px 5px; 
  cursor: pointer;
}

.groupList li.active {
  border: 1px solid #343a40;  
  background: #343a40;
  color: white;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.5s ease-out normal;
  transition: opacity 0.5s ease-out;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 0.5s ease-out normal;
  opacity: 0;
  transition: opacity 0.5s ease-out;
}

.slide-move {
  transition: transform 0.5s;
}

@keyframes slide-in {
  from {
    transform: translateY(10px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(10px);
  }
}
</style>
