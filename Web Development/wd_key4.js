/*
WEB DEVELOPMENT QUIZ 4 — NODEJS & EXPRESS
TechLabs Aachen | Digital Shaper Program
---------------------------------------------------------
FRONTEND DOES NOT NEED TO DO QUIZ 4, BUT QUIZ 5 INSTEAD.

Instructions:
1. Fill in your name or email in the variable below.
2. Complete the coding tasks.
3. Run `node wd_checker.js 3 your_email_here` to verify and get your key.
*/

const name = "faqun";

// === TASK 1 ===
// Create an Express app that responds to GET /hello with "Hello <name>"
function createServer(name) {
    // Pseudo code – not actually running a server
    /*const express = require('express')
    const app = express();
    app.get('/hello', (request,response) => { 
            res.send(`Hello ${name}`);
    })
    const server = app.listen(3000,() => { 
            console.log(`Example App from express.js`)}
    ) */
    return { route: "/hello", response: `Hello ${name}` };
}

// === TASK 2 ===
// Return SQL command to create a table "users" with columns: id INT, name TEXT
function createSQL() {
    // TODO
    return "CREATE TABLE users (id INT, name TEXT);";
}

// === TASK 3 ===
// Return SQL insert command that adds your name to the users table.
function insertSQL(name) {
    // TODO
    return `INSERT INTO users (name) VALUES ('${name}');`;
}

// === TASK 4 ===
// Return SQL select command that retrieves your name.
function selectSQL(name) {
    // TODO
    //return `SELECT name FROM users WHERE name = "faqun";`;
    return `SELECT * FROM users WHERE name = '${name}';` 
}

module.exports = { name, createServer, createSQL, insertSQL, selectSQL };
