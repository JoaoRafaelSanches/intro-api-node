const express = require('express'); 
const cors = require('cors');


const app = express(); 
app.use(cors()); 
app.use(express.json()); ;

const porta = 3333;

app.listen(porta, () => {
    console.log('Servidor iniciado na porta ' + porta);
});

app.get('/', (request, response) => {
    response.send('Hello World');
});

