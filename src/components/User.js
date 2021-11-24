import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Table } from 'reactstrap';
import { useHistory } from 'react-router';
import Userform from './Userform';
import axios from 'axios';

export default function User() {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  const getUserdetails = () => {
    fetch('https://616f9a8a715a630017b39d25.mockapi.io/api/v1/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    getUserdetails();
  }, []);

  const viewUserDetails = (id) => {
    history.push(`users/${id}`);
  };

  const deleteUser = (id) => {
    axios
      .delete(`https://616f9a8a715a630017b39d25.mockapi.io/api/v1/users/${id}`)
      .then((res) => {
        alert('user deleted');
        getUserdetails();
      })
      .catch((err) => alert(err));
  };

  const updateUser = (id) => {
    history.push(`editUser/${id}`);
  };

  return (
    <div>
      {/* <Userform /> */}
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email Id</th>
            <th>Mobile Number</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {users.map((userData, index) => (
            <tr key={index}>
              <td>{userData.name}</td>
              <td>{userData.email_id}</td>
              <td>{userData.mobile_number}</td>
              <td>
                <button onClick={() => viewUserDetails(userData.id)}>
                  View
                </button>
                <button onClick={() => deleteUser(userData.id)}>Delete</button>
                <button onClick={() => updateUser(userData.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
