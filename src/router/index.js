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