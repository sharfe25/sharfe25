import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";


Vue.use(VueRouter)

const routes = [
    {
      path: '*',
      redirect:'Home'
    },
    {
        path: '/',
        redirect:'/Home'
    },
    {
        path: '/Home',
        name: 'Home',
        components: {main:Home}
    },
    {
        path: '/Productos',
        name: 'Productos',
        component: () => import('../views/Productos.vue')
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
