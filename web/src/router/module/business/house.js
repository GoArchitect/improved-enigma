import Main from '@/components/main';
// t_house路由
export const house = [
    {
        path: '/house',
        name: 'House',
        component: Main,
        meta: {
            title: '房源管理',
            icon: 'icon iconfont iconyoujianguanli'
        },
        children: [
            //  租房信息
            {
                path: '/house/new-house-list',
                name: 'NewHouseList',
                meta: {
                    title: '租房信息',
                    privilege: [
                        { title: '查询', name: 'peony-list-query' },
                        { title: '新增', name: 'peony-list-add' },
                        { title: '编辑', name: 'peony-list-update' },
                        { title: '批量删除', name: 'peony-list-batch-delete' },
                        { title: '批量导出', name: 'peony-list-batch-export' },
                        { title: '导出全部', name: 'peony-list-export-all' }
                    ]
                },
                component: () => import('@/views/business/house/house-list.vue')
            },
            //  二手房源信息
            {
                path: '/house/old-house-list',
                name: 'OldHouseList',
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
                component: () => import('@/views/business/house/house-list.vue')
            }
        ]
    }
];
