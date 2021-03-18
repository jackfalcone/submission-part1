import React, { useState } from 'react'

// The following warning is displayed in the console: SharedArrayBuffer will require cross-origin isolation as of M91, around May 2021. 
// According to various github and stackoverflow posts this issue is fixed but is not yet released

const Display = (props) => (
  <div>
    <p>{props.anecdote}</p>
    <p>has {props.anecdoteVotes} votes</p>
  </div>
)

const Button = (props) => (
  <div>
    <button onClick={props.handleClick}>
      {props.name}
    </button>
  </div>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length + 1).join('0').split('').map(parseFloat))

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * anecdotes.length)
  }

  const changeAnecdote = () => {
    return setSelected(generateRandomNumber())
  }

  const addVote = (selected) => {
    const votesToChange = [...votes]
    votesToChange[selected] += 1
    setVotes(votesToChange)
  }
  
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Display anecdote={anecdotes[selected]} anecdoteVotes={votes[selected]} />
      <Button handleClick={() => changeAnecdote()} name="next anecdote" />
      <Button handleClick={() => addVote(selected)} name="vote" />
      <h2>Anecdote with most votes</h2>
      <Display anecdote={anecdotes[votes.indexOf(Math.max(...votes))]} anecdoteVotes={Math.max(...votes)}/>
    </div>
  )
}

export default App;
