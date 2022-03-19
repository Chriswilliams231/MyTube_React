import axios from 'axios'

const KEY = 'AIzaSyCbLTR7NN6yYbMtqAO83_sbVrcT8DDBQi0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: KEY
    }
});