// Vue 인스턴스를 생성합니다.

new Vue({
    // html 선언시 #을 붙입니다.
    el: '#vue-app',

    data: {},

    methods: {
        logName: function() {
            console.log('you entered your name');
        },

        logAge: function() {
            console.log('you entered your age');
        }

    }
});