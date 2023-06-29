const fs = require('fs')

const data = "\n\n Asynchronously append data to a file, creating the file if it does not exit";


// async write
fs.appendFileSync('./documents/test2.txt', data) 

    console.log('append sync success')
