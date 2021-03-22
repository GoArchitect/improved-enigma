import Main from '@/components/main';
// 鉴定模块
export const authenticate = [
//   {
//     path: '/authenticate',
//     name: 'Authenticate',
//     component: Main,
//     meta: {
//       title: '鉴定模块',
//       icon: 'icon iconfont iconjiekouwendang'
//     },
//     children: [
//       {
//         path: '/authenticate/identity',
//         name: 'Indentity',
//         meta: {
//           title: '身份鉴定',
//           privilege: []
//         },
//         component: () => import('@/views/business/authenticate/identity.vue')
//       },
//       {
//         path: '/authenticate/property',
//         name: 'Property',
//         meta: {
//           title: '房产鉴定',
//           privilege: []
//         },
//         component: () => import('@/views/business/authenticate/property.vue')
//       }
//     ]
//   }
  {
    path: '/authenticate',
    name: 'Authenticate',
    component: Main,
    meta: {
        title: '鉴定模块',
        icon: 'icon iconfont iconyoujianguanli'
    },
    children: [
        //  身份鉴定
        {
            path: '/authenticate/identity',
            name: 'Identity',
            meta: {
                title: '身份鉴定',
                privilege: [
                    { title: '查询', name: 'peony-list-query' },
                    { title: '新增', name: 'peony-list-add' },
                    { title: '编辑', name: 'peony-list-update' },
                    { title: '批量删除', name: 'peony-list-batch-delete' },
                    { title: '批量导出', name: 'peony-list-batch-export' },
                    { title: '导出全部', name: 'peony-list-export-all' }
                ]
            },
            component: () => import('@/views/business/authenticate/identity.vue')
        },
        //  房产鉴定
        {
            path: '/authenticate/property',
            name: 'Property',
            meta: {
                title: '二手房源信息',
                privilege: [
                    { title: '查询', name: 'peony1-list-query' },
                    { title: '新增', name: 'peony1-list-add' },
                    { title: '编辑', name: 'peony1-list-update' },
                    { title: '批量删除', name: 'peony1-list-batch-delete' },
                    { title: '批量导出', name: 'peony1-list-batch-export' },
                    { title: '导出全部', name: 'peony1-list-export-all' }
                ]
            },
            component: () => import('@/views/business/authenticate/property.vue')
        }
    ]
}
];
