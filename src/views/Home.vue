<template>
  <v-app>
    <v-carousel cycle
                show-arrows-on-hover
                height="auto">
      <v-carousel-item v-for="(foto,index) in fotos" :key="index" :src="foto.src" class="galeria" max-height="600" contain >
      </v-carousel-item>
    </v-carousel>
    <cards/>
    <v-parallax
            src="https://cdn.foodandwineespanol.com/2020/01/destacada_dom-scaled.jpg" height="300">
      <v-container>
        <v-row justify="center">
          <v-col cols="12">
            <h1 class="text-center">NUESTRA COMUNIDAD</h1>
          </v-col>
          <v-col cols="12">
            <v-btn class="mx-2 text-center" fab color="grey lighten-1" v-for="icon in icons">
              <v-icon>{{icon}}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>

    </v-parallax>
  </v-app>

</template>

<script>
// @ is an alias to /src

import Cards from "../components/Cards";
export default {
  name: 'Home',
  components: {
    Cards,
  },
  data(){
    return{
      icons:[
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      fotos:[
        {src:'https://www.juanvaldezcafe.com/sites/default/files/familias-cafeteras-desktop2.jpg'},
        //{src:require('C:\\Users\\Sharon\\Desktop\\web\\vue_CLI\\el_caminante\\src\\assets\\galeria2.png')},
        //{src: require('C:\Users\Sharon\Desktop\web\vue_CLI\el_caminante\src\assets\galeria_prueba.png')}

      ]
    }
  }
}
</script>
<style scoped>
  .galeria{
    width:auto;
    height:auto
  }
</style>