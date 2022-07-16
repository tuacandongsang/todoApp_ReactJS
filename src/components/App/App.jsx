
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from 'components/Header';
import '../../styles/index.scss';
import RouterCart from 'components/Todo/component/routers/RouterCart';
import RouterTodoRight from 'components/Todo/component/routers/RouterTodoRight';
import Home from 'components/Home/Home';
import Employee from 'components/Employee/employee';
import Chamcong from 'components/Cham cong/chamcong';
import Nhansu from 'components/Cham cong/components/Nhansu';
import HanhChinh from 'components/Cham cong/components/HanhChinh';
import Footer from 'components/Footer/Footer';
import Introduce from 'components/Introduce/Introduce';


function AppComponent() {

    return (
        <>
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
        </>
    );
}

export default AppComponent;