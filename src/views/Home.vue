<template>
  <v-app>
    <Galeria/>
    <v-parallax
            height="500"
            src="https://assets.entrepreneur.com/content/3x2/2000/20180910152617-Juanvaldezadiosmexico.jpeg"

    ><h1 class="text-center">NOTAS DE CAFÉ</h1>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-row justify="space-between">
              <v-col cols="6">
                <v-img
                        class="ma-0"
                        height="300"
                        width="300"
                        src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/90089545_535114490480459_3129998590359331526_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=o6KhGst_6ZUAX_MhpK_&oh=26fe457b38c01b6281cd92def304b8f4&oe=5F04467F"
                ></v-img>
              </v-col>
              <v-col
                      cols="6"
                      class="text-center pl-0">
                <h1>Respondiendo al coronavirus</h1>
                <p>Estas son nuestras medidas y protocolos para responder a la coyuntura del COVID-19.</p>
                <v-btn class="ma-2" outlined color="amber">Ver más</v-btn>
              </v-col>
            </v-row>

          </v-card>
        </v-col>
      </v-row>
    </v-parallax>
  </v-app>

</template>

<script>
// @ is an alias to /src
import Galeria from "@/components/Galeria";
export default {
  name: 'Home',
  components: {
    Galeria
  }
}
</script>
