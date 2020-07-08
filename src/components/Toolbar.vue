<template>
    <div>
        <v-app-bar
                color="amber darken-1"
                dense
                dark
                fixed
                height="60"
        >
            <div class="pt-4">
                <v-img class="mt-12 pt-12 ml-4 d-none d-sm-flex" src="@/assets/logo (1).png" width="120" height="120"></v-img>
                <v-img class="mt-3 ml-2 d-flex d-sm-none" src="@/assets/logo (1).png" width="70" height="70"></v-img>
            </div>
            <v-toolbar-title>
                <span class="font-weight-light">
                    El Caminante
                </span>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <div class="d-none d-sm-flex">
                <v-btn tile to="/" text class="py-8 x-large">HOME</v-btn>
                <v-btn tile to="/Productos" text class=" py-8 x-large">PRODUCTOS</v-btn>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn tile text class="py-6 x-large"
                               v-bind="attrs"
                               v-on="on">
                            <v-icon left color="white">mdi-motorbike</v-icon>
                            PIDE TU DOMICILIO AQUÍ
                        </v-btn>
                    </template>
                    <span>
                        <v-card>
                            <v-row justify="center">
                                <v-col cols="6">
                                    <v-img class="pl-7" width="70" height="70" :src="require('@/assets/hacer-clic.png')"></v-img>
                                    <v-card-text>PEDIDO EN LÍNEA</v-card-text>
                                </v-col>
                                <v-col cols="6">
                                    <v-card-text>LINEA DOMICILIOS</v-card-text>
                                </v-col>

                            </v-row>

                        </v-card>
                    </span>
                </v-tooltip>
                <v-btn  tile class="py-5" text>
                    <v-icon color="white">mdi-email</v-icon>
                </v-btn>
            </div>
            <v-app-bar-nav-icon @click="overlay =!overlay" class="d-flex d-sm-none mr-2"></v-app-bar-nav-icon>

        </v-app-bar>
        <v-overlay class="d-flex d-sm-none" height="100%" width="100%" :opacity="1" :value="overlay">

            <v-btn class="ml-11"  icon @click="overlay=false">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-btn to="/"   @click="overlay=false" block text class="my-4 x-large">HOME</v-btn>
            <v-btn to="/Productos"  @click="overlay=false" block text class=" my-4 x-large">PRODUCTOS</v-btn>
            <v-btn block  @click="overlay=false" text class="my-4 x-large"><v-icon left color="white">mdi-motorbike</v-icon>
                PIDE TU DOMICILIO AQUÍ</v-btn>
            <v-btn @click="overlay=false" class="my-4 ml-8" text>
                <v-icon color="white">mdi-email</v-icon>
            </v-btn>
        </v-overlay>
        <div class="pt-5">
            <v-divider/>
        </div>

    </div>


</template>

<script>
    export default {
        name: "Toolbar",
        data(){
            return{
                overlay:false,
            }
        },
        methods:{

        },
    }
</script>

<style scoped>

</style>