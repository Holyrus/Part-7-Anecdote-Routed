// import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useField } from "../customHooks/customHooks"

const CreateNew = ({ addNew, setNotification}) => {

  //Using custom hook

  const content = useField('text')
  const author = useField('text')
  const info = useField('text')

  // const [content, setContent] = useState('')
  // const [author, setAuthor] = useState('')
  // const [info, setInfo] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (content.value !== '' && author.value !== '' && info.value !== '') {
      addNew({
        content: content.value,
        author: author.value,
        info: info.value,
        votes: 0
      })
      // setContent('')
      // setAuthor('')
      // setInfo('')

      navigate('/')
      setNotification(`A new anecdote "${content.value}" created!`)
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    }
  }

  const resetHandle = (event) => {
    event.preventDefault()
    content.onReset()
    author.onReset()
    info.onReset()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        {/* <div>
          content
          <input name='content' value={content} onChange={(e) => setContent(e.target.value)} />
        </div> */}
        {/* <div>
          author
          <input name='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          url for more info
          <input name='info' value={info} onChange={(e)=> setInfo(e.target.value)} />
        </div> */}

        <div>
          Content
          <input {...content} />
        </div>
        
        <div>
          Author
          <input {...author} />
        </div>
        <div>
          Url for more info
          <input {...info} />
        </div>
        <button type='submit'>Create</button>
        <button onClick={(e) => resetHandle(e)}>Reset</button>
      </form>
    </div>
  )

}

export default CreateNew