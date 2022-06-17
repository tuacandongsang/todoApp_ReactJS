import { Button, Form } from 'react-bootstrap';
import styles from './Todo.module.scss'
import { Link, useParams } from 'react-router-dom';


function ListRightLearn(props) {
    const { Img } = props;
    return (
        <>
            <div className={styles.accessoryRight}>
                <div className={styles.accessoryRightSelect}>
                    <Form.Select
                        className={styles.accessoryRightSelectButton}
                        aria-label="Default select example"
                    >
                        <option>Thứ tự mặc định</option>
                        <option value="1">Mới nhất</option>
                        <option value="2">Thứ tự theo giá:thấp đến cao</option>
                        <option value="3">Thứ tự theo giá:cao xuống thấp</option>
                    </Form.Select>
                </div>
                <div className={styles.accessoryRightLayout}>
                    {Img?.map((el, index) => (
                        <div key={index}>
                            <img
                                style={{
                                    height: '126px',
                                    width: '180px'
                                }}
                                src={el.url_img_right}
                            />
                            <p>{el.name}</p>
                            <strong>{el.price}</strong>
                            <Button
                                className={styles.Button}
                                as={Link}
                                to={el.url_cart}
                            >
                                Xem Khoa Hoc
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default ListRightLearn;
