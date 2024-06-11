import React, { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

import { Alert, Button, Container, Col, Form, Row } from 'react-bootstrap'

const ContactForm = () => {
  const [showAlert, setShowAlert] = useState(false)
  const [alertText, setAlertText] = useState('')
  const [alertType, setAlertType] = useState('danger')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'firstName':
        setFirstName(e.target.value)
        break
      case 'lastName':
        setLastName(e.target.value)
        break
      case 'email':
        setEmail(e.target.value)
        break
      default:
        break
    }
  }

  const validateEmail = (input: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return regex.test(input)
  }

  const validateForm = () => {
    if (firstName === '' || lastName === '' || email === '') {
      setAlertType('danger')
      setAlertText('All inputs must be completed.')
      setShowAlert(true)
      return false
    } else if (!validateEmail(email)) {
      setAlertType('danger')
      setAlertText('Invalid Email Format')
      setShowAlert(true)
      return false
    }

    return true
  }

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const isValid = validateForm()

    if (isValid) {
      console.log({
        firstName,
        lastName,
        email,
      })
    }
  }

  return (
    <Container>
      <Alert
        variant={alertType}
        show={showAlert}
        onClose={() => setShowAlert(false)}
        dismissible
      >
        <p>{alertText}</p>
      </Alert>
      <Form onSubmit={handleFormSubmit}>
        <Row className="justify-content-center mt-2">
          <Col xs={10} md={4}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John"
                value={firstName}
                name="firstName"
                onChange={inputChange}
              />
            </Form.Group>
          </Col>
          <Col xs={10} md={4}>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Smith"
                value={lastName}
                name="lastName"
                onChange={inputChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
          <Col xs={10} md={4}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="test@test.com"
                value={email}
                name="email"
                onChange={inputChange}
              />
            </Form.Group>
          </Col>
          <Col xs={10} md={4}></Col>
        </Row>
        <Row className="justify-content-center mt-2">
          <Col xs={10} md={4}>
            <Button type="submit">Submit</Button>
          </Col>
          <Col xs={10} md={4}>
            <div></div>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default ContactForm
