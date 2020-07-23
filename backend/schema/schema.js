const graphql = require('graphql')
const _ = require('lodash')                                       // import graphql module.
const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql            // We did some destructuring 

const BookType = new GraphQLObjectType({                                    // We defined BookType with graphql and name and fields .
    name:'Book',
    fields:() => ({
        id: {type: GraphQLString},
        name:{type: GraphQLString},
        genre:{type:GraphQLString}
    })
})


// dummy data 
const books = [
    {name:'Name of the Wind', genre:'Fantasy',id:'1'},
    {name:'The Final Empire', genre:'Fantasy', id:'2'},
    {name:"The Long Earth", genre:"Sci-Fi",id:"3"},
]
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        book: {
            type: BookType,
            args:{
               id: {type: GraphQLString}
            },
            resolve(parentValue, args){ 
                // move the resolve function to here
                return _.find(books, {id: args.id});
            }
        },

    }
});
module.exports = new GraphQLSchema({
    query:RootQuery
})