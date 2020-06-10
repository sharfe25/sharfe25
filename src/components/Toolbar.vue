<template>
        <v-app-bar
                color="amber darken-1"
                dense
                dark
                absolute

        >
            <div class="mt-8">
                <v-img class=" pt-12 mt-12 ml-5" src="@/assets/logo (1).png" max-height="120"
                       max-width="120"
                       contain></v-img>
            </div>

            <v-spacer></v-spacer>
            <div class="text x-large">
                <v-btn>Home</v-btn>
                <v-btn>Productos</v-btn>
                <v-btn>Menú</v-btn>
                <v-btn icon>
                    <v-icon color="white">mdi-email</v-icon>
                </v-btn>
            </div>


            <v-app-bar-nav-icon ></v-app-bar-nav-icon>
        </v-app-bar>

</template>

<script>
    export default {
        name: "Toolbar",
        data(){
            return{
                drawer:false
            }
        },
        methods:{
            isMobile() {
                if()
            },
        },
    }
</script>

<style scoped>

</style>