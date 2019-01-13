import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends React.Component {
  // constructor(props) {
  // good place for initialized the state or one time setup
  // when we define the constructor method it's going to be automaticlly
  // called with the prop's object
  // RECOMMENDED avoid initial data loading in contrusctor, should do it inside the componentDidMount
  // super(props); // this is required step, if not will raise up an issue

  // THIS IS THE ONLY TIME we do direct assignment to this.state --> refactor to line 16
  //this.state = { lat: null, errorMessage: '' };
  // }

  state = { lat: null, errorMessage: '' };

  renderContent(){
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      // in here we can take the state from one component and pass it
      // as a prop down to the child in this case
      return <SeasonDisplay lat={this.state.lat} />;
      // return <div>Latitude: {this.state.lat}</div>;
    }

    return <Spinner message="Please accept location request" />;
  }

  // React says we have to define render method!!
  // avoid doing anything besides returning JSX
  render() {
    return(
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }

  // this function will be called one time after render method
  // inside of here to set up or do some initial data loading or a wide variety of different
  // operations that we might want to do
  // good place to do data loading!
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message }),
    );
  }

  // it will be called automatically any time that our component updates it's self
  // good please to do more data loading when state/props change
  // componentDidUpdate() {
  //   console.log('my component was just updated - it rerendered!');
  // }

  // will unmount method is used anytime that we are about to remove a component from the screen
  // and we need to do some cleanup after it
  // good place to do cleanup (especially for non-react stuff)
  // componentWillUnmount(){

  // }

  component;
}

ReactDOM.render(<App />, document.querySelector('#root'));
