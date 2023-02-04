// import MainAPI from './mainApi';

const http = require('http');
const fs = require('fs')
const Data = fs.readFileSync(`${__dirname}/mainAPI.js`)

const server = http.createServer((req,res)=>{
    res.end(`
    [
        {
            name: "Maruf Suborno"
        },
        {
            name: "Maruf Suborno"
        },
        {
            name: "Maruf Suborno"
        },
    ]
    `)
})
server.listen(8000,'127.0.0.1', ()=>{
    console.log('ok');
})