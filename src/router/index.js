const vueRouter = require('vue-router')
const Vue = require('vue')

Vue.use(vueRouter)

const createRouter = () => {
    return new vueRouter({
        mode: 'history',
        routes: [
            {
                name: 'home',
                path: '/',
                component: {
                    template: '<h1>home page</h1>'
                }
            },
            {
                name: 'info',
                path: '/info',
                component: {
                    template: '<h1>info page</h1>'
                }
            }
        ]
    })
}

module.exports = createRouter