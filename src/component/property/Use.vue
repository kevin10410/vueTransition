<template>
  <div class="propertyItem">
      <p class="title">Use Vue Transition</p>
      <ul>Overview
          <li>Automatically apply classes for CSS transitions and animations</li>
          <li>Integrate 3rd-party CSS animation libraries, such as <a target="_blank" href="https://daneden.github.io/animate.css/">Animate.css</a></li>
          <li>Use JavaScript to directly manipulate the DOM during transition hooks</li>
      </ul>
      <div class="code">
          <p class="textLeft"><span>< </span><span>transition name="name" mode="mode" ></span></p>
          <p><span>< </span><span>element > or <span>< </span> component > or <span>< </span>router-view ></span></p>
          <p class="textLeft"><span>< </span><span>/transition ></span></p>
      </div>
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

    ul{
        text-align: left;
    }

    .code{
        background: black;
        color: white;
        font-size: 1.2rem;
        border-radius: 5px; 
    }


    .textLeft {
        text-align: left;
        padding-left:20px; 
    }
</style>
