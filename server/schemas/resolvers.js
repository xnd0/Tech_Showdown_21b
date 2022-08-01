const { AuthenticationError } = require('apollo-server-express');
const { Matchup } = require('../models');

const resolvers = {
  Query: {

    getMatchupList: async () => {
        return Matchup.find();
      },
  },

};

module.exports = resolvers;
