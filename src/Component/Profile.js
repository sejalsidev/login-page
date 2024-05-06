import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();
  const location = useLocation();
  const { data: locationData } = location.state || { data: [] };
  const [data, setData] = useState(locationData);
  const [updateIndex, setUpdateIndex] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleDelete = (index, e) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    e.preventDefault();
  };

  const handleUpdate = (index) => {
    setUpdateIndex(index);
    setEmail(data[index].email);
    setPassword(data[index].password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateIndex !== null) {
      const newData = [...data];
      newData[updateIndex] = { email, password };
      setData(newData);
      setUpdateIndex(null);
    }
  };

  return (
    <div>
      <h1>Data Display Page</h1>
      <table className="table table-bordered table table-hover w-25">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.map((item, index) => (
            <tr key={index}>
              <td>{id}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
                <button onClick={() => handleUpdate(index)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {updateIndex !== null && (
        <div>
          <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password:</label>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
        </div>
      )}
    </div>
  );
};

export default Profile;