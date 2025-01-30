import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import {
  useNavigate
} from 'react-router-dom'
// import { Form, Button } from 'react-bootstrap'

const Login = ({ onLogin }) => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    onLogin(username)
    setUsername('')
    navigate('/')
  }

  return (
    <div>
      <h2>Login</h2>

      {/* Using Material UI  */}

      <form onSubmit={onSubmit}>
        <div>
          <TextField label="Username" onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div>
          <TextField label="Password" type='password' />
        </div>
        <div>
          <Button variant='contained' color='primary' type='submit'>
            Login
          </Button>
        </div>
      </form>

      {/* Using bootstrap */}

      {/* <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type='text'
            name='username'
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type='password'
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Login
        </Button>
      </Form> */}
    </div>
  )
}

export default Login