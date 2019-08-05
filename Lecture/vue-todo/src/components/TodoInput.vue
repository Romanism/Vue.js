<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i class="closeModalBtn fas fa-times" @click="closeModal"></i>
      </h3>
      <div slot="body">TODO LIST를 작성해주세요</div>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  components: {
    Modal
  },

  data() {
    return {
      newTodoItem: "",
      showModal: false
    };
  },

  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        // 추가1. $emit: 상위 컴포넌트로 이벤트를 발생시킴 (addTodoItem이라는 이름으로 this.newTodoItem을 같이 보냄)
        const text = this.newTodoItem.trim();
        this.$store.commit("addOneItem", text);
        this.clearInput();
      } else {
        this.showModal = true;
      }
    },
    clearInput() {
      // 초기화
      this.newTodoItem = "";
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: black;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>
