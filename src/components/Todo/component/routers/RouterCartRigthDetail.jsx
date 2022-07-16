import { Api_stores } from "axios/Axios";
import Cart from "features/Todo/cart/Cart";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

function RouterCartRigthDetail() {

    const [api , setApi ] = useState([])

    useEffect(() =>{
        Api_stores
        .getAll()
        .then(res=> setApi(res.data))
    },[])

    return (  

        <Routes>
        {
            api.map((list, index) => (
                <Route key={index} path={list.url_cart} element={
                    <Cart
                       
                    />} />
            ))
        }
    </Routes>
    );
}

export default RouterCartRigthDetail;