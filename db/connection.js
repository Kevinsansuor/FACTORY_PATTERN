// const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');

const dbUri  = "mongodb+srv://kevinsansuor:admin@db.cvpbs.mongodb.net/?retryWrites=true&w=majority&appName=db"


// const client = new MongoClient(dbUri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });

const startConnection = async () => {

    try {

        console.info('Conexión con base de datos');

        try {
            await mongoose.connect(dbUri);
            console.info('Conectado a la base de datos');
        } catch (error) {
            console.error(error);
            process.exit(1);
        }


        // await client.connect();
        // await client.db("admin").command({ ping: 1 });
        // console.info('Ping con base de datos ok');

    } catch (err) {
        console.error('Error conectando base de datos', err);
    }
}

// const listDatabases = async () => {
//     async function listDatabases(client){
//         databasesList = await client.db().admin().listDatabases();
    
//         console.log("Lista de bases de datos:");
//         databasesList.databases.forEach(db => console.log(` - ${db.name}`));
//     };

//     listDatabases(client);
// }

module.exports = {
     startConnection,
    // listDatabases,
    // client
}