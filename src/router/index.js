import { createRouter, createWebHistory } from "vue-router";
import Countries from "../views/Countries.vue";
import Conflicts from "../views/Conflicts.vue";
import ConflictsDetail from "../views/ConflictsDetail.vue";
import Home from "../views/Home.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: "home",
            component: Home
        },
        {
            path: "/countries",
            name: "countries",
            component: Countries
        },
        {
            path: "/conflicts",
            name: "conflicts",
            component: Conflicts
        },
        {
            path: "/conflicts/:id",
            name: "conflicts-detail",
            component:  ConflictsDetail
        }
    ]
});

export default router;