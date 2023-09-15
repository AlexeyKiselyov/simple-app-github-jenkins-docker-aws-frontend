import axios from 'axios';

const { REACT_APP_API_URL } = process.env;
axios.defaults.baseURL = REACT_APP_API_URL;

export default function getUsers(
  pageNumber,
  setError,
  setIsLoading,
  setUsers,
  setTotalPages,
  filter,
) {
  const query = filter === null ? '' : `&isFollow=${filter}`;

  setError(false);
  setIsLoading(true);
  axios(`users?page=${pageNumber}&limit=${6}${query}`)
    .then(res => {
      const { users, totalPages } = res.data;
      setTotalPages(totalPages);
      setUsers(prev => {
        return [...prev, ...users];
      });
    })
    .catch(error => setError(error.message))
    .finally(() => {
      setIsLoading(false);
    });
}
