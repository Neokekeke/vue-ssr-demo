const Vue = require('vue')
const createRouter = require('./router')
const router = createRouter()

const creatApp = () => new Vue({
    router,
    template: `
    <div>
        <p>
            <router-link to="/">home page</router-link>
        </p>
        <p>
            <router-link to="/info">info page</router-link>
        </p>
    </div>
    `,
})

module.exports = creatApp
