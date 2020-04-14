import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { IResolvers, makeExecutableSchema} from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
import graphQLHTTP from 'express-graphql';

const app = express();

app.use('*', cors());

app.use(compression());

const typeDefs = `
    type Query {
        hola: String!
        holaConNombre(nombre: String!): String!
        holaAlCurso: String!
    }
`;

const resolvers: IResolvers = {
    Query : {
        hola(): String{
            return "Hola Mundo";
        },
        holaConNombre(__: void, {nombre}): string {
            return 'Hola Mundo ${nombre}';
        },
        holaAlCurso(): String{
            return "Hola Mundo al curso de GraphQL";
        }
    }
} 

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
})
app.use('/', graphQLHTTP({
    schema,
    graphiql: true

}));

const PORT = 5300;
app.listen(
    {port : PORT},
    ()=> console.log(`Hola GraphQL http://localhost:${PORT}/graphql`)
)