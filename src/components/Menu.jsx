// import { Nav, Navbar } from 'react-bootstrap'
import { AppBar, Button, IconButton, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'

const Menu = ({ user }) => {
  const padding = {
    paddingRight: 5
  }
  return (
      <div>

        {/* Using Material UI  */}

        <AppBar position='static'>
          <Toolbar>
            <IconButton edge="start" color='inherit' aria-label='menu'>
            </IconButton>
            <Button color='inherit' component={Link} to="/">
              Anecdotes
            </Button>
            <Button color='inherit' component={Link} to="/create">
              Create new
            </Button>
            <Button color='inherit' component={Link} to="/about">
              About
            </Button>
            {user
              ? <em>{user} Logged in</em>
              : <Button color='inherit' component={Link} to="/login">
                  Login
                </Button>
            }
          </Toolbar>
        </AppBar>

        {/* With bootstrap styling */}

        {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='me-auto'>
              <Nav.Link href='#' as="span">
                <Link style={padding} to="/">Anecdotes</Link>
              </Nav.Link>
              <Nav.Link href='#' as="span">
                <Link style={padding} to="/create">Create new</Link>
              </Nav.Link>
              <Nav.Link href='#' as="span">
                <Link style={padding} to="/about">About</Link>
              </Nav.Link>
              <Nav.Link href='#' as="span">
                {user
                   ? <em>{user} Logged in</em>
                   : <Link style={padding} to="/login">Login</Link>
                }
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}


        {/* Without styling */}

        {/* <Link style={padding} to="/">Anecdotes</Link>
        <Link style={padding} to="/create">Create new</Link>
        <Link style={padding} to="/about">About</Link>
        {user
          ? <em>{user} Logged in</em>
          : <Link style={padding} to="/login">Login</Link>} */}
      </div>
  )
}

export default Menu