import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Layout from './Layout';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="get-movie-credits" element={<Cast />}/>
          <Route path="get-movie-reviews" element={<Reviews />}/>
        </Route>
      </Route>
    </Routes>
  );
};
