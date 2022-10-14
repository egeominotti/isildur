'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')


console.log(`
.___  _________.___.____     ________   ____ _____________ 
|   |/   _____/|   |    |    \\______ \\ |    |   \\______   \\
|   |\\_____  \\ |   |    |     |    |  \\|    |   /|       _/
|   |/        \\|   |    |___  |    \`   \\    |  / |    |   \\
|___/_______  /|___|_______ \\/_______  /______/  |____|_  /
            \\/             \\/        \\/                 \\/ 
Author: egeominotti@gmail.com
`);

module.exports.options = {}

module.exports = async function (fastify, opts) {
    fastify.register(AutoLoad, {
        dir: path.join(__dirname, 'plugins'),
        options: Object.assign({}, opts)
    })

    fastify.register(AutoLoad, {
        dir: path.join(__dirname, 'routes'),
        options: Object.assign({}, opts)
    })
}
