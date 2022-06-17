import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.module.scss'
import styles from './style.module.scss'

const products = [
    {
        productImg: 'https://vietnix.vn/wp-content/uploads/2021/07/python-la-gi.webp',
        // infor: 'python'
    },
    {
        productImg: 'https://i0.wp.com/hocjavascript.net/wp-content/uploads/2021/08/Angular-la-gi-Uu-diem-va-nhuoc-diem-cua-Angular-1.jpg',
        // infor: 'Angular'
    },
    {
        productImg: 'https://mona.media/wp-content/uploads/2021/07/css.png',
        // infor: 'css'
    }
]

function Product() {

    return (
        <>
            <div className={styles.product__container}>
                {
                    products.map((product, index) => (
                        <div className={styles.product__item} key={index}>
                            <img className={styles.product__item__img} src={product.productImg} />

                            <div className={styles.product__item__button}>
                                <Button as={Link} to="/employee" type="button " className="btn btn-success ">Xem khoa hoc</Button>
                            </div>
                            {/* <p className="product__item__p">{product.infor}</p> */}
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Product;