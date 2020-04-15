import { IResolvers } from "graphql-tools";

const query: IResolvers = {
    Query : {
        nombre(): String{
            return "Hola Mundo";
        },
        saludos(__: void, {nombre}): string {
            return `Hola ${nombre} pronto serás el Rey de la programación `;
        },
        data(): String{
            return "Hola al curso de GraphQL";
        }
    }
} 

export default query;