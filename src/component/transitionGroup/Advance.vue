<template>
  <div class="groupItem">
        <p class="title">Advance Lazy Sudoku</p>
        <button class="btn btn-warning" @click="shuffle">Shuffle</button>
        <transition-group name="cell" tag="div" class="box">
            <div v-for="cell in cells" :key="cell.id" class="cell">
            {{ cell.number }}
            </div>
        </transition-group>
        <a target="_blank" href="https://jsfiddle.net/chrisvfritz/sLrhk1bc/">Origin Link-Chris Fritz</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cells: Array.apply(null, { length: 81 }).map(function(_, index) {
        return {
          id: index,
          number: index % 9 + 1
        };
      })
    };
  },
  methods: {
    shuffle() {
        let array = this.cells.map(item=> {
            return item
        });
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        this.cells = array;
    },
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

.title {
  padding: 5px 0;
  margin: 0;
}

.box {
  display: flex;
  flex-wrap: wrap;
  width: 265px;
  margin: 10px auto;
}
.cell {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid #aaa;
  margin-right: -1px;
  margin-bottom: -1px;
  font-size: 1.2rem;
}
.cell:nth-child(3n) {
  margin-right: 0;
}
.cell:nth-child(27n) {
  margin-bottom: 0;
}
.cell-move {
  transition: transform 1s;
}
</style>