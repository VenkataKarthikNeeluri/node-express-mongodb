const { client } = require('./dbconnect')
const dbName = "userdb"

let data = [
    {
        name: "karthik",
        email: "karthik@gmail.com"
    },
    {
        name: "Keerthik",
        email: "keerthik@gmail.com"
    },
    {
        name: "Vid",
        email: "vid@gmail.com"
    }
];

async function main() {
    try{
        await client.connect()
        console.log('mongodb connected')
        const db = client.db(dbName)
        const collection = db.collection('users')
        const insResp = await collection.insertMany(data)
        console.log(`users data inserted successfully ${insResp}`)
    } finally {
    //     await client.close()
     }
}

main().catch(err => console.log(err.message))