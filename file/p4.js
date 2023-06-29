const fs = require('fs')

const data = "All file system operations have synchronous, callback, and promise-based forms, and are accessible using both CommonJS syntax and ES6 Modules (ESM)";

// async write
fs.writeFileSync('./documents/test2.txt', data) 

    console.log('async file write completed')
