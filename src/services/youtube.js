import axios from 'axios';

const API_KEY = import.meta.env.VITE_YT_API_KEY;

export const searchYouTube = async (query) => {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      q: query,
      type: 'video',
      key: API_KEY,
      maxResults: 20
    }
  });
  return response.data.items.map(item => ({
    id: item.id.videoId,
    title: item.snippet.title,
    artist: item.snippet.channelTitle,
    thumbnail: item.snippet.thumbnails.default.url,
    duration: '0:00'
  }));
};

export const getVideoDetails = async (id) => {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
    params: {
      part: 'contentDetails,snippet',
      id,
      key: API_KEY
    }
  });
  const item = response.data.items[0];
  return {
    id,
    title: item.snippet.title,
    artist: item.snippet.channelTitle,
    thumbnail: item.snippet.thumbnails.default.url,
    duration: parseDuration(item.contentDetails.duration)
  };
};

const parseDuration = (duration) => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  const hours = (parseInt(match[1]) || 0);
  const minutes = (parseInt(match[2]) || 0);
  const seconds = (parseInt(match[3]) || 0);
  return `${hours ? hours + ':' : ''}${minutes}:${seconds.toString().padStart(2, '0')}`;
};