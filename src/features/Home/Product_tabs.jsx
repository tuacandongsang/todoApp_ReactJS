import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './style.module.scss'


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const Product_tabs_lists_bassic = [
    {
        src: 'https://resources.stdio.vn/content/article/html-phan-2-cac-the-dinh-dang-van-ban/thumbnail-hd/blob-1598602859242@1280x720.jpg',
        name: 'Html',
        price: '150$',
        add: 'THEM VAO GIO HANG',
    },
    {
        src: ' https://mona.media/wp-content/uploads/2021/07/css.png',
        name: 'Css',
        price: '250$',
        add: 'THEM VAO GIO HANG',
    },
    {
        src: 'https://thienanblog.com/wp-content/uploads/2015/04/javascript_logo.png ',
        name: 'javascript',
        price: '350$',
        add: 'THEM VAO GIO HANG',
    },
    {
        src: 'https://codelearn.io/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg ',
        name: 'React-js',
        price: '450$',
        add: 'THEM VAO GIO HANG',
    },
]
const Product_tabs_lists_height = [
    {
        src: 'https://i0.wp.com/hocjavascript.net/wp-content/uploads/2021/08/Angular-la-gi-Uu-diem-va-nhuoc-diem-cua-Angular-1.jpg',
        name: 'Angular',
        price: '550$',
        add: 'THEM VAO GIO HANG',
    },
    {
        src: ' https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/640px-PHP-logo.svg.png',
        name: 'PHP',
        price: '650$',
        add: 'THEM VAO GIO HANG',
    },
    {
        src: 'https://viettuts.vn/images/java/java-la-gi.png',
        name: 'Java',
        price: '750$',
        add: 'THEM VAO GIO HANG',
    },
    {
        src: 'data:image/png;base64,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 ',
        name: 'NodeJs',
        price: '850$',
        add: 'THEM VAO GIO HANG',
    },
]
const Product_tabs_lists_pro = [
    {
        src: 'https://tuhoclaptrinh.edu.vn/upload/post/16/14/21/tim-hieu-ve-ngon-ngu-lap-trinh-c-20210301143428-245320.jpg',
        name: 'C++',
        price: '450$',
        add: 'THEM VAO GIO HANG',
    },
    {
        src: 'https://lh4.googleusercontent.com/cBOB-ZkfpUDi_QH9nSRUwxjUDP1rkUL3pOBGzUNsMFO7Wlzlb7GO6oGU9658Yxy71CiQQtVRrEkF0VgPX7q6OHoIz1rm2mJwdv6V2ogmGSkSBPNe8c69aSXid6vpKlaCETckxNJE',
        name: 'SEO',
        price: '1750$',
        add: 'THEM VAO GIO HANG',
    },
    {
        src: 'https://jobsgo.vn/blog/wp-content/uploads/2019/09/nghe-marketing-1.jpg',
        name: 'marketing',
        price: '2750$',
        add: 'THEM VAO GIO HANG',
    },
    {
        src: 'https://daihoconline.edu.vn/wp-content/uploads/2020/10/quan-tri-doanh-nghiep-hoc-nhung-gi-ra-truong-lam-nhung-viec-gi-1-2.jpg',
        name: 'Director',
        price: '3750$',
        add: 'THEM VAO GIO HANG',
    },
]

function Product_tabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className={styles.Product_tabs}>
                <Box sx={{ width: '100%' }}>
                    <div className={styles.Product_tabs_header}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Khoa hoc co ban" {...a11yProps(0)} />
                                <Tab label="Khoa hoc nang cao" {...a11yProps(1)} />
                                <Tab label="Khoa hoc pro..." {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                    </div>
                    <TabPanel value={value} index={0}>
                        <div aria-roledescription="slide" className={styles.Product_tabs_lists} >
                            {
                                Product_tabs_lists_bassic.map((Product) => (
                                    <div key={Product.name} className={styles.Product_tabs_item} >
                                        <img className={styles.Product_tabs_item_Img} src={Product.src} alt={Product.name} />
                                        <p>{Product.name}</p>
                                        <span>{Product.price}</span>
                                        <div>
                                            <button  type="button" className="btn btn-danger">
                                                {Product.add}
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div aria-roledescription="slide" className={styles.Product_tabs_lists} >
                            {
                                Product_tabs_lists_height.map((Product) => (
                                    <div key={Product.name} className={styles.Product_tabs_item} >
                                        <img className={styles.Product_tabs_item_Img} src={Product.src} alt={Product.name} />
                                        <p >{Product.name}</p>
                                        <span>{Product.price}</span>
                                        <div>
                                            <button type="button" className="btn btn-danger">
                                                 {Product.add}
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div aria-roledescription="slide" className={styles.Product_tabs_lists} >
                            {
                                Product_tabs_lists_pro.map((Product) => (
                                    <div key={Product.name} className={styles.Product_tabs_item} >
                                        <img className={styles.Product_tabs_item_Img} src={Product.src} alt={Product.name} />
                                        <p >{Product.name}</p>
                                        <span>{Product.price}</span>
                                        <div>
                                            <button type="button" className="btn btn-danger">
                                                 {Product.add}
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </TabPanel>
                </Box>
            </div>
        </>
    );
}
export default Product_tabs;
