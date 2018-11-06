new Vue({
    // html 선언시 #을 붙입니다.
    el: '#vue-app',
    data: {
        output: 'Your Favoriate Food'
    },
    methods: {
        readRefs: function() {
            console.log(this.$refs);
            this.output = this.$refs.input.value;
        }
    }
});