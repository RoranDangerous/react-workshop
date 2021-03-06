import React from 'react'
import ReactDOM from 'react-dom'

import 'milligram'

function App() {
  return (
    <div className="App">
      <h1>Welcome React Learners</h1>

      <ol>
        <li>Create a codesandbox.io account (this is actually optional)</li>
        <li>
          Go to{' '}
          <strong>
            <a href="http://bit.ly/tsrintroreact">
              http://bit.ly/tsrintroreact
            </a>
          </strong>
        </li>
        <li>Fork the project</li>
      </ol>

      <p>This is a super simple react app.</p>
      <p>
        We'll learn how to make a <SimpleComponent />.
      </p>

      <p>How to pass data into components</p>
      <DataIntoComponents title="Some simple math" expression={1 + 1 + 1 + 1} />

      <ul>
        {['how', 'to', 'iterate', 'over', 'things'].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p>and how to deal with state:</p>
      <InputEcho />

      <p>Feel free to play around in this file until we get started</p>
    </div>
  )
}

function SimpleComponent() {
  return <span style={{ fontWeight: 'bold' }}>SimpleComponent</span>
}

function DataIntoComponents(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>My expression results: {props.expression}</p>
    </div>
  )
}

class InputEcho extends React.Component {
  state = { name: '' }

  updateName = event => {
    this.setState({ name: event.target.value })
  }

  clearName = () => {
    this.setState({ name: '' })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.name}
          onChange={this.updateName}
        />
        {this.state.name ? `Your name: ${this.state.name}` : ''}
        <br />
        <button onClick={this.clearName}>Clear</button>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
