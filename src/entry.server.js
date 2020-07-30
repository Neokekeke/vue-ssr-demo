const createApp = require('./app.js')

module.exports = (context) => {
    return new Promise((reslove, reject) => {
        const {
            url
        } = context
        console.log('context', url)

        const {
            app,
            router
        } = createApp(context)
        router.push(url)

        // router的回调函数
        // 当所有异步请求完成时触发
        router.onReady(() => {
            let matchedComponents = router.getMatchedComponents()
            console.log('matchedComponents', matchedComponents)
            if (!matchedComponents.length) {
                return reject({
                    msg: 'error'
                })
            }
            reslove(app)
        }, reject)
    })
}