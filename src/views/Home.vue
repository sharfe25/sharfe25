<template>
  <div>
    <div class="d-flex d-sm-none mt-12">
      <v-spacer></v-spacer>
    </div>
    <v-carousel cycle
                show-arrows-on-hover
                height="auto" absolute>
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
          <v-btn class="mx-2 mb-2 justify-center" fab large color="grey lighten-1" v-for="icon in icons" :href="icon.src" target="_blank">
            <v-icon x-large color="black">{{icon.logo}}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>
    <v-card color="brown lighten-2">
      <v-card-text class="text-center">
        <h1 class="headline font-weight-black white--text">CONOCE NUESTRAS PROMOCIONES Y LANZAMIENTOS</h1> <br>
        <p class="body-2 font-weight-thin white--text">Queremos que conozcas más sobre El Caminante®. Recibe noticias sobre nuestras promociones y lanzamientos.</p>
      </v-card-text>
      <v-form class="mx-3">
        <v-row  justify="center">
          <v-col cols="12" md="3">
            <v-text-field outlined placeholder="Ingresa tu correo electrónico"  color="brown"></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-btn tile outlined x-large block color="brown">Enviar</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>

  </div>


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
        {logo:'mdi-facebook',src:'https://www.facebook.com/elcamiantecafe/'},
        {logo:'mdi-twitter', src:'https://twitter.com/elcaminantecafe?lang=es'},
        {logo:'mdi-linkedin', src:'https://es.linkedin.com/company/cultura-de-cafe-sas?trk=similar-pages_result-card_full-click'},
        {logo:'mdi-instagram',src:'https://www.instagram.com/elcaminante_cafe/?hl=es-la'},
      ],
      fotos:[
        {src:'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/82408616_547041352562791_6697047250296767414_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=NlCnu_ZNk7wAX_j9tHU&oh=0d047ef0e88c240e804b954351b1817c&oe=5F0AC069'},
        {src:'https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/81215785_298687484423916_7132674879626931743_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=100&_nc_ohc=4Qk-gh_3tcEAX-sDSq0&oh=2d37950b7b819f8ccd78197fc967a911&oe=5F0CFDA1'},
        {src:'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/84860267_184090796180289_8397389239969007195_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=VjshZymT7RAAX8GGP2D&oh=ba6ff39572316325d23f5142d90d6a55&oe=5F0BCA0C'},
        {src:'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/81574352_634682650408428_2625058961698146408_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=QHlN9hB8m3oAX_W6ois&oh=09af4d751e1853c860c9fc0cb5010c24&oe=5F0C7F74'},
        {src:'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/81992845_465049750839946_2030624667013534804_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=1s8kdBwZeAsAX9iwwpU&oh=0571b27767247aafca005cff8af428a9&oe=5F0D24B4'}
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