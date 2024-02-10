const typeDefs = `
  type Election {
    _id: ID
    name: String
    districts: [District]!
  }

  type District {
    _id: ID
    name: String
    electoral: Int
    candidates: [Candidate]!
  }

  type Candidate {
    _id: ID
    name: String
    party: String
    votes: Int
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
    removeElection(electionId: ID!): Election
    addDistrict(name: String!, electoral: Int): District
    removeDistrict(districtId: ID!): District
    addCandidate(name: String!, party: String, votes: Int!): Candidate
    removeCandidate(candidateId: ID!): Candidate
  }
`;

module.exports = typeDefs;
