import {lazy} from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const Home = lazy (() => import('./Home/Home'))
const Movies = lazy (() => import('./Movies/Movies'))
const MovieDetails = lazy (() => import('./MovieDetails/MovieDetails'))


const Reviews = lazy (() => import('./Reviews/Reviews'))
const Cast = lazy (() => import('./Cast/Cast'))


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="actors" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
}
