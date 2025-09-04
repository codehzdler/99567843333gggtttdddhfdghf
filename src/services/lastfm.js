import axios from 'axios';

const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;

export const getTrackInfo = async (artist, track) => {
  const response = await axios.get('http://ws.audioscrobbler.com/2.0/', {
    params: {
      method: 'track.getInfo',
      artist,
      track,
      api_key: API_KEY,
      format: 'json'
    }
  });
  return response.data.track;
};