import React, { useState } from 'react'

// The following warning is displayed in the console: SharedArrayBuffer will require cross-origin isolation as of M91, around May 2021. 
// According to various github and stackoverflow posts this issue is fixed but is not yet released

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => (
  <div>
    <p>{props.text} {props.value}</p>
  </div>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState([])

  const setFeedback = (feedback, newFeedback, addToAverage) => {
    feedback(newFeedback)
    setAverage(average.concat(addToAverage))
  }

  const findAverage = (numbers) => {
    if (numbers.length === 0) {
      return 'No feedback given'
    }
    return 'average ' + numbers.reduce((a, b) => (a + b)) / numbers.length
  }

  const findPercentGood = (numbers, good) => {
    if (numbers.length === 0) {
      return
    }
    return 'positive ' + good * 100 / numbers.length
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => setFeedback(setGood, good + 1, 1)} text="good" />
      <Button handleClick={() => setFeedback(setNeutral, neutral + 1, 0)} text="neutral" />
      <Button handleClick={() => setFeedback(setBad, bad + 1, -1)} text="bad" />
      <h2>statistics</h2>
      <Statistics text='good' value={good} />
      <Statistics text='neutral' value={neutral} />
      <Statistics text='bad' value={bad} />
      <Statistics text='all' value={average.length} />
      <Statistics value={findAverage(average)} />
      <Statistics value={findPercentGood(average, good)} />
    </div>
  )
}

export default App