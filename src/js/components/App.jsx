import { Route, Routes } from 'react-router-dom';
import Media from 'react-media';
import Header from '../components/Header/Header.js'
import InfoMobile from 'pages/info_mobile/InfoMobile.js';
import Register from 'pages/register/Register.js';

export const App = () => {
  return (
    <div>
       <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
           {matches => (
      <>
      <Header/>
      <Routes>
      {matches.small && <Route path="/" element={<InfoMobile />} />}
      <Route path="/login" element={<p>Login</p>} />
      <Route path="/register" element={<Register/>} />
      {matches.medium && <Route path="/" element={<Register/>} />}
      </Routes>
      </>)}
      </Media>
    </div>
  );
};
