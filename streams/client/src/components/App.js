import React from 'react';
import {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  Route,
  Link
} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';

// const PageOne = () => {
//   return (
//     <div>
//       PageOne
//       <Link to="/pagetwo"> navigate to page two</Link>
//     </div>
//   );
// };

// const PageTwo = () => {
//   return (
//     <div>
//       PageTwo
//       <Link to="/"> navigate to page one</Link>
//     </div>
//   );
// };

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          {/* <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" exact component={PageTwo} /> */}
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>

      {/* <HashRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" exact component={PageTwo} />
        </div>
      </HashRouter> */}

      {/* <MemoryRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" exact component={PageTwo} />
        </div>
      </MemoryRouter> */}
    </div>
  );
};

export default App;
