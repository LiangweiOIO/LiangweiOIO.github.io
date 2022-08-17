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
        path: '/portfolio',
        name: 'portfolio',
        component: () => import('@/pages/portfolio.vue'),
     }
    
];

export default routes
