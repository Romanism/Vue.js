<template>
  <div id="app">
    <!-- props 1. App에서 product-list-one 컴포넌트에게 데이터를 준다. -->
    <!-- <product-list-one v-bind:products="products"></product-list-one> -->
    <!-- <product-list-two v-bind:products="products"></product-list-two> -->
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from "./components/product-list-one";
import ProductListTwo from "./components/product-list-two";

export default {
  name: "app",
  components: {
    "product-list-one": ProductListOne,
    "product-list-two": ProductListTwo
  },

  data() {
    return {
      // products: [
      //   { name: "Banana Skin", price: 20 },
      //   { name: "Shiny Star", price: 40 },
      //   { name: "Green Shells", price: 60 },
      //   { name: "Red Shells", price: 80 }
      // ]
    };
  }
};
</script>

<style>
</style>
