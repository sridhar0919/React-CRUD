import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default function Editdata() {
  const [userDetails, setuserDetails] = useState({
    name: '',
    email_id: '',
    mobile_number: '',
    id: '',
  });

  const { name, email_id, mobile_number } = userDetails;
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    fetch(`https://616f9a8a715a630017b39d25.mockapi.io/api/v1/users/${id}`)
      .then((data) => data.json())
      .then((value) => setuserDetails(value));
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    userDetails.id = id;
    axios.put(
      `https://616f9a8a715a630017b39d25.mockapi.io/api/v1/users/${id}`,
      userDetails
    );
    history.push('/users');
  };

  const handleChange = (e) => {
    e.preventDefault();
    setuserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="enter name"
            value={name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup row>
          <Label>Email</Label>
          <Input
            type="email"
            name="email_id"
            id="email_id"
            placeholder="enter email_id"
            value={email_id}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup row>
          <Label>Mobile Number</Label>
          <Input
            type="tel"
            name="mobile_number"
            id="mobile_number"
            placeholder="enter mobile_number"
            value={mobile_number}
            onChange={handleChange}
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
