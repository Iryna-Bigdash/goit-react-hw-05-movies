import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const StyledLink = styled(NavLink)`
  color: black;

  &:hover {
    color: yellowgreen;
  }
`;

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?query=${movieId}&include_adult=false&language=en-US&page=1`;
      const options = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTQ5OTU1ZmI1NTZhMDM0NWQzZmFkYmE4NGI5NjMzZiIsInN1YiI6IjY0NzQ4ODI3YmUyZDQ5MDBmOTk0ZGEzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RVHVZBrZirKyzuw79VrketFSS363cr6NcWVSHfdO7yQ'
        }
      };

      try {
        const response = await axios.get(url, options);
        setMovies(response.data.results);

      } catch (error) {
        console.error('Error:', error);
      }
    };


    fetchData();
  }, [movieId]);

  const updateQueryString = e => {
    e.preventDefault()
    const movieIdValue = e.target.value;

    movieIdValue === ''
      ? setSearchParams({})
      : setSearchParams({ movieId: movieIdValue });
  };
  const onSubmitForm = e => {
    e.preventDefault()
  }

  return (
    <>
      <form action="" onSubmit={onSubmitForm}>
        <input type="text" value={movieId} onChange={updateQueryString} />
        <button onClick={() => setSearchParams({query: 'a' })}>
          Change SP
        </button>
      </form>
  
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <StyledLink
              to={`${movie.id}`}
              state={{ from: location }}
            >
              {movie.title}
            </StyledLink>
          </li>
        ))}
      </ul>
    </>
  );
}
