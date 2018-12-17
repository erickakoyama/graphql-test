import { ApolloClient } from 'apollo-client';
import cache from './cache'
import { RestLink } from 'apollo-link-rest';

// setup your `RestLink` with your endpoint
const restLink = new RestLink({ 
	uri: "http://localhost:5000/api/", 
	typePatcher: {
		IndividualsList: data => {
			data.items = data.items.map(({id, name}) => ({__typename: 'Individual', id, name}));

			return data;
		}
	} 
});

// setup your client
const client = new ApolloClient({
	link: restLink,
	cache,
});

export default client;