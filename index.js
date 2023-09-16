import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import db from './db.js'



const resolvers = {
  Query: {
    games(){
      return db.games
    },
    game(_, args){
      return db.games.find((game) => game.id === args.id)
    },
    reviews(){
      return db.reviews
    },
    review(_, args){
      return db.reviews.find((review) => review.id === args.id)
    },
    authors(){
      return db.authors
    },
    author(_, args){
      return db.authors.find((author) => author.id === args.id)
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})


const {url} = await startStandaloneServer(server, {
  listen: {port: 4000}
})

console.log("Appolo server running", 4000)

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
