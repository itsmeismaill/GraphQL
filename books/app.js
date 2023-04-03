const express = require('express')
const {ApolloServer,gql}=require('apollo-server-express');
const typeDefs=require('./typeDefs')
const resolvers=require('./resolvers')
const BooksData=require('./BooksData')
async function startServer(){
const app = express()
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:{
        books:BooksData
    }
})

await server.start()
server.applyMiddleware({app})
app.listen(4000,()=>{
    console.log("the express app runs on port 4000")
    console.log("the apollo server runs on port 4000/graphql")
})
}
startServer()
