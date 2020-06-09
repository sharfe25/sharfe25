<template>
    <v-app>
        <v-carousel cycle
                    show-arrows-on-hover
                    height="400"
                    class="pa-0 ma-0">
            <v-carousel-item v-for="(foto,index) in fotos" :key="index" :src="foto.src" style="width:auto;height:auto;">
            </v-carousel-item>
        </v-carousel>
    </v-app>
</template>

<script>
    export default {
        name: "Galeria",
        data(){
            return{
                fotos:[
                    {src:'https://www.juanvaldezcafe.com/sites/default/files/familias-cafeteras-desktop2.jpg'},
                    {src:'https://media-exp1.licdn.com/dms/image/C561BAQG8NKHylC0zrA/company-background_10000/0?e=2159024400&v=beta&t=-lJ2j5-vWpv32Qwt5ZvqRsswj3WXr37Ln8SXiofLvdY'},
                    {src:'https://www.juanvaldezcafe.com/sites/default/files/field/image/nueva.jpg'},
                    {src: require('C:\\Users\\Sharon\\Desktop\\web\\vue_CLI\\el_caminante\\src\\assets\\4 (1).png')}

                ]
            }
        }
    }
</script>

<style scoped>

</style>