const { gql } = require('apollo-server-express');



const typeDefs = gql`
  type Matchup {
    _id: ID
    tech1: String
    tech2: String
  }

  type Query {
    getMatchupList: [Matchup]
  }
`;



module.exports = typeDefs;
