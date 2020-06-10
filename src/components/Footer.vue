<template>
    <v-app>
        <v-footer
                padless
                dark
                absolute
        >
                <v-row      justify="center"
                            no-gutters>
                    <v-col cols="12" >
                        <v-btn
                                v-for="link in links"

                                color="white"
                                text
                                rounded
                                class="ma-0"
                        >
                            {{ link.nombre }}
                        </v-btn>
                        <v-divider/>
                    </v-col>
                </v-row>

                <v-row class="justify-center align-center" >
                    <v-col cols="12" md="auto">
                        <img class="justify-center" src="@/assets/logo (1).png" height="80" whidth="80">
                    </v-col>
                    <v-col cols="12" md="4">
                        <p class="ma-5 align-center">{{ new Date().getFullYear() }} — <strong >El Caminante®</strong></p> <p class="overline ma-5">Todos los derechos reservados
                        Política de protección de datos personales / Términos y condiciones</p>
                    </v-col>
                    <v-col cols="12" md="auto">
                        <v-btn class="mx-2" fab small color="amber darken-1" v-for="icon in icons">
                            <v-icon>{{icon}}</v-icon>
                        </v-btn>
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
                        'mdi-facebook',
                        'mdi-twitter',
                        'mdi-linkedin',
                        'mdi-instagram',
                    ]
                }
        }
    }
</script>

<style scoped>

</style>