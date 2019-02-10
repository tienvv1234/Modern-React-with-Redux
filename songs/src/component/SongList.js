import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  // this is saying that we're going to take our state object
  // essentially all of the data that's inside of our redux store
  // and we are going to run some calculation on it or some
  // computation that's going to cause that data to eventually show
  // up as props inside of our component.

  return { songs: state.songs };
};

// connection function is going to be used not only to get data out of our store
// but the connect function can also be used to kind of get action creators correctly
// into our song list, for example here is { selectSong }
// this will call action creators
export default connect(
  mapStateToProps,
  { selectSong }
  //the connect function is going to take that select song action
  //creator and pass it into our component as a prop to
)(SongList);
