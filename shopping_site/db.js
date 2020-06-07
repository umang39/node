let Sequelize = require('sequelize')
let db = new Sequelize('shopping','shopper','myshopper',{
    host : 'localhost',
    dialect  : 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})
const user = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports =module.exports = {
    user
}