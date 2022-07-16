import React, { useEffect, useState } from 'react';
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Carousel } from 'react-bootstrap';
import styles from './style.module.scss'
import { Api_urlImg_home_Slider } from 'axios/Axios';


const slideImages = [
    'https://xuanthanhphat.vn/wp-content/uploads/2021/10/js2.png',
    'https://xuanthanhphat.vn/wp-content/uploads/2021/10/react-native.png',
    'https://xuanthanhphat.vn/wp-content/uploads/2021/10/nodeJs.png',
];

function Slider(props) {

    const [api, setapi] = useState([slideImages])

    useEffect(() => {
        Api_urlImg_home_Slider
            .getAll()
            .then(res => setapi(res.data))
    }, [slideImages])


    return (
        <>
            <div className={styles.Slider}>
                <div className={styles.banner}>
                    <Carousel>
                        {
                            api.map((slideImage, index) => (
                                <Carousel.Item key={index} >
                                    <img className={styles.img}
                                        src={slideImage}
                                    />
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </>

    );
}

export default Slider;