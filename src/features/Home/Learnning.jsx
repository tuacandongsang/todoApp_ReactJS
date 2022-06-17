

import { Slide } from "react-slideshow-image";
import { SlideImagesHoaXoan } from "img/SlideImages";
import styles from "./style.module.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Learnning() {
  return (
    <div className={styles.LearnningHoaXoan}>
      <h1>Danh sach Hoa</h1>
      <Slide easing="ease">
        {SlideImagesHoaXoan.map((slide, index) => {
          return (
            <div className={styles.slide} key={index}>
              <div>
                <img 
                className={styles.slideImg} 
                src={slide.src1} 
                />
                <p>{slide.name1}</p>
                <span>{slide.price1}</span>
                <Button
                  // as={Link}
                  // to={`/Cart/${slide.name1.split(" ").join("-")}-${
                  //   slide.price1
                  // }`}
                  className={styles.slideimageHover}
                >
                  THÊM VÀO GIỎ
                </Button>
              </div>
              <div>
                <img 
                className={styles.slideImg} 
                src={slide.src2} 
                />
                 <p>{slide.name2}</p>
                <span>{slide.price2}</span>
                <Button
                  // as={Link}
                  // to={`/Cart/${slideImage.title1.split(" ").join("-")}-${
                  //   slideImage.id1
                  // }`}
                  className={styles.slideimageHover}
                >
                  THÊM VÀO GIỎ
                </Button>
              </div>
              <div>
                <img 
                className={styles.slideImg} 
                src={slide.src3} 
                />
                 <p>{slide.name3}</p>
                <span>{slide.price3}</span>
                <Button
                  // as={Link}
                  // to={`/Cart/${slideImage.title1.split(" ").join("-")}-${
                  //   slideImage.id1
                  // }`}
                  className={styles.slideimageHover}
                >
                  THÊM VÀO GIỎ
                </Button>
              </div>
              <div>
                <img 
                className={styles.slideImg} 
                src={slide.src4} 
                />
                 <p>{slide.name4}</p>
                <span>{slide.price4}</span>
                <Button
                  // as={Link}
                  // to={`/Cart/${slideImage.title1.split(" ").join("-")}-${
                  //   slideImage.id1
                  // }`}
                  className={styles.slideimageHover}
                >
                  THÊM VÀO GIỎ
                </Button>
              </div>
              <div>
                <img 
                className={styles.slideImg} 
                src={slide.src5} 
                />
                 <p>{slide.name5}</p>
                <span>{slide.price5}</span>
                <Button
                  // as={Link}
                  // to={`/Cart/${slideImage.title1.split(" ").join("-")}-${
                  //   slideImage.id1
                  // }`}
                  className={styles.slideimageHover}
                >
                  THÊM VÀO GIỎ
                </Button>
              </div>
              {/* <div style={{ backgroundImage: `url(${slideImages[index]})` }}>
                <span>Slide {index + 1}</span>
              </div> */}
            </div>
          );
        })}
      </Slide>
    </div>
  );
}


export default Learnning;