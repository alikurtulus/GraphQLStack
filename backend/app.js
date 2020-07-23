const schema = require('./schema/schema')
const express = require('express')                                                               //We import express module on our project
const app = express()                                                                            //We invoke express and assign all thing about express to app
const graphqlHTTP = require('express-graphql')                                                   //This is sort of glue between express and graphql
app.use('/graphql', graphqlHTTP({                                                               //We created a middleware and integrated graphql with this middleware. We should add schema for graphql. 
   schema,
   graphiql:true
}))
app.listen(4000,() => {                                                                         //It listen all requests on port 4000
    console.log('Listening for requests on port 4000')
})
