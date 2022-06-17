import React from 'react';
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Carousel } from 'react-bootstrap';
import styles from './style.module.scss'


const slideImages = [
    {
        src: 'https://xuanthanhphat.vn/wp-content/uploads/2021/10/js2.png',
        caption: 'Javascript'
    },
    {
        src: 'https://xuanthanhphat.vn/wp-content/uploads/2021/10/react-native.png',
        caption: 'react-native'
    },
    {
        src: 'https://xuanthanhphat.vn/wp-content/uploads/2021/10/nodeJs.png',
        caption: 'nodeJs'
    },
];

function Slider(props) {


    return (
        <>
            <div className={styles.Slider}>
                <div className={styles.banner__tet}>
                    <Carousel className={styles.icon__carousel}>
                        {
                            slideImages.map((slideImage) => (
                                <Carousel.Item key={slideImage.caption} className={styles.slide}>
                                    <img className={styles.img__70}
                                        alt={slideImage.caption}
                                        src={slideImage.src}
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