const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/chatFirebase'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/chatFirebase/index.html')
})





app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})