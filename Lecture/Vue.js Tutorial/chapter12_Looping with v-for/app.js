// Vue 인스턴스를 생성합니다.

new Vue({
    // html 선언시 #을 붙입니다.
    el: '#vue-app',

    data: {
        // index로 접근해서 표현합니다.
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],

        // key, value 형태로 표현합니다.
        ninjas: [
            { name: 'Ryu', age: 25 },
            { name: 'Yoshi', age: 35 },
            { name: 'Ken', age: 55 },
        ]
    },

    methods: {

    },

    computed: {

    }
});