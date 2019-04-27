//CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to database.')
    }

    const db = client.db(databaseName)

    //How to insert only one data in the database
    // db.collection('users').insertOne({
    //     name: 'Matheus',
    //     age: 25
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // 
    // db.collection('users').insertMany([
    //     {
    //         name: 'Messias',
    //         agr: 25
    //     },{
    //         name: 'Bruno',
    //         age: 35
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'Go to market.',
            completed: true
        },{
            description: 'Go to bar.',
            completed: false
        },{
            description: 'ask for an IFood',
            completed: true
        }
    ], (error, result) => {
        if(error){
            return console.log('Unable to insert documents')
        }

        console.log(result.ops)
    })
})