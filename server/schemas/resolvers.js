const { Election } = require('../models');

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
    addSkill: async (parent, { electionId, skill }) => {
      return Election.findOneAndUpdate(
        { _id: electionId },
        {
          $addToSet: { skills: skill },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeElection: async (parent, { electionId }) => {
      return Election.findOneAndDelete({ _id: electionId });
    },
    removeSkill: async (parent, { electionId, skill }) => {
      return Election.findOneAndUpdate(
        { _id: electionId },
        { $pull: { skills: skill } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
