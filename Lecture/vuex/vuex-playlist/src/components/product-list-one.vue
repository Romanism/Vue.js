<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <!-- props 3. props로 받아온 데이터를 뿌려준다. -->
      <li v-for="(product, idx) in saleProducts" v-bind:key="idx">
        <span class="name">{{product.name}}</span>
        <span class="price">{{product.price}}</span>
      </li>
    </ul>
    <button v-on:click="reducePrice(3)">Reduce Price</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  // props 2. App에서 받은 데이터를 props로 받아온다.
  // props: ["products"],
  computed: {
    products() {
      return this.$store.state.products;
    },
    // saleProducts() {
    // 각 컴포넌트마다 이렇게 데이터를 계산한다면 너무 힘들듯.. 그래서 vuex로 한번에 관리
    // const saleProducts = this.$store.state.products.map(product => {
    //   return {
    //     name: "**" + product.name + "**",
    //     price: product.price / 2
    //   };
    // });
    // return saleProducts;

    // return this.$store.getters.saleProducts;
    // },

    // mapGetter를 사용하면 바로 데이터를 불러올 수 있음..
    ...mapGetters(["saleProducts"])
  },

  methods: {
    // reducePrice: function(amount) {
    // this.$store.state.products.forEach(product => {
    //   product.price -= 1;
    // });

    // mutation을 동작하기 위해선 commit을 실행해야한다.
    // this.$store.commit("reducePrice");

    // action을 실행하기 위해서 dispatch를 사용한다.
    // 또한 함수를 실행할때 데이터도 넘겨주려면 같이 넘겨줄수 있다.
    // Store에선 이 데이터를 Payload로 받는다.
    // this.$store.dispatch("reducePrice", amount);
    // }

    // mapActions를 사용하면 바로 액션을 불러올 수 있음..
    ...mapActions(["reducePrice"])
  }
};
</script>

<style scoped>
#product-list-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul {
  padding: 0;
}
#product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #e8800c;
}
</style>

