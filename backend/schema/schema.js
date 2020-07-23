const graphql = require('graphql')                            // import graphql module.
const { argsToArgsConfig } = require('graphql/type/definition')
const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql            // We did some destructuring 
const BookType = new GraphQLObjectType({                      // We defined BookType with graphql and name and fields .
    name:'Book',
    fields:() => ({
        id: {type: GraphQLString},
        name:{type: GraphQLString},
        genre:{type:GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type: BookType,
            args:{id:{type:GraphQLString}}
        },
        resolve(parents, args){
            //code to get data from db/ other source
            

            
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})