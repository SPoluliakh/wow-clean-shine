import { Route, Routes } from 'react-router';
import DevelopmentPage from '../../pages/DevelopmentPage/DevelopmentPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DevelopmentPage />} />
    </Routes>
  );
};
