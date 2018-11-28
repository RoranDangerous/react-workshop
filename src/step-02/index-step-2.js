import React from 'react'
import ReactDOM from 'react-dom'

import 'milligram'

const scores = [
  { jonathan: 4, chad: 3, kaileen: 6 },
  { jonathan: 3, chad: 6, kaileen: 5 }
]

function App() {
  return (
    <div className="App">
      <h1>My Board Game Scorer</h1>

      <table>
        <thead>
          <tr>
            <th />
            <th>Jonathan</th>
            <th>Chad</th>
            <th>Kaileen</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, i) => (
            <tr key={i}>
              <td>Round {i + 1}</td>
              {/* TODO: Fix these td elements to display the rounds 
                         score for each person */}
              <td>{score.jonathan}</td>
              <td>{score.chad}</td>
              <td>{score.kaileen}</td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <th>Total</th>
            <th>{scores.reduce((acc, score) => acc + score.jonathan, 0)}</th>
            <th>{scores.reduce((acc, score) => acc + score.chad, 0)}</th>
            <th>{scores.reduce((acc, score) => acc + score.kaileen, 0)}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

// TODO:
// fix the elements with xxx to display the correct score
// TODO:
// make a new component the display the total score
// for a player given all the scores and the player
