import { useState } from 'react'
import Menu from './components/Menu'
import AnecdoteList from './components/AnecdoteList'
import About from './components/About'
import Footer from './components/Footer'
import CreateNew from './components/CreateNew'
import Anecdote from './components/Anecdote'
import Login from './components/Login'

import {
  Routes, Route, useMatch
} from 'react-router-dom'

// npm install react-router-dom

const App = () => {

  const [user, setUser] = useState(null)

  const login = (user) => {
    setUser(user)
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

  return (
    <div>
      <h1>Software anecdotes</h1>
        <Menu user={user}/>
          <Routes>
            <Route path="/" element={<AnecdoteList notification={notification} anecdotes={anecdotes} vote={vote} />} />
            <Route path="/anecdotes/:id" element={<Anecdote anecdote={anecdote} vote={vote} />} />
            <Route path="/create" element={<CreateNew setNotification={setNotification} addNew={addNew} />} />
            <Route path="/about" element={<About />} />

            <Route path="/login" element={<Login onLogin={login} />} />
          </Routes>
      <Footer />
    </div>
  )
}

export default App
