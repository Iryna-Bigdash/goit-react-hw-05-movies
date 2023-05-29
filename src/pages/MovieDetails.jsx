import { Suspense, useRef, useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
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
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTQ5OTU1ZmI1NTZhMDM0NWQzZmFkYmE4NGI5NjMzZiIsInN1YiI6IjY0NzQ4ODI3YmUyZDQ5MDBmOTk0ZGEzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RVHVZBrZirKyzuw79VrketFSS363cr6NcWVSHfdO7yQ',
          },
        };

        const response = await axios.get(url, options);
        console.log(response.data)
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
const votePercentage = voteAverage ? `${voteAverage * 10}%` : 'N/A';




  return (
    <div>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <div>
      <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt="Movie Poster" width={'300px'} height={'400px'} />

      <div>
      <h3>Title: {movieDetails.title} {movieId}</h3>
      <p>User Score: {votePercentage}</p>
      <p>Overview: {movieDetails.overview}</p>
      <p>Genres: { movieDetails.genres.map(genre => genre.name).join(', ')} </p>
      </div>
  
      </div>
      <p>Editional information</p>   
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading details</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
