let React = require('react');
let ReactDOM = require('react-dom');
require('./index.css');


class App extends React.Component {
  render(){
    return(
      <div>Hello react training!</div>
    )
   }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
