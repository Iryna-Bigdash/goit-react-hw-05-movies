import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import defaultPhoto from '../servises/images/notFoundFoto.jpeg';

const CastIMG = styled('img')`
  object-fit: cover;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }
`;

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
        const options = {
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTQ5OTU1ZmI1NTZhMDM0NWQzZmFkYmE4NGI5NjMzZiIsInN1YiI6IjY0NzQ4ODI3YmUyZDQ5MDBmOTk0ZGEzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RVHVZBrZirKyzuw79VrketFSS363cr6NcWVSHfdO7yQ',
          },
        };

        const response = await axios.get(url, options);
        setCast(response.data.cast);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  if (loading) {
    return <div>Loading cast...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {cast.length > 0 ? (
        <ul className="row row-cols-7 bg-light">
          {cast.map(actor => (
            <li key={actor.id} className="col list-inline-item">
              {actor.profile_path ? (
                <CastIMG
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt="Actor Photo"
                  width={'150px'}
                  height={'200px'}
                />
              ) : (
                <CastIMG
                  src={defaultPhoto}
                  alt="Default Actor Photo"
                  width={'150px'}
                  height={'200px'}
                />
              )}
              <p>Name: {actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
}
