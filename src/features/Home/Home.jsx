import React, { useEffect } from 'react';
import Slider from './Slider';
import Product from './Product';
import Product_tabs from './Product_tabs';
import Learnning from './Learnning';
import styles from './style.module.scss'


function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className={styles.home}>
                <Slider />
                <Product />
                <Product_tabs />
                <Learnning />
            </div>
        </>

    );
}

export default Home;