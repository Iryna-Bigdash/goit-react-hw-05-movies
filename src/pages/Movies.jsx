import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const StyledLink = styled(NavLink)`
  color: black;

  &:hover {
    background-color: #edf4fe;
  }
`;

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
      const options = {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTQ5OTU1ZmI1NTZhMDM0NWQzZmFkYmE4NGI5NjMzZiIsInN1YiI6IjY0NzQ4ODI3YmUyZDQ5MDBmOTk0ZGEzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RVHVZBrZirKyzuw79VrketFSS363cr6NcWVSHfdO7yQ',
        },
      };

      try {
        const response = await axios.get(url, options);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (isFormSubmitted) {
      fetchData();
      setIsFormSubmitted(false);
    }
  }, [isFormSubmitted, query]);

  const updateQueryString = e => {
    e.preventDefault();
    const queryValue = e.target.value;

    queryValue === ''
      ? setSearchParams({})
      : setSearchParams({ query: queryValue });
  };

  const onSubmitForm = e => {
    e.preventDefault();
    setIsFormSubmitted(true);
  };

  return (
    <>
      <h2 className="mb-1 p-3 fs-3 fw-bolder">What do you like to watch?</h2>
      <form className="row g-3 p-3" onSubmit={onSubmitForm}>
        <div className="col-auto">
          <input
            type="text"
            value={query}
            onChange={updateQueryString}
            className="form-control"
            placeholder="Movie title input here..."
            aria-label="Movie title input example"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Search
          </button>
        </div>
      </form>
      {movies.length > 0 && (
        <ul className="list-group">
          <div className="w-100">
            {movies.map(movie => (
              <li key={movie.id} className="list-group-item">
                <StyledLink to={`${movie.id}`} state={{ from: location }} className="list-group-item">
                  {movie.title}
                </StyledLink>
              </li>
            ))}
          </div>
        </ul>
      )}
    </>
  );
}
