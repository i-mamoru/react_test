import ReactDOM from 'react-dom'
import React, {Component} from 'react'

export default class App extends Component {

  render(){
    return(
      <div>
        <div id="test">HELLO REACT</div>
      </div>
    )
  }
}
ReactDOM.render(<App />,document.getElementById('root'))