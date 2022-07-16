
import './chamcong.css'
import { Link, Outlet } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useState } from 'react';


function Chamcong() {

    const list__chamcong = [
        {
            name: "Phong hanh chinh",
            path: 'hanhchinh',
            id: 0,
        },
        {
            name: "Phong nhan su",
            path: 'nhansu',
            id: 1,
        },
        {
            name: "Phong san xuat",
            path: '',
            id: 2,
        },
    ]
    const [name, setname] = useState('')

    const handleList = (id) => {
        const list = JSON.parse(JSON.stringify(list__chamcong))
        const index = list.findIndex(list => list.id === id)
        setname(list[index].name)

    }

    return (
        <>
            <h2 className="header border header_task ">Danh sach : {name}</h2>
            <div className="button_task whiteColor">

                {list__chamcong.map((list) =>
                    <Button
                        color="primary"
                        outline
                        className='button_list'
                        key={list.id}
                        onClick={() => handleList(list.id)}
                    >
                        <Link to={list.path} className='whiteColor' >{list.name}</Link>
                    </Button>
                )}


            </div>
            <Outlet />
        </>
    )
}
export default Chamcong;