<template>
  <v-app>
    <Toolbar/>
    <router-view name="main"/>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";
export default {
  name: 'App',
  components:{
    Toolbar
  }
};
</script>
