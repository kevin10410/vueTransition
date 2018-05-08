<template>
  <div class="propertyItem">
      <p class="title">Appear Property</p>
      <p> Transition or Not In the Beginning</p>
      <div class="appear">
          <p>No Appear ( No transition in th Beginning )</p>
          <transition 
            enter-class=""
            enter-active-class="animated rollIn"
            leave-class=""
            leave-active-class="animated rollOut">
            <p class="trans" :style="{color:'red'}">NoAppear</p>
          </transition>
      </div>
      <div class="appear">
          <p>With Appear ( Do transition in th Beginning )</p>
          <transition
            appear
            enter-class=""
            enter-active-class="animated rollIn"
            leave-class=""
            leave-active-class="animated rollOut">
              <p class="trans" :style="{color:'blue'}">Appear</p>
          </transition>
      </div>  
  </div>
</template>

<script>
export default {
    
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

.appear {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 5px;
}

.appear p {
    margin: 10px 0;
}

.trans{
    font-size: 1.5rem;
}
</style>
