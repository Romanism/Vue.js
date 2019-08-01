<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList
      v-bind:propsdata="todoItems"
      v-on:removeItem="removeOneItem"
      v-on:toggleItem="toggleOneItem"
    ></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "app",

  data() {
    return {
      todoItems: []
    };
  },

  methods: {
    addOneItem(todoItem) {
      // 추가2. v-on:addTodoItem으로 이벤트를 받고 같이 받은 아이템을 뿌려준다
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },

    removeOneItem(todoItem, index) {
      // 1. Browser에서 삭제
      this.todoItems.splice(index, 1);

      // 2. LocalStorage에서 삭제
      localStorage.removeItem(todoItem.item);
    },

    toggleOneItem(todoItem, index) {
      // 1. Brawer에서 Class명을 추가/제거해서 완료 표시 진행
      this.todoItems[index].completed = !this.todoItems[index].completed;

      // 2. localStorage에서 completed 업데이트
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },

    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    }
  },

  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },

  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
};
</script>

<style>
#app {
  font-family: "Ubuntu", sans-serif;
}

body {
  text-align: center;
  background-color: #f6f6f6;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}

input {
  border-style: groove;
  width: 200px;
}
</style>
