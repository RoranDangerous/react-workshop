import React from 'react'
import ReactDOM from 'react-dom'

import 'milligram'

import TotalScore from './TotalScore'

const scores = [
  { jonathan: 4, chad: 3, kaileen: 6 },
  { jonathan: 3, chad: 6, kaileen: 5 }
]

/*
Where did the TotalScore component go? It's in the TotalScore.js file... go have a peek

TODO: Make a new file in the `step-6` directory called ScoreBoard, and see if you can
create your own component that renders the <table> (and everything in it) from below.
Also, move the scores into the new ScoreBoard component
*/
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
              <td>{score.jonathan}</td>
              <td>{score.chad}</td>
              <td>{score.kaileen}</td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <th>Total</th>
            <th>
              <TotalScore scores={scores} player="jonathan" />
            </th>
            <th>
              <TotalScore scores={scores} player="chad" />
            </th>
            <th>
              <TotalScore scores={scores} player="kaileen" />
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
