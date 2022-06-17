
import Slideshow from "./Slideshow";
import styles from "./Cart.module.scss";
import {
    delivery6,
    delivery5,
    delivery4,
    delivery3,
    delivery2,
    delivery1,
} from "./imgCart/imageDelivery";
import {
    bank6,
    bank5,
    bank4,
    bank3,
    bank2,
    bank1,
} from "./imgCart/imageBank";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import TabsEvaluate from "./TabsEvaluate";


function Cart(props) {
    const { img, name, price } = props
    const [num, setNum] = useState(1);
    const handleApart = () => {
        setNum((prev) => {
            if (prev === 1) {
                return prev;
            }
            return prev - 1;
        });
    };

    const handleAdd = () => {
        setNum(num + 1);
    };

    return (
        <>
            <div className={styles.addcart}>
                <div style={{ display: "flex" }}>
                    <div>
                        <Slideshow img={img} />
                    </div>

                    <div className={styles.addcartContent}>
                        <div className={styles.addcartContentTitle}>
                            <Nav.Link className={styles.nav} as={Link} to="/home">
                                TRANG CHỦ
                            </Nav.Link>
                            <span>/</span>
                            <Nav.Link
                                className={styles.nav}
                            >
                                {name}
                            </Nav.Link>
                        </div>
                        <strong>{price}đ</strong>
                        <div className={styles.addcartContentPrice}>
                            <div>
                                {" "}
                                <p onClick={handleApart}>-</p> <p>{num}</p>{" "}
                                <p onClick={handleAdd}>+</p>
                            </div>
                            <button
                                className={styles.Button}
                            >
                                THÊM VÀO GIỎ
                            </button>
                        </div>
                        <div style={{ marginLeft: 17, display: "flex" }}>
                            <div className={styles.delivery}>
                                <span>Tính phí ship tự động</span>
                                <img alt="" src={delivery1} />
                                <img alt="" src={delivery2} />
                                <img alt="" src={delivery3} />
                                <img alt="" src={delivery4} />
                                <img alt="" src={delivery5} />
                                <img alt="" src={delivery6} />
                            </div>
                            <div className={styles.bank}>
                                <span>Thanh toán</span>
                                <img alt="" src={bank1} />
                                <img alt="" src={bank2} />
                                <img alt="" src={bank3} />
                                <img alt="" src={bank4} />
                                <img alt="" src={bank5} />
                                <img alt="" src={bank6} />
                            </div>
                        </div>
                        <p className={styles.p}>
                            "Hãy trở thành Affilicate của chúng tôi để tìm thêm thu nhập thụ
                            động, kiếm tiền online"
                        </p>
                        <Button
                            variant="contained"
                            color="error"
                            className={styles.Button}
                        >
                            Đăng ký Affilicate
                        </Button>
                    </div>
                </div>
                <TabsEvaluate />
            </div>
        </>
    )
}
export default Cart;
