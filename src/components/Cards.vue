<template>
    <v-app>
        <v-parallax
                height="auto"
                :src="require('@/assets/fondocafee.png')"

        ><h1 class="text-center font-weight-thin display-2 pa-1">NOTAS DE CAFÉ</h1>
            <p class="text-center font-weight-light px-2">Una cosecha única para los amantes del café</p>
            <v-row>
                <v-col cols="12" md="6" >
                    <v-card  class="px-3">
                        <v-row justify="space-between">
                            <v-col cols="12" md="6" class="pa-0">
                                <v-img
                                        class="pa-0 align-center" width="auto" height="250"
                                        src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/90089545_535114490480459_3129998590359331526_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=o6KhGst_6ZUAX_MhpK_&oh=26fe457b38c01b6281cd92def304b8f4&oe=5F04467F"
                                ></v-img>
                            </v-col>
                            <v-col
                                    cols="12"
                                    md="6"
                                    class="text-center pa-0">
                                <h1 class="font-weight-light subtitle-1 pa-4">Respondiendo al coronavirus</h1>
                                <p class="font-weight-light body-2 pa-4">Estas son nuestras medidas y protocolos para responder a la coyuntura del COVID-19.</p>
                                <v-btn class="ma-5 font-italic font-weight-light" outlined color="red darken-1">Ver más</v-btn>
                            </v-col>
                        </v-row>

                    </v-card>
                </v-col>
                <v-col cols="12" md="6" >
                    <v-card  class="px-3">
                        <v-row justify="space-between">
                            <v-col cols="12" md="6" class="pa-0">
                                <v-img
                                        class="pa-0 align-center" width="auto" height="250"
                                        :src="require('@/assets/vaso.jpg')"
                                ></v-img>
                            </v-col>
                            <v-col
                                    cols="12"
                                    md="6"
                                    class="text-center pa-0">
                                <h1 class="font-weight-light subtitle-1 pa-4">Tu vaso es el primer paso</h1>
                                <p class="font-weight-light body-2 pa-4">Ayuda al planeta y toma tu café en el vaso favorito. ¡Tu vaso es el primer paso!</p>
                                <v-btn class="ma-5 font-italic font-weight-light" outlined color="red darken-1">Ver más</v-btn>
                            </v-col>
                        </v-row>

                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6" >
                    <v-card  class="px-3">
                        <v-row justify="space-between">
                            <v-col cols="12" md="6" class="pa-0">
                                <v-img
                                        class="pa-0 align-center" width="auto" height="250"
                                        :src="require('@/assets/cafe_leofi.jpg')"
                                ></v-img>
                            </v-col>
                            <v-col
                                    cols="12"
                                    md="6"
                                    class="text-center pa-0">
                                <h1 class="font-weight-light subtitle-1 pa-4">Nuevo café liofilizado con micromolido</h1>
                                <p class="font-weight-light body-2 pa-2">El sabor y aroma de un café recién tostado,
                                    ahora está en nuestro nuevo Liofilizado con Micromolido.</p>
                                <v-btn class="ma-4 font-italic font-weight-light" outlined color="red darken-1">Ver más</v-btn>
                            </v-col>
                        </v-row>

                    </v-card>
                </v-col>
                <v-col cols="12" md="6" >
                    <v-card  class="px-3">
                        <v-row justify="space-between">
                            <v-col cols="12" md="6" class="pa-0">
                                <v-img
                                        class="pa-0 align-center" width="auto" height="250"
                                        :src="require('@/assets/tienda.jpg')"
                                ></v-img>
                            </v-col>
                            <v-col
                                    cols="12"
                                    md="6"
                                    class="text-center pa-0">
                                <h1 class="font-weight-light subtitle-1 pa-4 red--text">Abrimos nuevas tiendas para que no dejes de vivir la experiencia El Caminante®</h1>
                                <p class="font-weight-light body-2 pa-2">Entra aquí y descubrelas.</p>
                                <v-btn class="ma-5 font-italic font-weight-light" outlined color="red darken-1">Ver más</v-btn>
                            </v-col>
                        </v-row>

                    </v-card>
                </v-col>
            </v-row>
            <v-btn class="ma-5 font-italic font-weight-light white--text"  color="red darken-1">Ver más</v-btn>
        </v-parallax>
    </v-app>
</template>

<script>
    export default {
        name: "Cards"
    }
</script>

<style scoped>

</style>