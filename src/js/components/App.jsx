// додати до реєстрації
// import Media from 'react-media';
// import InfoMobile from 'js/pages/InfoMobile/InfoMobile';
import { ToastContainer } from 'react-toastify';
import Container from 'js/utils/Container/Container';
import AppBar from './AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
// import ModalLibrary from './ModalLibrary/Modal-library';
import LibraryForm from './LibraryForm/LibraryForm';
// import ModalYouAreCool from './ModalYouAreCool/ModalYouAreCool';
// import MyTrainingPlaying from './MyTrainingPlaying/MyTrainigPlaying';
// import ModalResume from './ReitingModal/ReitingModal';
// import ModalCongrats from './ModalCongrats/ModalCongrats';
import ModalLibrary from './ModalLibrary/Modal-library';
import { useState } from 'react';
import Timer from './Timer/Timer';

export const App = () => {
  const [showModal, setShowModal] = useState(true);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <Container>
      <AppBar />
      {/* <ModalCongrats/> */}
      <Timer/>
      {showModal && (<ModalLibrary onClose={toggleModal}/>)}
      {/* <ModalYouAreCool/> */}
      {/* <ModalResume /> */}
{/* <MyTrainingPlaying/> */}
      <Routes>
        {/* <Route path="/" element={<InfoMobile />}/> */}
        
          <Route path="/login" element={<p>Login</p>} />
          <Route path="/register" element={<p>Register</p>} />
          <Route path="/library" element={<LibraryForm />} />
        
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Container>
  );
};
