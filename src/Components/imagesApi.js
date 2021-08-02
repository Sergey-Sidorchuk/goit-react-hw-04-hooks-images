import axios from 'axios';
const KEY = '21876236-bdbf7791a65fc64e58b34d487';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const fetchImages = async ({ searchQuery = '', currentPage = 1 }) => {
  return axios
    .get(
      `?q=${searchQuery}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};
const exportObject = { fetchImages };

export default exportObject;