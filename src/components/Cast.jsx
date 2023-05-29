import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import defaultPhoto from "../servises/images/notFoundFoto.jpeg";

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
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTQ5OTU1ZmI1NTZhMDM0NWQzZmFkYmE4NGI5NjMzZiIsInN1YiI6IjY0NzQ4ODI3YmUyZDQ5MDBmOTk0ZGEzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RVHVZBrZirKyzuw79VrketFSS363cr6NcWVSHfdO7yQ',
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
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          {actor.profile_path ? (
            <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt="Actor Photo" width={'150px'} height={'200px'}/>
          ) : (
            <img src={defaultPhoto} alt="Default Actor Photo" width={'150px'} height={'200px'}/>
          )}
          <p>Name: {actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}



// import { useParams } from "react-router-dom"

// export default function Cast(){

//   const {movieId} = useParams();
//   return(
//     <ul>
//         <li><img src="" alt="ActorsPhoto" /></li>
//         <li><p>Name: {movieId} </p></li>
//         <li><p>Character:</p></li>
//     </ul>
//   )
// }
