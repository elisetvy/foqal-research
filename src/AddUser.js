import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_USER = gql`
  mutation AddUser($username: ID!, $first_name: String!, $last_name: String!) {
    createUser(
      username: $username,
      first_name: $first_name,
      last_name: $last_name) {
      username
    }
  }
`;

function AddUser() {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: ""
  });
  const [addUser, { data, loading, errors }] = useMutation(ADD_USER);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(f => ({ ...f, [name]: value }));
  }
  console.log(data, "DATA IS")
  function handleSubmit(evt) {
    evt.preventDefault();
    addUser({ variables: {
      username: formData.username,
      first_name: formData.firstName,
      last_name: formData.lastName } });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input value={formData.username} name="username" onChange={handleChange} />
      <input value={formData.firstName} name="firstName" onChange={handleChange} />
      <input value={formData.lastName} name="lastName" onChange={handleChange} />
      <button>Add a user!</button>
      {loading && <p>Adding user...</p>}
      {data?.createUser && (
        <h1>Hello, {data.createUser.username}</h1>
      )}
      </form>
    </div>
  )
}

export default AddUser;