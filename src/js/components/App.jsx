import Header from '../components/Header/Header.js'
import InfoMobile from 'pages/info_mobile/InfoMobile.js';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<InfoMobile />} />
      <Route path="/login" element={<p>Login</p>} />
      <Route path="/register" element={<p>Register</p>} />
      </Routes>
    </div>
  );
};
