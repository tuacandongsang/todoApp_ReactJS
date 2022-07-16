// import { IoSearchSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import styles from "./header.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function CartHeader() {
    return (
        <>
            <div className={styles.cart}>
                <div className={styles.Search}>
                    <SearchIcon className={styles.cartSearch} />
                    <div className={styles.hoverSearch}>
                        <input placeholder="Tìm kiếm" />
                        <button>
                            <SearchIcon />
                        </button>
                    </div>
                </div>
                <div className={styles.cartPrice}>
                    <span className={styles.icon}>GIỎ HÀNG</span> 
                    <span className={styles.line}>/</span> 
                    <span >
                        {/* {total} */}
                        đ  </span>
                        <AddShoppingCartIcon />
                    {/* <BsCartPlus className={styles.bsCartPlus} /> */}
                    <div className={styles.hoverCart}> alo alo
                        {/* {cart.length === 0 && <p>Chưa có sản phẩm trong giỏ hàng</p>}
                        {cart.length > 0 && (
                            <div>
                                <div className={styles.Scroll}>
                                    {cart.map((el, index) => {
                                        return (
                                            <NavLink
                                                key={index}
                                                className={styles.hoverCartProduct}
                                                as={Link}
                                                to={`/Cart/${el.url}`}
                                            >
                                                <img src={el.img} alt="" />
                                                <div className={styles.hoverCartProductDiv}>
                                                    <p>{el.namePrd}</p>
                                                    <span>
                                                        {el.quantity} x {el.price}đ
                                                    </span>
                                                </div>
                                                <div
                                                    className={styles.hoverCartProductDiv2}
                                                    onClick={() => onDelete(index)}
                                                >
                                                    x
                                                </div>
                                            </NavLink>
                                        );
                                    })}
                                </div>
                                <NavLink
                                    className={styles.hoverCartButton}
                                    as={Link}
                                    to="/viewcart"
                                >
                                    XEM GIỎ HÀNG
                                </NavLink>
                                <NavLink className={styles.hoverCartButton} as={Link} to='/payment'>
                                    THANH TOÁN TIỀN
                                </NavLink>
                            </div>
                        )} */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartHeader;