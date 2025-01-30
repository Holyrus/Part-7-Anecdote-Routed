import { Link } from 'react-router-dom'
// import { Table } from 'react-bootstrap'
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material'

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

    {/* Using Material UI */}

    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {anecdotes.map(anecdote =>
          <TableRow key={anecdote.id}>
            <TableCell>
              <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link> 
            </TableCell>
            <TableCell>
              <button onClick={()=> vote(anecdote.id)}>Vote</button> {anecdote.votes}
            </TableCell>
          </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>

    {/* Using bootstrap */}

    {/* <Table striped>
      <tbody>
        {anecdotes.map(anecdote =>
          <tr key={anecdote.id}>
            <td>
              <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link> 
            </td>
            <td>
              <button onClick={()=> vote(anecdote.id)}>Vote</button> {anecdote.votes}
            </td>
          </tr>
          )}
      </tbody>
    </Table> */}
  </div>
)
}

export default AnecdoteList