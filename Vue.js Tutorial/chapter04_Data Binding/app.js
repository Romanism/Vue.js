// Vue 인스턴스를 생성합니다.

new Vue({
    // html 선언시 #을 붙입니다.
    el: '#vue-app',

    data: {
        name: 'JI',
        job: 'Developer',
        website1: 'https://romanism.github.io/',
        website2: 'https://github.com/Romanism',
        website_tag: '<a href ="https://github.com/Romanism">website tag</a>'
    },

    methods: {
        greet: function(time) {
            // this.name : 해당 인스턴스의 이름을 의미(JI)
            return 'Good ' + time + ' ' + this.name + '!!'
        }
    }
});