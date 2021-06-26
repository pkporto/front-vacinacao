import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Kids from '@/pages/Kids';
import Vaccination from '@/pages/Vaccination';
import Vaccines from '@/pages/Vaccines';

const routes = [
    {
        path:'/kids',
        component: Kids
    },
    {
        path:'/Vaccination',
        component: Vaccination
    },
    {
        path:'/Vaccine',
        component: Vaccines
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
