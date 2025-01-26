// import { useParams } from 'react-router-dom'

const Anecdote = ({ anecdote, vote }) => {
  // By this code component recieves all anecdotes
  // and then filters it:
  // const id = useParams().id
  // const anecdote = anecdotes.find(a => a.id === Number(id))

  // Code that recieves only one
  // particular anecdote in App.jsx
  return (
    <div>
      <h3>{anecdote.content}</h3>
      <p>has a {anecdote.votes} votes</p>
      <button onClick={()=> vote(anecdote.id)}>Vote</button>
      <p>For more info see <a href={anecdote.info}>{anecdote.info}</a></p>
      <p>{anecdote.author}</p>
    </div>
  )
}

export default Anecdote