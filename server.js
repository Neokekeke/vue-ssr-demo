// node express服务器
const express = require('express')
const app = express()

const path = require('path')
const fs = require('fs')

const vueTemplate = fs.readFileSync(path.join(__dirname, './index.html'), 'utf-8')
const vueServerRender = require('vue-server-renderer').createRenderer({
    template: vueTemplate
})

const creatApp = require('./src/app.js')

app.get('*', (request, respone) => {
    // 获取vue实例
    const vm = creatApp()
    respone.setHeader('Content-type', 'text/html;charset-utf-8')
    vueServerRender.renderToString(vm).then(html => respone.end(html)).catch(err => respone.end(err))
})

app.listen(3001, () => {
    console.log('server start at localhost:3001')
})