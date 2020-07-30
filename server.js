// node express服务器
const express = require('express')
const app = express()

const path = require('path')
const fs = require('fs')

const vueTemplate = fs.readFileSync(path.join(__dirname, './index.html'), 'utf-8')
const vueServerRender = require('vue-server-renderer').createRenderer({
    template: vueTemplate
})

const App = require('./src/entry.server.js')

app.get('*', async (request, respone) => {
    const {
        url
    } = request

    if (url !== "/favicon.ico") {
        // 获取vue实例
        const vm = await App({
            url
        })

        respone.setHeader('Content-type', 'text/html;charset-utf-8')
        vueServerRender.renderToString(vm).then(html => respone.end(html)).catch(err => respone.end(err))
    }
})

app.listen(3001, () => {
    console.log('server start at localhost:3001')
})