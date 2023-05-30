import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
          {
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTQ5OTU1ZmI1NTZhMDM0NWQzZmFkYmE4NGI5NjMzZiIsInN1YiI6IjY0NzQ4ODI3YmUyZDQ5MDBmOTk0ZGEzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RVHVZBrZirKyzuw79VrketFSS363cr6NcWVSHfdO7yQ',
            },
          }
        );
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
      <h5 className="mb-1 p-3 text-center fs-3 fw-bolder">Trending today</h5>
      <ul className="list-group w-100">
        {movies.map(movie => (
          <li key={movie.id} className="list-group-item list-group-item-action">
            <Link
              to={`/movies/${movie.id}`}
              className="list-group-item list-group-item-primary-500"
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
