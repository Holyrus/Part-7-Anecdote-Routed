import { useState } from 'react'
import Menu from './components/Menu'
import AnecdoteList from './components/AnecdoteList'
import About from './components/About'
import Footer from './components/Footer'
import CreateNew from './components/CreateNew'
import Anecdote from './components/Anecdote'
import Login from './components/Login'

// import { Alert } from 'react-bootstrap'

import {
  Routes, Route, useMatch
} from 'react-router-dom'

// npm install react-router-dom

// Using Material Design Library for styling
// npm install @mui/material @emotion/react @emotion/styled

import { Alert, Container } from '@mui/material'

// Using Styled components
// npm install styled-components

import styled from 'styled-components'

const App = () => {

  const [user, setUser] = useState(null)
  const [loginMessage, setLoginMessage] = useState(null)

  const login = (user) => {
    setUser(user)
    setLoginMessage(`Welcome ${user}`)
    setTimeout(() => {
      setLoginMessage(null)
    }, 10000)
  }

  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  // For recieving only one anecdote by Anecdote component

  const match = useMatch('/anecdotes/:id')
  const anecdote = match
   ? anecdotes.find(anec => anec.id === Number(match.params.id))
   : null

  // For using Styled components library

  const Page = styled.div`
    padding: 1em;
    background: papayawhip;
  `

  const Navigation = styled.div`
    background: BurlyWood;
    padding: 1em;
  `

  const FooterStyle = styled.div`
    background: Chocolate;
    padding: 1em;
    margin-top: 1em;
  `

  return (
    <Page>
    <Container>
      <h1>Software anecdotes</h1>
      <Navigation>
        <Menu user={user}/>
      </Navigation>

      {/* Using Material UI  */}

      {(loginMessage && 
        <Alert security='success'>
          {loginMessage}
        </Alert>
      )}

      {/* Using bootstrap */}

      {/* {(loginMessage && 
        <Alert variant='success'>
          {loginMessage}
        </Alert>
      )} */}
      <Routes>
        <Route path="/" element={<AnecdoteList notification={notification} anecdotes={anecdotes} vote={vote} />} />
        <Route path="/anecdotes/:id" element={<Anecdote anecdote={anecdote} vote={vote} />} />
        <Route path="/create" element={<CreateNew setNotification={setNotification} addNew={addNew} />} />
        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login onLogin={login} />} />
      </Routes>
      <FooterStyle>
        <Footer />
      </FooterStyle>
    </Container>
    </Page>
  )
}

export default App
