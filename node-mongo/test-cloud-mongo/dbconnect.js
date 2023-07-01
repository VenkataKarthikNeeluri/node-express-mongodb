


const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://nvenkatakarthik028:nVK1479@cluster0.0jev3cd.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

module.exports = { client }

async function main() {
    try{
        await client.connect()

        console.log(`mongodb connected`)
    } finally {
        // await client.close()
    }
}

main().catch(err => console.log(err.message))

