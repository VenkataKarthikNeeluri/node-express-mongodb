
const mongoose = require('mongoose')

const connectDb = async () => {
    await mongoose.connect(process.env.MONGO_URI)
        .then(res => {
            console.log(`mongodb connected successfully`)
        }).catch(err => console.log(err.message))
}

module.exports = connectDb