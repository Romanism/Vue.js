// ES5 기준으로 코드를 작성하다보니 번잡해보이는 경우가 많습니다.. 오타 찾기도 힘들고..
var Login = {
  template: `
    <div>
      Login Section
      <router-view>
        <form action="/" method="post">
          <div>
              <label for="account">E-mail : </label>
              <input type="email" id="account">
          </div>
          <div>
              <label for="password">Password : </label>
              <input type="password" id="password">
          </div>
        </form>
      </router-view>
    </div>
  `,
};
var LoginForm = {
  template: `
    <form action="/" method="post">
      <div>
          <label for="account">E-mail : </label>
          <input type="email" id="account">
      </div>
      <div>
          <label for="password">Password : </label>
          <input type="password" id="password">
      </div>
    </form>
  `,
};
var List = {
  template: `
    <div>
      List Section
      <router-view></router-view>
    </div>
  `,
};
var ListItems = {
  template: `
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  `,
};

// nested router라는 것을 알 수 있습니다.
var routes = [
  {
    path: '/login',
    component: Login,
    children: [
      { path: '', component: LoginForm }
    ]
  },
  {
    path: '/list',
    component: List,
    children: [
      { path: '', component: ListItems }
    ]
  }
];

var router = new VueRouter({
  routes
});

var app = new Vue({
  router
}).$mount('#app');
