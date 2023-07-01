const { client } = require('./dbconnect')
const dbName = "userdb"


async function main() {
    try{
        await client.connect()
        console.log('mongodb connected')
        const db = client.db(dbName)
        const collection = db.collection('users')
            const finResp = await collection.updateOne({email: "karthik@gmail.com"},{
                $set: {
                    name: "Venkata",
                    email: "venkata@gmail.com"
                }
            }) /* updateOne() - to update single user data */
            
            console.log(`users =`, finResp)
    } finally {
        await client.close()
    }
}

main().catch(err => console.log(err.message))