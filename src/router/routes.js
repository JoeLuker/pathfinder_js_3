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
    path: '/TestCharacter',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/TestCharacter.vue') },
    ],
  },
  {
    path: '/Search',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Search.vue') },
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
