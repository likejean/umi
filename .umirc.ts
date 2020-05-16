import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/general',
      component: '@/layout/GeneralLayout.tsx',
      routes: [
        {
          path: '/general/about',
          component: '@/pages/about'
        },
        {
          path: '/general/info',
          component: '@/pages/info'
        }
      ]
    },
    { path: '/info', component: '@/pages/info' }
  ],
});
