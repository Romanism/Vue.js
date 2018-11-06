Vue.component('greeting', {
    template: '<p>Hey there, I am {{ name }}. <button v-on:click="changeName">Change name</button></p>',
    data: function() {
        return {
            name: 'Yoshi'
        }
    },
    methods: {
        changeName: function() {
            this.name = "Mario";
        }
    }
});


var one = new Vue({
    // html 선언시 #을 붙입니다.
    el: '#vue-app-one',
});


var two = new Vue({
    // html 선언시 #을 붙입니다.
    el: '#vue-app-two',
});