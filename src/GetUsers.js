import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

function GetUsers() {
  const USERS_QUERY = gql`
    {
      users {
        username
      }
    }
  `;
  const { data, loading, error } = useQuery(USERS_QUERY);
  console.log(data);
  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      <ul>
        {data.users.map((user) => (
          <li>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default GetUsers;
