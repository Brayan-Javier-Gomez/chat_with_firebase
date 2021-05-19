const express = require("express");
const path = require('path');
const app = express();


require('./config')

app.use(express.static(__dirname + '/dist/chatFirebase'))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/dist/chatFirebase/index.html'))
})

app.listen(process.env.PORT, () => {
    console.log(`server deploy in port ${process.env.PORT}`);
})