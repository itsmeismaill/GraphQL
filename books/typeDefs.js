
const {gql}=require('apollo-server-express');
module.exports= gql`
    type Query{
      hello : String
      getbooks:[Book]
      getbook(id:ID!) : Book    
    }
    type Book{
        id: ID!
        title: String!
        description: String 
        authorId :String
        # ! = required
    }
    type Mutation{
        addbook(
        id: ID!
        title: String!
        description: String
        authorId :String ):Boolean! 
        deletebook(id:ID!):Boolean!
        editbook(
        id: ID!
        title: String
        description: String
        authorId :String ):Boolean!
    }
    
    
       
`;