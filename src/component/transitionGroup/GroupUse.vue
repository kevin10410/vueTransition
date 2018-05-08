<template>
  <div class="groupItem">
      <p class="title">Use Transition Group</p>
      <ul>Overview
          <li>Transition for a <strong>whole list</strong> of items simultaneously.</li>
          <li>Can use <strong>tag</strong> name to define container.</li>
          <li>Elements inside are always required to have a unique <strong>key</strong> attribute.</li>
      </ul>
      <div class="code">
          <p class="textLeft"><span>< </span><span>transition-group name="name" tag="tagName"></span></p>
          <p><span>< </span><span>tag v-for="" :key=""></span><span>< </span><span>/tag></span></p>
          <p class="textLeft"><span>< </span><span>/transition ></span></p>
      </div>
  </div>
</template>

<script>
export default {};
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

.title {
  padding: 5px 0;
  margin: 0;
}

ul {
  text-align: left;
}

.code {
  background: #343a40;
  color: white;
  font-size: 1.2rem;
  border-radius: 5px;
}

.textLeft {
  text-align: left;
  padding-left: 20px;
}
</style>
