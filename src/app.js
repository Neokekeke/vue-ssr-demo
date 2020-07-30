const Vue = require('vue')
const createRouter = require('./router')
const router = createRouter()

const creatApp = (context) => {
    const app = new Vue({
        router,
        template: `
                <div>
                    <p>
                        <router-link to="/">home page</router-link>
                    </p>
                    <p>
                        <router-link to="/info">info page</router-link>
                    </p>
                    <router-view></router-view>
                </div>
        `,
    })

    return {
        app,
        router
    }
}

module.exports = creatApp