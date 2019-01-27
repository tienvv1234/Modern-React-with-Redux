// import the react and reactDOM libraries
import React from 'react';
import SearchBar from './SearchBar';
// Create a react component

class App extends React.Component {
  // onSearchSubmit(term) {
  //   console.log(term);
  // }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
