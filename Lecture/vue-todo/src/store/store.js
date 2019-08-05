import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/*eslint-disable no-unused-vars*/
const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  }
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  getters: {
    storedTodoItems(state) {
      return state.todoItems;
    }
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      // 1. Browser에서 삭제
      state.todoItems.splice(payload.index, 1);
      // 2. LocalStorage에서 삭제
      localStorage.removeItem(payload.todoItem.item);
    },
    toggleOneItem(state, payload) {
      // 1. Brawer에서 Class명을 추가/제거해서 완료 표시 진행
      state.todoItems[payload.index].completed = !state.todoItems[payload.index]
        .completed;

      // 2. localStorage에서 completed 업데이트 (지우고 다시 넣기)
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(
        payload.todoItem.item,
        JSON.stringify(payload.todoItem)
      );
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  }
});
