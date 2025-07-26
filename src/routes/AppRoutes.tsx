import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PokemonDetailPage from '../pages/PokemonDetailPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
