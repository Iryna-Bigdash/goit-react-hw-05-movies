import styled from "@emotion/styled";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
    color: black;

    &:hover{
        color: rgb(217, 85, 217);
    }
`

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', {
          headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTQ5OTU1ZmI1NTZhMDM0NWQzZmFkYmE4NGI5NjMzZiIsInN1YiI6IjY0NzQ4ODI3YmUyZDQ5MDBmOTk0ZGEzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RVHVZBrZirKyzuw79VrketFSS363cr6NcWVSHfdO7yQ'
          }
        });
        setMovies(response.data.results);
        // console.log(movies)
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <StyledLink to={`${movie}`}>
              {movie.title}
            </StyledLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
