import React from 'react';
import MainComponent from './views/main/MainComponent';

const MemoComponent = React.lazy(() => import('./views/memo/MemoComponent'));

const routes = [{
        path: '/',
        exact: true,
        name: 'HOME',
    },
    {
        path: '/main',
        name: 'Main',
        component: MainComponent
    },
    {
        path: '/memo',
        name: '필기장',
        component: MemoComponent
    }
]

export default routes;