const typeDefs = `
  type Election {
    _id: ID
    name: String
    skills: [String]!
  }

  # Important for useQuery: We define our Query type to inform our entry points
  # The Query type is built-in to GraphQL, so we only need to extend it to include which kinds of information we plan to request in our application
  type Query {
    elections: [Election]!
    # Important for Query Variables: The profile query field allows us to fetch the specific Profile data by using the electionId argument and providing a non-null ID value as the argument value
    election(electionId: ID!): Election
  }

  # Important for useMutation: We define our Mutation type to inform our entrypoints
  type Mutation {
    addElection(name: String!): Election
    addSkill(electionId: ID!, skill: String!): Election
    removeElection(electionId: ID!): Election
    removeSkill(electionId: ID!, skill: String!): Election
  }
`;

module.exports = typeDefs;
