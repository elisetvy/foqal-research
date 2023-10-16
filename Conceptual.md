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
       s