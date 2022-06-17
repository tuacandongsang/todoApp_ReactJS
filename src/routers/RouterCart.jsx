import { Api_stores } from "axios/Axios";
import { arrImageLayout } from "img/SlideImages";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../features/Todo/cart/Cart";


function RouterCart(props) {

    const [api, setApi] = useState([arrImageLayout])

    useEffect(() => {
        Api_stores
            .getAll()
            .then(res =>
                // console.log(res.data[0].url_todos_img_left_cart)
                 setApi(res.data)
                 )
    }, [arrImageLayout])

    const handleIdIndex = () => {

    }

    return (
        <Routes>
            {
                api.map((list, index) => (
                    <Route key={index} path={list.url_cart} element={
                        <Cart
                            img={list.url_todos_img_left_cart}
                            name={list.name}
                            price={list.price}
                            handleIdIndex={handleIdIndex}
                        />} />
                ))
            }
        </Routes>
    )
}
export default RouterCart;

