// Vue 인스턴스를 생성합니다.

new Vue({
    // html 선언시 #을 붙입니다.
    el: '#vue-app',

    data: {
        available: false,
        nearby: false
    },

    methods: {

    },

    computed: {
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }

        }
    }
});