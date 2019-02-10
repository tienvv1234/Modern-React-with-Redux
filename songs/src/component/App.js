// import the react and reactDOM libraries
import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetails';
// Create a react component
const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
