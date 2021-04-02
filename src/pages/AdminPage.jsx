
import React from 'react'
import { Form, Button, Row, Col, Alert } from 'react-bootstrap'
class AdminPage extends React.Component {
  state = {
    register: {
      name: "",
      surname: "",
      email: "",
      password: "",
      YearOfBirth: "",
      Street: "",
      City: "",
      ZipCode: "",
      Account: ""


    }
  }


  submitData = (event) => {

    event.preventDefault()
    const { name, value } = event.target;
    let errors = this.state.register;

    switch (name) {
      case 'name':
        errors.name =
          value.length < 3
            ? 'Name must at least 3  characters long!'
            : '';
        break;

      case 'Surname':
        errors.surname =
          value.length < 2
            ? 'SurName must at least 2 characters long!'
            : '';
        break;


      case 'password':
        errors.password =
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      case 'YearOfBirth':
        errors.YearOfBirth =
          value.length < 1910
            ? 'Your Birth Year must be Greater than 1910'
            : '';
        break;
      case 'PostalCode':
        errors.ZipCode =
          value.length === 5
            ? 'Zip Code must be 5 characters long!'
            : '';
        break;
      case 'Account':
        errors.Account =
          value.length < 16
            ? 'Account must be 16 characters long!'
            : '';
        break;
      default:
        break;


    }
    < Alert variant="success" >
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This example
        text is going to run a bit longer so that you can see how spacing within an
        alert works with this kind of content.
        </p>
    </Alert >


  }
  render() {
    return (
      <>
        <h2 className="text-center">Register to Netflix</h2>
        <Row className="justify-content-center">
          <Col xs={6} md={4}>
            <Form onSubmit={this.submitData} >

              <Form.Group >
                <Form.Label>Name</Form.Label>
                <Form.Control minLength="3" onChange={e => this.setState({
                  register: {
                    ...this.state.register,
                    name: e.target.value
                  }
                })} value={this.state.register.name} type="text" placeholder="Enter Your Name"
                  required

                />

              </Form.Group>

              <Form.Group >
                <Form.Label>Surname</Form.Label>
                <Form.Control minLength="2" onChange={e => this.setState({
                  register: {
                    ...this.state.register,
                    surname: e.target.value
                  }
                })} value={this.state.register.surname} type="text" placeholder="Enter Your Surname"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={e => this.setState({
                  register: {
                    ...this.state.register,
                    email: e.target.value
                  }
                })} value={this.state.register.email} type="email" placeholder="Enter email"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
              </Form.Text>
              </Form.Group>

              <Form.Group >
                <Form.Label>Password</Form.Label>
                <Form.Control pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" onChange={e => this.setState({
                  register: {
                    ...this.state.register,
                    password: e.target.value
                  }
                })} value={this.state.register.password} type="password" placeholder="Password"
                  required
                />
              </Form.Group>

              <Form.Group >
                <Form.Label>Year Of Birth</Form.Label>
                <Form.Control min="1917" onChange={e => this.setState({
                  register: {
                    ...this.state.register,
                    YearOfBirth: e.target.value
                  }
                })} value={this.state.register.YearOfBirth} type="number" placeholder="Year of Birth"
                  required
                />
              </Form.Group>

              <Form.Group >
                <Form.Label>Street Address</Form.Label>
                <Form.Control onChange={e => this.setState({
                  register: {
                    ...this.state.register,
                    Street: e.target.value
                  }
                })} value={this.state.register.Street} type="text" placeholder="Street Address"
                  required
                />
              </Form.Group>

              <Form.Group >
                <Form.Label>City</Form.Label>
                <Form.Control onChange={e => this.setState({
                  register: {
                    ...this.state.register,
                    City: e.target.value
                  }
                })} value={this.state.register.City} type="text" placeholder="City"
                  required
                />
              </Form.Group>

              <Form.Group >
                <Form.Label>Zip</Form.Label>
                <Form.Control minLength="5" maxLength="5" title="your zip code should be 5 digit" onChange={e => this.setState({
                  register: {
                    ...this.state.register,
                    ZipCode: e.target.value
                  }
                })} value={this.state.register.ZipCode} type="text" placeholder="Enter your Zip code"
                  required
                />
              </Form.Group>

              <Form.Group >
                <Form.Label>Enter your Card Number</Form.Label>
                <Form.Control minLength="16" maxLength="16" pattern="[0-9]" title="Your credit card Accouint should be 16 digit number" onChange={e => this.setState({
                  register: {
                    ...this.state.register,
                    Account: e.target.value
                  }
                })} value={this.state.register.Account} type="text" placeholder="Credit card account"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form >
          </Col>
        </Row>
      </>
    )

  }
}


export default AdminPage