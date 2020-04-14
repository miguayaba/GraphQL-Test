import express from 'express';
import compression from 'compression';
import graphQLHTTP from 'express-graphql';
import cors from 'cors';
import schema from './schema';

const app = express();

app.use('*', cors());

app.use(compression());

app.use('/', graphQLHTTP({
    schema,
    graphiql: true

}));

const PORT = 5300;
app.listen(
    {port : PORT},
    ()=> console.log(`Hola GraphQL http://localhost:${PORT}/graphql`)
)