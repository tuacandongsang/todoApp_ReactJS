import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from "./Cart.module.scss";
import { Paper, Rating, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { Button, Table } from 'react-bootstrap';
import { imguser } from 'img/SlideImages';


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
function createData(name, calories) {
    return { name, calories };
}
const rows = [
    createData('Địa Điểm', "cong vien cau giay"),
    createData('Thời gian', 'thang 7'),
    createData('Thông tin khác', '0911173008'),
];

function TabsEvaluate() {
    const [value, setValue] = React.useState(0);

    const [star, setstar] = React.useState(2);

    const [valueInput, setValueInput] = React.useState("");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleSend = () => { console.log('tuancandongsang')};

    return (
        <Box className={styles.box2} sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="Thông tin chi tiết" {...a11yProps(0)} className={styles.tab2} />
                    <Tab label="Đánh giá khóa học" {...a11yProps(1)} className={styles.tab2} />
                    <Tab label="Thông tin khác" {...a11yProps(2)} className={styles.tab2} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} className={styles.tabPanel2}>
                <TableContainer component={Paper} sx={{ width: "100%" }}>
                    <Table sx={{ width: "100%" }} aria-label="a dense table">
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </TabPanel>
            <TabPanel className={styles.tabPanel3} value={value} index={1}>
                <strong>NHẬP ĐÁNH GIÁ</strong>
                <div className={styles.Input}>
                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                    >
                        <Typography component="legend">Đánh giá khóa học</Typography>
                        <Rating
                            name="simple-controlled"
                            value={star}
                            onChange={(event, newValue) => {
                                setstar(newValue);
                            }}
                        />
                    </Box>
                    <div>
                        <img src={imguser} alt="" />
                        <input
                            placeholder="Nhập đánh giá"
                            value={valueInput}
                            onChange={(e) => setValueInput(e.target.value)}
                        />

                        <Button variant="contained" onClick={handleSend}>
                            GỬI
                        </Button>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                Chua lam thong tin khac
            </TabPanel>
        </Box>
    );
}
export default TabsEvaluate;