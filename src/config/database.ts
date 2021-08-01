import {connect} from 'mongoose'

export async function startConnection(){
    const uri = 'mongodb://localhost/api-sexting'
    const db = await connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })

    console.log('Database', db.connection.name, 'is connected')
}