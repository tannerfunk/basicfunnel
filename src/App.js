import './input.css';
import WelcomePage from './components/WelcomePage';
import SignUpPage from './components/SignUpPage';
import ThankYouPage from './components/ThankYouPage';
import Retreat from './components/Retreat';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path ="/" element={<WelcomePage />} />
      <Route path ="/signup" element={<SignUpPage />} />
      <Route path ="/thankyou" element={<ThankYouPage />} />
      <Route path ="/retreat-special" element={<Retreat />} />
    </Routes>
  );
}

export default App;
