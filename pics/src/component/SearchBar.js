// import the react and reactDOM libraries
import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  // constructor(){
  // super()
  // solution 1
  // create constructor and assign bind funtion with this
  // this.onFormSubmit = this.onFormSubmit.bind(this);
  // }

  // onFormSubmit(event) {
  //   event.preventDefault();
  //   // here will throw error state undefined
  //   // because the form call this funtion not SearchBar so keyword this here is not instance of SearchBar
  //   // to fix this issue
  //   console.log(this.state.term);
  // }

  onFormSubmit = event => {
    event.preventDefault();
    // here will throw error state undefined
    // because the form call this funtion not SearchBar so keyword this here is not instance of SearchBar
    // to fix this issue change the function onFormSubmit to arrow function
    // here is solution 2
    // console.log(this.state.term);

    // in class component need this keyword for get props
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          {/*here is solution 3 <form className="ui form" onSubmit={(event) => this.onFormSubmit(event)}> */}
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
