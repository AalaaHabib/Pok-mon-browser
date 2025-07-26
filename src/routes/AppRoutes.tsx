import { Routes, Route } from 'react-router-dom';
import HomePage from '../features/home/HomePage';
import PokemonDetailPage from '../features/details/PokemonDetailPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
