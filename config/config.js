require('dotenv').config();

module.exports = {
  development: {
    "username": process.env.username || "root",
    "password": process.env.password || "password",
    "database": process.env.database || "smssystem",
    "port": "3306",
    "dialect": "mysql"
  },
  local: {
    "username": process.env.username || "root",
    "password": process.env.password || "password",
    "database": process.env.database || "smssystem",
    "port": "3306",
    "dialect": "mysql"
  }
}
  