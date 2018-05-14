const path = require('path');

const config = {
    entry: __dirname + '/src/entry.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css/, 
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}

module.exports = config;