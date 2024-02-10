const { Election, District } = require('../models');

const resolvers = {
  // Important for useQuery: The resolver matches the typeDefs entry point and informs the request of the relevant data
  Query: {
    elections: async () => {
      return Election.find();
    },

    // Important for Query Variables: Each query resolver function can accept up to four parameters.
    // The second parameter, commonly referred to as "args," represents the variable argument values passed with the query.
    // It is always an object, and in this case, we are destructuring that object to retrieve the profileId value.
    election: async (parent, { electionId }) => {
      return Election.findOne({ _id: electionId });
    },
  },
  // Important for useMutation: The resolver matches the typeDefs entry point and informs the request of the relevant data
  Mutation: {
    addElection: async (parent, { name }) => {
      return Election.create({ name });
    },
    removeElection: async (parent, { electionId }) => {
      return Election.findOneAndDelete({ _id: electionId });
    },
    addDistrict: async (parent, { name, electoral }) => {
      return District.create({ name, electoral });
    },
    removeDistrict: async (parent, { districtId }) => {
      return District.findOneAndDelete({ _id: districtId });
    },
  },
};

module.exports = resolvers;
