// // Composables
// import { createRouter, createWebHistory } from 'vue-router'

// const routes = [
//   {
//     path: '/',
//     component: () => import('@/layouts/default/Default.vue'),
//     children: [
//       {
//         path: '',
//         name: 'Home',
//         // route level code-splitting
//         // this generates a separate chunk (about.[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
//       },
//     ],
//   },
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// })

// export default router



import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage'

const router = createRouter({
    history: createWebHistory("/portfolio-project/"),
    routes: [
        { path: '/', component: HomePage },
        // { path: '/accessories/', component: ProductPage, props: { page: 'accessories' } },
    ]
})

export default router