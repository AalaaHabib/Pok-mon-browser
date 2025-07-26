import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from '../components/Loader';

const HomePage = lazy(() => import('../features/home/HomePage'));
const PokemonDetailPage = lazy(() => import('../features/details/PokemonDetailPage'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
