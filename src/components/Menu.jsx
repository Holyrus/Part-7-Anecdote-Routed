import { Link } from 'react-router-dom'

const Menu = ({ user }) => {
  const padding = {
    paddingRight: 5
  }
  return (
      <div>
        <Link style={padding} to="/">Anecdotes</Link>
        <Link style={padding} to="/create">Create new</Link>
        <Link style={padding} to="/about">About</Link>
        {user
          ? <em>{user} Logged in</em>
          : <Link style={padding} to="/login">Login</Link>}
      </div>
  )
}

export default Menu