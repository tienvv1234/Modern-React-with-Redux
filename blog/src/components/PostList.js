import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
class PostList extends React.Component {
  componentDidMount() {
    //when this function call, the connect function will make this function
    // go into store.dispatch() probably happening in react-redux
    this.props.fetchPosts();
  }

  render() {
    return <div>PostList</div>;
  }
}

export default connect(
  null,
  { fetchPosts }
)(PostList);
