<template>
  <v-app>
    <Toolbar/>
    <v-carousel cycle
                show-arrows-on-hover
                height="auto">
      <v-carousel-item v-for="(foto,index) in fotos" :key="index" :src="foto.src" class="galeria" max-height="600" contain >
      </v-carousel-item>
    </v-carousel>
    <cards/>
    <v-parallax
            src="https://cdn.foodandwineespanol.com/2020/01/destacada_dom-scaled.jpg" height="300">
      <v-row justify="center" align="center">
        <v-col cols="auto">
          <h1 class="text-center mt-5">NUESTRA COMUNIDAD</h1>
        </v-col>
      </v-row>
      <v-row justify="center" align="start">
        <v-col cols="auto">
          <v-btn class="mx-2 mb-2 justify-center" fab large color="grey lighten-1" v-for="icon in icons" :key="icon" :href="icon.src" target="_blank">
            <v-icon x-large color="black">{{icon.logo}}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>
    <Footer/>
  </v-app>

</template>

<script>
// @ is an alias to /src
import Toolbar from "../components/Toolbar.vue";
import Footer from "../components/Footer.vue";
import Cards from "../components/Cards.vue";
export default {
  name: 'Home',
  components: {
    Cards, Footer,
    Toolbar
  },
  data(){
    return{
      icons:[
        {logo:'mdi-facebook',src:'https://www.facebook.com/elcamiantecafe/'},
        {logo:'mdi-twitter', src:'https://twitter.com/elcaminantecafe?lang=es'},
        {logo:'mdi-linkedin', src:'https://es.linkedin.com/company/cultura-de-cafe-sas?trk=similar-pages_result-card_full-click'},
        {logo:'mdi-instagram',src:'https://www.instagram.com/elcaminante_cafe/?hl=es-la'},
      ],
      fotos:[
        {src:'https://www.juanvaldezcafe.com/sites/default/files/familias-cafeteras-desktop2.jpg'},
        //{src:require('C:\\Users\\Sharon\\Desktop\\web\\vue_CLI\\el_caminante\\src\\assets\\galeriap.png')},
        //{src: require('C:\Users\Sharon\Desktop\web\vue_CLI\el_caminante\src\assets\galeria_prueba.png')}

      ]
    }
  },
  methods:{

  }
}
</script>
<style scoped>
  .galeria{
    width:auto;
    height:auto
  }
</style>