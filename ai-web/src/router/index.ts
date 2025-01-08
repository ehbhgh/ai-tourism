import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: () => import("@/page/Home/index.vue")

    },
    {
        path: "/detail",
        name: "GoodsDetail",
        component: () => import("@/page/GoodsDetail/index.vue"),
    },
    {
        path: "/compaint",
        name: "Compaint",
        component: () => import("@/page/Compaint/index.vue"),
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
