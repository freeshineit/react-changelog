const path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, '../src/main.tsx')
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}