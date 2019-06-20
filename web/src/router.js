import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let routes = [
    {
        path: '*',
        hidden: true,
        redirect: {
            path: '/depenti'
        }
    },
    {
        path: '/depenti',
        component: resolve => require(['./pages/Depenti'], resolve),
        meta: {
          title: 'depenti',
        },
        hidden: true,
    },
    // {
    //     path: '/404',
    //     component: resolve => require(['./pages/404'], resolve),
    //     meta: {
    //     title: '404',
    //     },
    //     hidden: true,
    // },
];

// [
//   'demo',
//   // add your pages under this line
//   // 'table',  // 示例代码，可以删除
//   // 'example',  // 示例代码，可以删除
//   /* eslint-disable no-return-assign */
// ].forEach(m => routes = routes.concat(require(`./pages/${m}/router`).default));

// routes.push({
//   path: '*',
//   hidden: true,
//   redirect: {
//     path: '/404'
//   }
// });

export default new Router({ routes });