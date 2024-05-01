// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [input, setInput] = React.useState('my placeholder')
  const [error, setError] = React.useState(false)

  const validateInput = input => input === input.toLowerCase()

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = e.target.elements[0].value

    onSubmitUsername(inputValue)
  }

  const handleInput = e => {
    let {value} = e.target
    value = value.toLowerCase()
    setInput(value)
    if (!validateInput(value) || value.length === 0) {
      setError(error => (error = true))
    } else {
      setError(error => (error = false))
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input
          value={input}
          onChange={handleInput}
          type="text"
          id="userNameInput"
        />
      </div>
      <button type="submit" disabled={error}>
        Submit
      </button>
      <div style={error ? {color: 'red'} : {color: 'green'}}>
        {error ? 'THIS IS ERROR!' : 'You can send this form'}
      </div>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
