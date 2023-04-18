import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

function App2() {
    const [formData,setFormData] = useState({});
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const handleEmail = function(e){
    //     setEmail(e.target.value)
    //     console.log(email)
    // }

    // const handlePassword = function(e){
    //     setPassword(e.target.value)
    //     console.log(password);
// }

    const handleChange = function(e){
       
        setFormData((formData)=>(
            {...formData,
            [e.target.name]:e.target.value
        }
        ));
    }

    const handleSubmit = function(e){
        e.preventDefault()
        console.log(formData);
    }

    return (
      <Container className='pt-3 m-5'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={handleChange} name="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={handleChange} name="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
}

export default App2;