const individuals = [{id: 1, name: 'wat'}]

export const resolvers = {
	Query: {
		individuals: () => individuals
	}
}