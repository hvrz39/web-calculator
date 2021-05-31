export default Routes = {
    homePage: {
        path: '/',
        roles: ['admin']
    },
    balances: {
        path: '/balances',
        name: 'Balances',
        roles: ['admin']
    },
    services: {
        path: '/balances',
        name: 'Services',
        roles: ['admin']
    },
    myrecords: {
        path: '/myrecords',
        name: 'My Records',
        roles: ['user']
    },
    profile: {
        path: '/profile',
        name: 'Name',
        roles: ['user']
    }
};