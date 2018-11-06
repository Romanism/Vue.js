// Vue 인스턴스를 생성합니다.

new Vue({
    // html 선언시 #을 붙입니다.
    el: '#vue-app',

    data: {
        age: 20,
        a: 0,
        b: 0
    },

    // methods: {
    //     addToA: function() {
    //         console.log('addToA');
    //         return this.a + this.age;
    //     },

    //     addToB: function() {
    //         console.log('addToB');
    //         return this.b + this.age;
    //     }

    // },

    // 연산 로직이 필요할 경우엔 computed 속성을 사용합니다.
    computed: {
        addToA: function() {
            console.log('addToA');
            return this.a + this.age;
        },

        addToB: function() {
            console.log('addToB');
            return this.b + this.age;
        }

    }
});