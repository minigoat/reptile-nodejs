const fs = require('fs');

function addMapping(router, mapping) {
    for (let url in mapping) {
        if (url.startsWith('GET')){
            //如果url类似'GET xxx'
            let path = url.substring(4);
            router.get(path, mapping[url]);
        } else if (url.startsWith('POST')) {
            let path = url.substring(5);
            router.post(path, mapping[url]);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addControllers(router) {
    let files = fs.readdirSync(__dirname + '/controllers');
    let js_files = files.filter((f) => {
        return f.endsWith('.js');
    });

    for (let f of js_files) {
        let mapping = require(__dirname + '/controllers/' + f);
        addMapping(router, mapping);
    }
}

module.exports = function(dir) {
    let controllers_dir = dir || 'controllers', router = require('koa-router')();
    addControllers(router, controllers_dir);
    return router.routes();
}