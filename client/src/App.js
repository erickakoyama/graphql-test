import React, { Component } from 'react';
import client from './apollo/client';
import gql from 'graphql-tag'
import {ApolloProvider} from 'react-apollo'
import {graphql} from 'react-apollo';
import './App.css';
import schema from './apollo/schema';

const Query = gql`
  query myQuery {
    individuals @rest(type: "IndividualsList", path: "individual/") {
      items {
		  name
	  }
	  total
    }
  }
`;

class IndividualsList extends Component {
	render() {
		const {data: individuals} = this.props;

		return(<div>{JSON.stringify(individuals)}</div>)
	}
}

const QueryResult = graphql(Query)(IndividualsList);

class App extends Component {
	render() {
		return (
			<div>
				<QueryResult />
			</div>
		);
	}
}

const ApolloApp = () => (
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
)

export default ApolloApp;