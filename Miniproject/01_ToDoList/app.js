// Vue instance가 있는 js 파일입니다.

new Vue({
    el: "#todolistapp",
    data: {
        todo: "",
        todolists: []
    },

    methods: {
        checked: function(done) {
            if (done) return {
                checked: true
            };
            else return {
                checked: false
            };
        },

        addTodo: function(e) {
            if (this.todo.trim() !== "") {
                this.todolists.push({
                    todo: this.todo.trim(),
                    done: false
                });
                this.todo = "";
            }
        },

        deleteTodo: function(id) {
            var index = this.todolists.findIndex(function(item) {
                return item.id === id;
            })
            this.todolists.splice(index, 1);
        },

        doneToggle: function(id) {
            var index = this.todolists.findIndex(function(item) {
                return item.id === id;
            })
            this.todolists[index].done = !this.todolists[index].done;
        }
    }

})