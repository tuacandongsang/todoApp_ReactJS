import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from "./Cart.module.scss";



const Slideshow = (props) => {
  const { img } = props
  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
    indicators: (i) => (
      <div className={styles.indicator} >
        <img src={img[i]} alt="" />
      </div>
    ),
    transitionDuration: 1000,
  };
  return (
    <>
      <div>
        {img.length > 1 && (
          <div>
            <Zoom {...zoomOutProperties} className={styles.slideshow}>
              {img.map((each, index) => (
                <img
                  key={index}
                  className={styles.slideshowImage}
                  alt=""
                  src={each}
                />
              ))}
            </Zoom>
          </div>
        )}
        {img.length === 1 && (
          <div>
            <img
              className={styles.slideshowImage}
              style={{ marginTop: 50 }}
              alt=""
              src={img[0]}
            />
          </div>
        )}
      </div>
    </>
  )
}
export default Slideshow;