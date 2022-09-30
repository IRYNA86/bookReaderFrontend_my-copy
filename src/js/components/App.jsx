// додати до реєстрації
// import Media from 'react-media';
import InfoMobile from 'js/pages/InfoMobile/InfoMobile';
import { ToastContainer } from 'react-toastify';
import Container from 'js/utils/Container/Container';
import AppBar from './AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
// import ModalLibrary from './ModalLibrary/Modal-library';
import LibraryForm from './LibraryForm/LibraryForm';
// import MyTrainingPlaying from './MyTrainingPlaying/MyTrainigPlaying';
import ModalResume from './ReitingModal/ReitingModal';
export const App = () => {
  return (
    <Container>
      <AppBar />
      <ModalResume />
{/* <MyTrainingPlaying/> */}
      <Routes>
        <Route path="/" element={<InfoMobile />}/>
        
          <Route path="/login" element={<p>Login</p>} />
          <Route path="/register" element={<p>Register</p>} />
          <Route path="/library" element={<LibraryForm />} />
        
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Container>
  );
};
