<template>
    <v-app>
        <v-carousel cycle
                    show-arrows-on-hover
                    height="400">
            <v-carousel-item v-for="(foto,index) in fotos" :key="index" :src="foto.src" >
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
                    {src:'https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/96733780_663992674161992_3280263088556329059_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=tk51_IF8SY8AX_OObIx&oh=6fc329a545927d56055caecf18fadcba&oe=5F05D8E8'},
                    {src:'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/77358906_145180730147488_8690911938664164787_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=6mna9GHGBCMAX9A4cdN&oh=8cd905ac6fc6445bd073cac6cdde3af3&oe=5F0413F3'},
                    {src: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/88246816_157274445261467_7301304511987493877_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=_B_F-2l9C9EAX9qaG32&oh=a43acdad5cdfd4a2c9f9d16ef01c1184&oe=5F073BBE'}

                ]
            }
        }
    }
</script>

<style scoped>

</style>