1. What is GraphQL?

A query language that sits between the frontend and backend that allows for flexible querying on the frontend/client side by allowing you to query for the exact data you require without having to worry about multiple endpoints or which endpoints or parameters might be used. It abstracts away the different API endpoints and only requires interaction with the one GraphQL endpoint.

2. GraphQL vs REST?

GraphQL doesn't use HTTP verbs - POST, GET, PATCH, DELETE, etc. GraphQL doesn't require specifying the body and headers of a request. It is good for large, complex, and interrelated data sources. It has a single URL endpoint versus multiple endpoints. It returns data in a flexible structure defined by the client. It is strongly typed.

GraphQL is often considered an alternative to REST, but they can actually co-exist in your stack.

3. What are the benefits of using GraphQL building an API when compared to REST?

REST can be rigid - REST APIs always return a whole dataset, even with information you don't need. You may have to make multiple REST API requests to get the data you require. This affects performance and user experience. On the other hand, GraphQL queries can return the exact data in only one API request and response exchange.

4. GraphQL Foundational Topics:
   a. Query
   Queries are like GET requests. Queries ask for specific fields on objects. The query has exactly the same shape as the result. You can make a sub-selection of fields for an object. GraphQL queries can also traverse related objects and their fields, letting clients fetch lots of related data in one request.
   b. Mutation
   Mutations are operations that involve data writing/data modifying (similar to the HTTP methods POST, PUT, PATCH, DELETE). Any operations that cause writes should be sent explicitly via a mutation. A mutation can contain multiple fields, just like a query. However, while query fields are executed in parallel, mutation fields run in a series, one after the other - the first in guaranteed to finish before the second begins, ensuring we don't end up with a race condition.
   c. Schema and TypesQuery
   A schema defines the fields that can be queried through graphQL, what objects can be returned when querying said fields, and what subfields are available for query when querying a field. When requests come in to a server through graphQL they are validated against the schema, and if valid are subsequently executed, otherwise returning an error.

   Additionally, the schema specifies exactly which queries and mutations are available to be executed.

   graphQL schema are built off of object types that define the kind of object you can fetch, and fields it has. An example:

   ```graphQL
   type Character {
      name: String!
      appearsIn: [Episode!]!
   }
   ```

   The exclamation denotes that a field is non-nullable. By default, all types are nullable in GraphQl and must be sepcified otherwise. Types can be nested within other type definitions. (These are similar to interfaces in typescript?)

   Types can have arguments, which are values provided to a particular field in order to determine what the data in that field will be. Arguments can have default fields.

5. GraphQL Environment
   a. Apollo
   An organization that builds open-source tools and libraries building, managing, and scaling GraphQL API's and applications that use them.

   b.Apollo Client
   Apollo Client is a Javascript library that facilitates querying a graphQL server. When using Apollo Client you instantiate a client based on the URL endpoint of the gprahQL server, and can use the `client.query` method for all subsequent GraphQL queries throughout your application.

   Apollo client allows for the managing of local and remote data. It can be to cache data locally so that Apollo client can respond immediately with already-cached information, as opposed to making another network request.
