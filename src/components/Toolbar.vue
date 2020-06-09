<template>
        <v-app-bar
                color="amber darken-1"
                dense
                dark
        >

            <v-toolbar-title class="font-weight-thin">EL CAMINANTE</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn text x-large>Home</v-btn>
            <v-btn text x-large>Productos</v-btn>
            <v-btn text x-large>Menú</v-btn>
            <v-btn icon>
                <v-icon color="white">mdi-email</v-icon>
            </v-btn>

        </v-app-bar>

</template>

<script>
    export default {
        name: "Toolbar",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>