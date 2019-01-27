import axios from 'axios';

const KEY = 'AIzaSyCELswWh4Ys1Kikzge1LE-KgBiZolEvjds';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
