import { Suspense, useRef, useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  console.log(location);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}`;
        const options = {
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTQ5OTU1ZmI1NTZhMDM0NWQzZmFkYmE4NGI5NjMzZiIsInN1YiI6IjY0NzQ4ODI3YmUyZDQ5MDBmOTk0ZGEzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RVHVZBrZirKyzuw79VrketFSS363cr6NcWVSHfdO7yQ',
          },
        };

        const response = await axios.get(url, options);
        console.log(response.data);
        setMovieDetails(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return <div>Loading details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const voteAverage = movieDetails?.vote_average;
  const votePercentage = voteAverage
    ? `${(voteAverage * 10).toFixed(2)}%`
    : 'N/A';

  return (
    <>
      <Link
        to={backLinkLocationRef.current}
        className="p-2 m-2 w-25 fs-5 fw-semibold"
      >
        Go back
      </Link>

      <div className="mt-3 p-3 bg-light d-flex gap-3">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt="Movie Poster"
          width={'300px'}
          height={'400px'}
        />

        <div>
          <h3>
            Title: {movieDetails.title} {movieId}
          </h3>
          <p>User Score: {votePercentage}</p>
          <p>Overview: {movieDetails.overview}</p>
          <p>
            Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}{' '}
          </p>
        </div>
      </div>
      <h5 className="fs-5 fw-semibold mt-3">Editional information</h5>
      <ul className="list-group p-3">
        <li className="list-inline-item">
          <Link to="cast">Cast</Link>
        </li>
        <li className="list-inline-item">
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading details</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
