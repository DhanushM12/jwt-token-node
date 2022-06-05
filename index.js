const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.json({
        message: "Hello everyone"
    })
})

app.post('/tokenGeneration', (req, res) => {
    const user = {
        id: 1,
        username: 'octbatch',
        email: 'oct@gmail.com'
    }
    jwt.sign(user, 'secretkey', function(err, token) {
        res.json({
            token
        })
      });
})

app.post('/tokenVerification', takeToken,  (req, res) => {

})
// middleware
function takeToken(req, res, next){
    const bearerHeader = req.headers['authorization']; // Bearer token
    if(bearerHeader !== undefined){
        const bearer = bearerHeader.split(' '); // ['bearer', 'token']
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else{
        res.sendStatus(403);
    }
}

app.listen(port, function(err){
    if(err){
        console.log(`Error in running ther server: ${err}`)
    }
    console.log(`Server is up and running on port: ${port}`)
})