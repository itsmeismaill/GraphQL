module.exports = {
    Query : {
        hello: ()=>{
        return 'hello from graphql again';
        },
        getbooks: (parent,args,context)=> {
           const {books}=context;
         return books;
        },
        getbook:(parent,args,context)=>{
            const {books}=context
            const {id}=args
            const book = books.find((b)=>b.id===id);
            return book;
        }
    },
    Mutation :{
        addbook:(parent,args,context)=>{
           const {books}=context
           const{id,title,description,authorId}=args
           console.log(args)
           books.push({id,title,description,authorId})
           return true;
        },
        deletebook:(parent,args,context)=>{
            const {books}=context
            const{id}=args
            const bookindex=books.findIndex(book=>book.id===id)
            books.splice(bookindex,1)
            return true;
        },
        editbook:(parent,args,context)=>{
            const{books}=context
            const{id,title,description,authorId}=args
            const thebook=books.find(book=>book.id===id)
            if (thebook){
                thebook.title=title||thebook.title
                thebook.description=description||thebook.description
                thebook.authorId=authorId||thebook.authorId
                return true;
            }
            return false
        }
    }
};