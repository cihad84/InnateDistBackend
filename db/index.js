// let admin = require('pg');

// const pool = new admin.Client({
//     user: 'cihadakkaya',
//     host: 'localhost',
//     database: 'Innate Dist',
//     port: process.env.pgPORT
// });

// let connected = await pool.connect();

// const query = (text, params, callback) => {
//   return pool.query(text, params, callback)
// }
// await pool.end();



const { Client } = require('pg')

const query = async () => {
  try {
    const client = new Client({
    user: 'cihadakkaya',
    host: 'localhost',
    database: 'Innate Dist',
    port: process.env.pgPORT
    })
    await client.connect();
    let result = (text, params, callback) => {
      return client.query(text, params, callback)
      }
  } catch (error) {
    console.log(error)
  }
}






  module.exports = query;