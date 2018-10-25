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

// creating tables
// id is automatically added, you can also override it.
// createdAt and updatedAt are also automatically added.
const Task = db.define('task', {
    name: {
        type: DT.STRING(50),
        allowNull: false
    },
    priority: {
        type: DT.INTEGER,
        defaultValue: 0
    }
})


/* we run queries like **select 1; ** to see if the connection is established or not */
async function init () {
    await db.authenticate() // To check if connection is correctly established.
    await db.sync() // Update tables, but the schema changes are not applied, or use alter = true.
    // await task.sync()  to sync specific tables

    // await db.sync({force: true}) /* Drops table and creates new one. Never use it in Prodn. */

    // await db.sync({alter: true}) 
    /* Creates backup, and creates a new table and tries to bring
       backed up data into new table */
       
}

async function writeTasks () {
    const task =await Task.create({
        name: 'this is a task',
        priority: 3
    })

    console.log(task)
    console.log('=======================')
    console.log('=======================')
    console.log('=======================')

    task.priority = 5
    console.log(task)
    console.log('=======================')
    console.log('=======================')
    console.log('=======================')

    task.save()
    console.log(task)
}

// writeTasks()  /* this will be called even while init is running, so dont do this

async function doAll () {
    await init()
    await writeTasks()
}

doAll()