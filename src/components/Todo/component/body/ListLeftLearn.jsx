import { Nav } from 'react-bootstrap';
import styles from '../../Todo.module.scss'
import { arrImageLayout } from 'img/SlideImages';
import { imageNewPost } from 'img/SlideImages';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Api_stores } from "axios/Axios";
import { useParams } from 'react-router-dom';


function ListLeftLearn(props) {

    const [api, setApi] = useState([])

    const param = useParams()

    useEffect(() => {
        Api_stores
            .getAll()
            .then(res =>
                setApi(res.data)
            )
    }, [arrImageLayout])

    const handleIdIndex = (idIndex) => {
        console.log(idIndex);
    }


    return (
        <>
            <div className={styles.accessoryLeft}>
                <span>SẢN PHẨM</span> <span>/</span> <span>{param.url}</span>
                <div className={styles.accessoryLeftList}>
                    {api.map((imgApi, index) => (
                        <Nav.Link
                            key={index}
                            as={Link}
                            to={imgApi.url_cart}
                            className={styles.accessoryLeftListItem}
                            onClick={() => handleIdIndex(imgApi.id)}
                        >
                            <img
                                style={{
                                    height: '50px',
                                    width: '50px',
                                }}
                                src={imgApi.url_todos_img_left}
                            />
                            <div className=''>
                                <p>{imgApi.name}</p>
                                <span>{imgApi.price}</span>
                            </div>
                        </Nav.Link>
                    ))}
                </div>
                <h6>BÀI VIẾT MỚI NHẤT</h6>
                <div className={styles.accessoryLeftList2}>
                    {imageNewPost.map((el, index) => (
                        <Nav.Link
                            as={Link}
                            to={el.src}
                            key={index}
                            className={styles.newpostListContent}
                        >
                            <img src={el.img1} alt="" />
                            <p>{el.title}</p>
                        </Nav.Link>
                    ))}
                </div>
            </div>
        </>
    )
}
export default ListLeftLearn;
