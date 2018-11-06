// Vue 인스턴스를 생성합니다.

new Vue({
    // html 선언시 #을 붙입니다.
    el: '#vue-app',

    data: {
        age: 27,
        x: 0,
        y: 0
    },

    methods: {
        add: function(inc) {
            this.age += inc;
        },

        subtract: function(dec) {
            this.age -= dec;
        },

        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        }

    }
});