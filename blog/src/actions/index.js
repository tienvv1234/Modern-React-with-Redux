import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';
// export const fetchPosts = () => {
//   //this is bad, and will raise a error
//   //what's wrong with 'fetchPosts'?
//   //Action creators must return plain JS objects with a type property
//   //-but in here we are not
//   // by the time our action gets to a reducer, we won't have fetched our data
//   // const response = await jsonPlaceholder.get('/posts');

//   // this will not return plain object when we transfer to es05
//   // this isn't return plain object because async await syntax
//   //
//   // return {
//   //   type: 'FETCH_POSTS',
//   //   payload: response
//   // };
//   return async (dispatch, getState) => {
//     const response = await jsonPlaceholder.get('/posts');
//     dispatch({ type: 'FETCH_POSTS', payload: response });
//   };
// };

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  console.log('response', response);
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// export const fetchUser = id => dispatch => {
//   // const response = await jsonPlaceholder.get(`/users/${id}`);
//   // dispatch({ type: 'FETCH_USER', payload: response.data });

//   _fetchUser(id, dispatch);
// };

// 2 issues about memoize here we need to care
// 1 this case the fetchUser action still send many time with duplicate arguments
// because of the key word return, the function memoize still need to return
// when we call it secondtime so in here in will return the function and redux thunk
// still run it like normal.
// export const fetchUser = _.memoize(function(id) {
//   return async function(dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data });
//   };
// });

// 2 this case the fetchUser action still send many time with duplicate arguments
// because in here we always recreate the function so whenever the action
// fetchUser is called this will recreate a new memoize function, so in other
// word this will call only firstTime of memoize
// every time we call fetch user we are going to create a new version of the interior
// function and memorize it every single time
// export const fetchUser = function(id) {
//   return _.memoize(async function(dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data });
//   });
// };

// *** HERE IS SOLUTION 1***
// we need to define a function outside of our action creator

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });

// *** here is SOlUTION 2 ***
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  // in here fetchPosts will return function async and we will dispatch
  // manually that function. Remember whenever we dispatch a function redux
  // thunk is going t opick it up and automatically invoke
  // so again whenever we call an action creator from inside of ana action creator
  // we need to make sure that we dispatch the result of calling the action creator
  console.log('getState()', getState());
  await dispatch(fetchPosts());
  console.log('getState()', getState());
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => {
    dispatch(fetchUser(id));
  });

  //this example for synchonous array
  //await Promise.all(userIds.map(id => dispatch(fetchUser(id))));

  // refactor
  // _.chain(getState().posts)
  //   .map('userId')
  //   .uniq()
  //   .forEach(id => dispatch(fetchUser(id)))
  //   .value();
};
