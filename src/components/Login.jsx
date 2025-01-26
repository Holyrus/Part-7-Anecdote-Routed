import { useState } from 'react'
import {
  useNavigate
} from 'react-router-dom'

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
      <form onSubmit={onSubmit}>
        <div>
          Username: <input onChange={(event) => setUsername(event.target.value)}/>
        </div>
        <div>
          Password: <input type='password' />
        </div>
        <button type='submit'>Log in</button>
      </form>
    </div>
  )
}

export default Login