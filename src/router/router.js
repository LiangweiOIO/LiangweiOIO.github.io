const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/pages/home.vue'),
    },{
        path: '/',
        name: 'home',
        component: () => import('@/pages/home.vue'),
    }, {
        path: '/project',
        name: 'project',
        component: () => import('@/pages/project.vue'),
    }, {
        path: '/design',
        name: 'design',
        component: () => import('@/pages/design.vue'),
     }
    
];

export default routes
