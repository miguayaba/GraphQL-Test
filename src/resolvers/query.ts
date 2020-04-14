import { IResolvers } from "graphql-tools";

const query: IResolvers = {
    Query : {
        hola(): String{
            return "Hola Mundo";
        },
        holaConNombre(__: void, {nombre}): string {
            return `Hola Mundo ${nombre}`;
        },
        holaAlCurso(): String{
            return "Hola Mundo al curso de GraphQL";
        }
    }
} 

export default query;