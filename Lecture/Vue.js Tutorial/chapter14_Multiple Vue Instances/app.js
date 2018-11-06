// Vue 인스턴스를 생성합니다.

var one = new Vue({
    // html 선언시 #을 붙입니다.
    el: '#vue-app-one',

    data: {
        title: 'Vue App One',

    },

    methods: {

    },

    computed: {
        greet: function() {
            return 'Hello from app one :)'
        }

    }
});


var two = new Vue({
    // html 선언시 #을 붙입니다.
    el: '#vue-app-two',

    data: {
        title: 'Vue App Two',
    },

    methods: {
        changeTitle: function() {
            one.title = "Title changed";
        }
    },

    computed: {
        greet: function() {
            return 'Hi Guys! :)'
        }
    }
});