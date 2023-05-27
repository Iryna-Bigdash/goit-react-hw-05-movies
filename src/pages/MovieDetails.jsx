import { Link, Outlet, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const { movieId } = useParams();

  // state
  // ISLOADING
  // ERROR

  // useEffect(() => {
  //     //http if need
  // }, []);

  return (
    <div>
      <p>Go back</p>
      <h2>Деталі фільму: {movieId}</h2>
      <ul>
        <li>
          <Link to="get-movie-credits">Акторський склад</Link>
        </li>
        <li>
          <Link to="get-movie-reviews">Ревью</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
