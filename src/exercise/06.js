// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)
  const [error, setError] = React.useState(null)

  const handleChange = event => {
    event.preventDefault()
    const value = event.target.value
    const isValid = value === value.toLowerCase()
    console.log(isValid)
    setError(isValid ? null : 'Username must be lower case')
  }

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="input">Username:</label>
        <input id="input" type="text" ref={inputRef} onChange={handleChange} />
      </div>
      {error && (
        <div role="alert" style={{color: 'red'}}>
          {error}
        </div>
      )}
      <button disabled={error} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
