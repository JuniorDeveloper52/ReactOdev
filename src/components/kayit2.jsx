import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const AdvancedForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    kvkk: false,
    gender: '',
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container rowing">
<div className='form-containers'>

    <Container >
      <Row>
      <h1 className='h1'> Kayıt Ol</h1>
        <Col md={12}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
              className='w-100'
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                as="select"
                name="country"
                value={formData.country}
                onChange={handleChange}
                >
                <option value="">Select a country</option>
                <option value="TURKİYE">TURKİYE</option>
                <option value="AMERİKA">ABD</option>
                <option value="KANADA">KANADA</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formSubscribe">
              <Form.Check
                type="checkbox"
                name="subscribe"
                label="KVKK METİN SÖZLEŞMESİNİ ONAYLIYORUM"
                checked={formData.kvkk}
                onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className='mt-2' controlId="formGender">
              <Form.Check
                type="radio"
                name="gender"
                value="male"
                label="Male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
                />
              <Form.Check
                type="radio"
                name="gender"
                value="female"
                label="Female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
                />
            </Form.Group>

            <Button variant="primary" className='mt-2 text-center' type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
      <Link className='mt-5' as={Link} to="/kayit">Geri Dön</Link>
                </div>
    </div>
  );
};

export default AdvancedForm;
