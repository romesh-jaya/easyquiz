import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/signup',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Signup.vue') }],
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Login.vue') }],
  },
  {
    path: '/password-reset',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PasswordReset.vue') },
    ],
  },
  {
    path: '/password-update',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PasswordUpdate.vue') },
    ],
  },
  {
    path: '/create-edit-quiz',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CreateEditQuiz.vue') },
    ],
  },
  {
    path: '/my-quizzes',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/MyQuizzes.vue') }],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
