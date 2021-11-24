import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Userform() {
  const [name, setName] = useState('');
  const [email_id, setEmail_id] = useState('');
  const [mobile_number, setMobile_number] = useState('');
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://616f9a8a715a630017b39d25.mockapi.io/api/v1/users', {
        name: name,
        email_id: email_id,
        mobile_number: mobile_number,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    history.push('/users');
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="text"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email_id"
            id="email_id"
            placeholder="Enter email id"
            value={email_id}
            onChange={(e) => setEmail_id(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Mobile Number</Label>
          <Input
            type="tel"
            name="mobile_number"
            id="mobile_number"
            placeholder="Enter mobile number"
            value={mobile_number}
            onChange={(e) => setMobile_number(e.target.value)}
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
