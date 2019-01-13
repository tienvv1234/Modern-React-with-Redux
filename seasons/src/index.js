import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    // good place for initialized the state
    // when we define the constructor method it's going to be automaticlly
    // called with the prop's object
    super(props) // this is required step, if not will raise up an issue
    // THIS IS THE ONLY TIME we do direct assignment to this.state
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });

        // we did not !!!
        // this.state.lat = position.coords.latitude; do not do this
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  //React says we have to define render method!!
  render() {
    if (this.state.errorMessage && !this.setState.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.setState.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    return <div>Loading!</div>;


  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
