import { Api_stores } from "axios/Axios";
import Cart from "components/Todo/component/cart/Cart";
import { arrImageLayout } from "img/SlideImages";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";


function RouterCart(props) {

    const [api, setApi] = useState([arrImageLayout])

    useEffect(() => {
        Api_stores
            .getAll()
            .then(res =>
                setApi(res.data)
            )
    }, [arrImageLayout])

    return (
        <Routes>
            {
                api.map((list, index) => (
                    <Route key={index} path={list.url_cart} element={
                        <Cart
                            img={list.url_todos_img_left_cart}
                            name={list.name}
                            price={list.price}
                            id={list.id}
                            url={list.url_todos_img_left}
                        />} />
                ))
            }
        </Routes>
    )
}
export default RouterCart;

