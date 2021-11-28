const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ],
  },
  {
    path: '/NewCharacter',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/NewCharacter.vue') },
    ],
  },
  {
    path: '/Immogen',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Immogen.vue') },
    ],
  },
  {
    path: '/Sareah',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Sareah.vue') },
    ],
  },
  {
    path: '/Gub',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Gub.vue') },
    ],
  },
  {
    path: '/NewSearch',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/NewSearch.vue') },
    ],
  },
  {
    path: '/three',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/three.vue') },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
