import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/producto',
    name: 'Productos',
    
    component: () => import(/* webpackChunkName: "about" */ '../producto.vue')
  },
  {
    path: '/pago',
    name: 'mediosPago',
    
    component: () => import(/* webpackChunkName: "about" */ '../mediosPago.vue')
  },
  {
    path: '/nuevosP',
    name: 'nuevosProductos',
    
    component: () => import(/* webpackChunkName: "about" */ '../nuevosProductos.vue')
  },
  {
    path: '/mostrar',
    name: 'mostrar',
    
    component: () => import(/* webpackChunkName: "about" */ '../indes.vue')
  },
  {
    path: '/carrito',
    name: 'compa',
    
    component: () => import(/* webpackChunkName: "about" */ '../carrito.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
