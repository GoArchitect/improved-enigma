import Main from '@/components/main';
// t_contract路由
export const contract = [
    {
        path: '/contract',
        name: 'Contract',
        component: Main,
        meta: {
            title: '合同管理',
            icon: 'icon iconfont iconyoujianguanli'
        },
        children: [
            //  买卖合同
            {
                path: '/contract/transaction',
                name: 'Transaction',
                meta: {
                    title: '买卖合同',
                    privilege: [
                        { title: '新增', name: 'transaction-list-add' }
                    ]
                },
                component: () => import('@/views/business/contract/contract-list.vue')
            },
            //  租赁合同
            {
                path: '/contract/tenancy',
                name: 'Tenancy',
                meta: {
                    title: '租赁合同',
                    privilege: [
                        { title: '查询', name: 'peony-list-query' },
                        { title: '新增', name: 'peony-list-add' },
                        { title: '编辑', name: 'peony-list-update' },
                        { title: '批量删除', name: 'peony-list-batch-delete' },
                        { title: '批量导出', name: 'peony-list-batch-export' },
                        { title: '导出全部', name: 'peony-list-export-all' }
                    ]
                },
                component: () => import('@/views/business/contract/tenancy-contract-list.vue')
            },
            //  居间服务合同
            {
                path: '/contract/intermediate',
                name: 'Intermediate',
                meta: {
                    title: '居间服务合同',
                    privilege: [
                        { title: '查询', name: 'peony-list-query' },
                        { title: '新增', name: 'peony-list-add' },
                        { title: '编辑', name: 'peony-list-update' },
                        { title: '批量删除', name: 'peony-list-batch-delete' },
                        { title: '批量导出', name: 'peony-list-batch-export' },
                        { title: '导出全部', name: 'peony-list-export-all' }
                    ]
                },
                component: () => import('@/views/business/contract/tenancy-contract-list.vue')
            }
        ]
    }
];
