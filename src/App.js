import React, { useEffect } from 'react';
import Todo from 'features/Todo';
import { Route, Routes } from 'react-router-dom';
import Home from './features/Home/Home';
import Header from 'components/Header';
import Employee from 'features/Employee/employee';
import Chamcong from 'features/Cham cong/chamcong';
import './styles/index.scss';
import HanhChinh from 'features/Cham cong/components/HanhChinh';
import Nhansu from 'features/Cham cong/components/Nhansu';
import Footer from 'features/Footer/Footer';
import Introduce from 'features/Introduce/Introduce';
import { cssImg, htmlImg, javascriptImg, phpImg, reactImg } from 'img/SlideImages';
import Bodytodos from 'features/Todo/Bodytodos';
import RouterCart from 'routers/RouterCart';
import RouterTodoRight from 'routers/RouterTodoRight';
import RouterCartRigthDetail from 'routers/RouterCartRigthDetail';
// import RouterTodoRight from 'routers/RouterTodoRight';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="" element={<Home />} />

        <Route path="/home" element={<Home />} />

        <Route path="/introduce" element={<Introduce />} />

        <Route path="/employee" element={<Employee />} />

        <Route path="/Chamcong" element={<Chamcong />}>
          <Route index path="nhansu" element={<Nhansu />} />
          <Route path="hanhchinh" element={<HanhChinh />} />
        </Route>
      </Routes>

      <RouterTodoRight />

      <RouterCart />

      {/* <RouterCartRigthDetail /> */}

      <Footer />
    </div>
  );
}

export default App;
