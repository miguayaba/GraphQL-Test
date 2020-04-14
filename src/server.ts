import express from 'express';
import compression from 'compression';
import cors from 'cors';

const app = express();

app.use('*', cors());

app.use(compression());

app.use('/', (re,res)=>{
    res.send('Bienvenido al curso de GraphQL');
});

const PORT = 5300;
app.listen(
    {port : PORT},
    ()=> console.log(`Hola GraphQL http://localhost:${PORT}`)
)