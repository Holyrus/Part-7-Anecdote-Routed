import { Link } from 'react-router-dom'

const AnecdoteList = ({ anecdotes, vote, notification }) => {

  const notificationStyle = {
    color: 'green'
  }

  return (
  <div>
    <h2>Anecdotes</h2>
    {notification !== null ?
    <h3 style={notificationStyle}>{notification}</h3> :
    null}
    <ul>
      {anecdotes.map(anecdote =>
        <li key={anecdote.id} >
        <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link> 
        <button onClick={()=> vote(anecdote.id)}>Vote</button> {anecdote.votes} </li>)}
    </ul>
  </div>
)
}

export default AnecdoteList