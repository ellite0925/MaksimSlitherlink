import React from 'react'
import ReactDOM from 'react-dom'
import './reset.css'
import './common.css'
import GameContainer from './containers/GameContainer'
import ProblemsContainer from './containers/ProblemsContainer'

ReactDOM.render((
  <div>
    <header>Slither Link</header>
    <div className="content">
      <GameContainer />
      <ProblemsContainer />
    </div>
    <footer>&copy; Maksim T</footer>
  </div>), document.getElementById('root'))
