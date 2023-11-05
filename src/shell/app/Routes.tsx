import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from 'screens/landing';
const Routings = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={LandingPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routings;
