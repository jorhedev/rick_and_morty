const http = require('http');
const data = require('./utils/data');

http
.createServer((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes( "/rickandmorty/character") ){
        let id = req.url.split("/").at(-1);

        let characterFound = data.find((character) =>
            character.id === +id)
        

        res
        .writeHead(200, {"Content-Type" : "application/json"})
        .end(JSON.stringify(characterFound))
    
    }
})
.listen(3001, "localhost")