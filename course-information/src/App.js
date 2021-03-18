import React from 'react'

// The following warning is displayed in the console: SharedArrayBuffer will require cross-origin isolation as of M91, around May 2021. 
// According to various github and stackoverflow posts this issue is fixed but is not yet released

const Header = (props) => {
  console.log('Header Comp: ' + props)
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part1 = (props) => {
  console.log('Part1 Comp: ' + props)
  return (
    <div>
      <p>
        {props.part1.name} {props.part1.exercises}
      </p>
    </div>
  )
}

const Part2 = (props) => {
  console.log('Part2 Comp: ' + props)
  return (
    <div>
      <p>
        {props.part2.name} {props.part2.exercises}
      </p>
    </div>
  )
}

const Part3 = (props) => {
  console.log('Part3 Comp: ' + props)
  return (
    <div>
      <p>
        {props.part3.name} {props.part3.exercises}
      </p>
     </div>
  )
}

const Content = (props) => {
  console.log('Content Comp: ' + props)
  return (
    <div>
      <Part1 part1={props.parts[0]} />
      <Part2 part2={props.parts[1]} />
      <Part3 part3={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  console.log('Total Comp: ' + props)
  return (
    <p>
      Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
