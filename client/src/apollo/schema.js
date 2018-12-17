import {makeExecutableSchema} from 'graphql-tools';
import {graphql} from 'graphql';
import gql from 'graphql-tag'

const individuals = [{id: 1, name: 'Test Individual'}]

export const resolvers = {
	Query: {
		individuals: () => individuals
	}
}

const typeDefs = `
	type Individual {
		id: Int!
		name: String
	}

	type Query {
		individuals: [Individual!]!
	}
`

const Query = `query myQuery{
	individuals {name}
}`;

const schema = makeExecutableSchema({typeDefs, resolvers});

graphql(schema, Query).then(console.log)
	// this isnt a great idea keeping in mind apollo client in React?

export default schema;
