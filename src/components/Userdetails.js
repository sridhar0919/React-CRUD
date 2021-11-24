import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function Userdetails() {
  const { id } = useParams();
  const [userdetails, setUserdetails] = useState([]);
  useEffect(() => {
    fetch(`https://616f9a8a715a630017b39d25.mockapi.io/api/v1/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUserdetails(data));
  }, []);
  return (
    <div>
      <h1>{userdetails?.name}</h1>
      <h1>{userdetails?.email_id}</h1>
      <h1>{userdetails?.mobile_number}</h1>
    </div>
  );
}
