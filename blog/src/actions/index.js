import jsonPlaceholder from '../apis/jsonPlaceholder';

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
//     console.log('dispatch', dispatch);
//     console.log('getState', getState);
//     const response = await jsonPlaceholder.get('/posts');
//     console.log('response', response);
//     dispatch({ type: 'FETCH_POSTS', payload: response });
//   };
// };

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response });
};
