<template>
  <v-app>
      <Toolbar/>
      <router-view name="main"/>
      <Footer/>
  </v-app>
</template>

<script>

  import Toolbar from "./components/Toolbar";
  import Footer from "./components/Footer";
export default {
  name: 'App',

  components: {
      Footer,
    Toolbar
  },

  data: () => ({
    //
  }),
};
</script>
