<template>
  <div class="propertyItem">
      <p class="title">Six Transition Classes</p>
      <div class="status">
        <ul>Enter
          <li class="classItem">
              <p><span>v-enter:</span>Starting state for enter.</p>
          </li>
          <li class="classItem">
              <p><span>v-enter-active:</span>Active state for enter.</p>
          </li>
          <li class="classItem">
              <p><span>v-enter-to:</span>Ending state for enter.</p>
          </li>
        </ul>
        <ul>Leave
          <li class="classItem">
              <p><span>v-leave:</span>Starting state for leave.</p>
          </li>
          <li class="classItem">
              <p><span>v-leave-active:</span>Active state for leave.</p>
          </li>
          <li class="classItem">
              <p><span>v-leave-to:</span>Ending state for leave.</p>
          </li>
        </ul>
      </div>
      <img class="classPic" src="https://vuejs.org/images/transition.png">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .propertyItem{
        width: 650px;
        height: 400px;
        border: 1px solid #8c8c8c;
        margin: 10px auto;
        padding: 0 10px;
    }

    .title{
        padding: 5px 0;
        margin: 0;
    }

    .status{
        width: 100%;
        display: flex;
    }

    ul{
        text-align: left;
        padding-top: 5px;
        padding-left: 25px; 
        width: 50%;
        border: 1px solid #8c8c8c;
        margin: 0;
    }
    .classItem {
        margin: 2.5px 0;
    }

    .classItem span{
        display: inline-block;
        width: 110px;
        color: #c97026;
    }

    .classPic{
        width: 420px;
        height: auto;
    }
</style>
