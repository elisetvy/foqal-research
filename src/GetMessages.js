import { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";

const GET_MESSAGES = gql`
  query GetMessages($username: ID!) {
    user(username: $username) {
      username
      messages {
        body
      }
    }
  }
`;

function GetMessages() {
  const [formData, setFormData] = useState("");
  const [getMessages, { data, error, loading }] = useLazyQuery(GET_MESSAGES);
  console.log(data);

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    getMessages({ variables: { username: formData } });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={formData} name="username" onChange={handleChange} />
        <button>Get messages</button>
      </form>
      {loading && <p>Getting messages...</p>}
      {data?.user && (
        <ul>
          {data.user.messages.map((msg) => (
            <li>{msg.body}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GetMessages;
