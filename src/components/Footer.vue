<template>
    <v-app>
        <v-footer
                padless
                dark
                absolute
        >
                <v-row      justify="center"
                            align="center"
                            no-gutters>
                    <v-col cols="auto" >
                        <v-btn
                                v-for="link in links"

                                color="white"
                                text

                                class="mx-2"
                        >
                            {{ link.nombre }}
                        </v-btn>

                    </v-col>
                </v-row>
                <v-row class="justify-center align-center" >
                    <v-col cols="12" class="pa-0">
                        <v-divider/>
                    </v-col>

                    <v-col cols="12"
                           md="4" class="pl-12 ">
                        <img class="justify-center ml-12 pl-12" src="@/assets/logo (1).png" height="90" whidth="90">
                    </v-col>
                    <v-col cols="12"
                           md="4" class="pa-0">
                        <p class="ma-2 text-center">{{ new Date().getFullYear() }} — <strong >El Caminante®</strong></p> <p class="overline ma-1  text-center ">Todos los derechos reservados
                        Política de protección de datos personales / Términos y condiciones</p>
                    </v-col>
                    <v-col cols="12"
                           md="4" class="pl-12">
                        <div class="ml-7">
                            <v-btn class="mx-2 " fab small color="amber darken-1" v-for="icon in icons" :href="icon.src" target="_blank">
                                <v-icon>{{icon.logo}}</v-icon>
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>

        </v-footer>
    </v-app>

</template>

<script>
    export default {
        name: "Footer",
        data(){
                return{
                    links:[
                        {nombre:'Home',src:require('C:\\Users\\Sharon\\Desktop\\web\\vue_CLI\\el_caminante\\src\\views\\Home.vue')},
                        {nombre:'Productos',src:require('C:\\Users\\Sharon\\Desktop\\web\\vue_CLI\\el_caminante\\src\\views\\Home.vue')},
                        {nombre:'Menú',src:require('C:\\Users\\Sharon\\Desktop\\web\\vue_CLI\\el_caminante\\src\\views\\Home.vue')}
                    ],
                    icons:[
                        {logo:'mdi-facebook',src:'https://www.facebook.com/elcamiantecafe/'},
                        {logo:'mdi-twitter', src:'https://twitter.com/elcaminantecafe?lang=es'},
                        {logo:'mdi-linkedin', src:'https://es.linkedin.com/company/cultura-de-cafe-sas?trk=similar-pages_result-card_full-click'},
                        {logo:'mdi-instagram',src:'https://www.instagram.com/elcaminante_cafe/?hl=es-la'},
                    ]
                }
        }
    }
</script>

<style scoped>

</style>