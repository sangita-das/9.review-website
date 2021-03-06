import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';


const Contact = () => {

  return (
    <div className="container pt-3 mt-5">

      <h1 className="text-center fw-bold text-primary">We'd Love To Hear From You!</h1>
      <p className="text-dark">Our team is here for you. If you want to get in touch about anything at all them send us an email <i className="fw-bold ">learning@gmailcom </i>or give us call during official hours. You can find information about the most common question and issue on our <i className="fw-bold ">Learning Support Hub</i>.</p>


      <h1 className="text-dark text-center fw-bold mt-5  ">Contact Us</h1>

      <div className="contact-area ">
        <div className="container ">
          <div className="row p-5 my-4 d-flex justify-content-between align-items-center text-dark">


            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Enter Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter Subject" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button className="btn lern-btn text-white bg-secondary" variant="primary" type="submit">
                Send Message
              </Button>
            </Form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;