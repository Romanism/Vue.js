// Vue 인스턴스를 생성합니다.

new Vue({
    // html 선언시 #을 붙입니다.
    el: '#vue-app',

    data: {
        health: 100,
        ended: false
    },

    methods: {
        punch: function() {
            this.health -= 10

            if (this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function() {
            this.health = 100
            this.ended = false
        }
    },

    computed: {

    }
});