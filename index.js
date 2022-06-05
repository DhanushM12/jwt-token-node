const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.json({
        message: "Hello everyone"
    })
})

app.listen(port, function(err){
    if(err){
        console.log(`Error in running ther server: ${err}`)
    }
    console.log(`Server is up and running on port: ${port}`)
})