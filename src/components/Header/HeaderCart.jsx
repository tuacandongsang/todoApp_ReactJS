
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button, Menu, MenuItem } from '@mui/material';
import { Api_order } from 'axios/Axios';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { ThemeUseContext } from 'ThemeuseContext/useContext';
import styles from './header.module.scss'

function HeaderCart(props) {
    const { type, totalprice } = props
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const { numberCart, handleChangeNumberCart } = useContext(ThemeUseContext)

    let update = numberCart

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [order, setOrder] = useState([])

    useEffect(() => {
        Api_order
            .getAll()
            .then(res => setOrder(res.data))
    }, [update])

    const handleDelete = async (id) => {
        handleChangeNumberCart()
        await Api_order
            .delete(id)
        await Api_order
            .getAll()
            .then(res => setOrder(res.data))
    }
    
    return (
        <>
            <div className={styles.HeaderCart}>
                <div
                    onClick={handleClick}
                > Loai: {type}   <AddShoppingCartIcon /> Tong tien: {totalprice} </div>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    { order.length >=1 ?  order.map((orderItem) => (
                        <MenuItem key={orderItem.id}>
                            <div className={styles.container}>
                                <div className={styles.Img}>
                                    <img src={orderItem.url} />
                                </div>
                                <div className={styles.Name}>
                                    {orderItem.name} / X {orderItem.price}
                                </div>
                                <div className={styles.Number}>
                                    <div className={styles.num}>
                                        {orderItem.number}
                                    </div>
                                    <div className={styles.price}>
                                        {orderItem.number * orderItem.price}
                                    </div>
                                </div>
                                <div className={styles.edit}>
                                    <Button variant="contained" color="success" className={styles.button} >
                                        Sua
                                    </Button>
                                    <Button variant="outlined" color="error" className={styles.button}
                                        onClick={() => handleDelete(orderItem.id)}
                                    >
                                        Xoa
                                    </Button>
                                </div>
                            </div>
                        </MenuItem>

                    )) 
                    :
                    (<div> chua co san pham</div>)
                }
                </Menu>
            </div>
        </>
    );
}

export default HeaderCart;