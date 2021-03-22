
import Main from '@/components/main';

import { house } from './house';
import { authenticate } from './authenticate';
import { contract } from './contract';
// import { peony } from './peony';
// import { emailSetting } from './email';
// import { keepAlive } from './keep-alive';
// import { notice } from './notice';
// import { threeRouter } from './three-router';

// 业务
export const business = [
  {
    path: '/business',
    name: 'Business',
    component: Main,
    meta: {
      title: '业务功能',
      topMenu:true,
      icon: 'icon iconfont iconyoujianguanli'
    },
    children: [
      ...house,
      ...authenticate,
      ...contract
      // ...peony,
      // ...emailSetting,
      // ...keepAlive,
      // ...notice,
      // ...threeRouter
    ]
  }
];
