const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes;
const db = new Sequelize({
    dialect: 'sqlite', // for telling sequelize the type of database we are using **important**
    /* server based databases
    userame: '...'
    database: '...',
    password: '... ',
    host: 'abcd.server.com',
    port: 3333.
    */

    storage: __dirname + '/test.db',
})


/* we run queries like **select 1; ** to see if the connection is established or not */
async function task () {
    await db.sync()
    await db.authenticate() // To check if connection is correctly established.
}

task()