const path = require("path")
const sqlite = require("sqlite3");

const db = new sqlite.Database(
    path.resolve(__dirname, "../../database.db"),
    (error) => {
        if(error){
            return console.error(error);
        }
        
    } 
);

module.exports =db;