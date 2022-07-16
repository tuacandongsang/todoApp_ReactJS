import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import Product from './Product';
import Product_tabs from './Product_tabs';
import Learnning from './Learnning';
import styles from './style.module.scss'
import { BsChevronUp } from "react-icons/bs";



function Home() {
    const [top, setTop] = useState(false);
    const handleClickTop = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        const handleScroll = () => {
            setTop(window.scrollY >= 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className={styles.home}>
                {top && (
                    <div className={styles.Fixed} onClick={handleClickTop}>
                        <BsChevronUp />
                    </div>
                )}{" "}
                <Slider />
                <Product />
                <Product_tabs />
                <Learnning />
            </div>
        </>

    );
}

export default Home;