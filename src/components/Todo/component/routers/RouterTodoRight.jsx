import { Api_stores } from "axios/Axios";
import Todo from "components/Todo/component/header/Update_create";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Bodytodos from "../body/Bodytodos";

function RouterTodoRight(props) {

    const [api_img_right, setapi_img_right] = useState([])

    useEffect(() => {
        Api_stores
            .getAll()
            .then(res => {
                setapi_img_right(res.data)
            }
            )
    }, [])

    const [idIndex, setidIndex] = useState()

    const handleIdIndexRIGHT = (id) => {
        const item = JSON.parse(JSON.stringify(api_img_right))
        const index = item.findIndex((item) => item.id === id)
        setidIndex(index)
    }



    return (
        <Routes>
            <Route path="/todos" element={<Todo tittle="React" handleIdIndexRIGHT={handleIdIndexRIGHT} />}>
                <Route index element={<Bodytodos tittle="React" Img={api_img_right[3]?.url_todos_img_rights} />} />

                <Route path="/todos/:url" element={<Bodytodos  Img={api_img_right[idIndex]?.url_todos_img_rights}  />} />


                {/* <Route path={api_img_right[idIndex]?.name} element={<Bodytodos tittle={api_img_right[idIndex]?.name} Img={api_img_right[idIndex]?.url_todos_img_rights}  />} /> */}

                {/* <Route path="html" element={<Bodytodos tittle="HTML" Img={api_img_right[0]?.url_todos_img_rights}  />} />
                <Route path="css" element={<Bodytodos tittle="CSS" Img={api_img_right[1]?.url_todos_img_rights} />} />
                <Route
                    path="javascript"
                    element={<Bodytodos tittle="JAVASCRIPT" Img={api_img_right[2]?.url_todos_img_rights} />}
                />
                <Route path="react" element={<Bodytodos tittle="React" Img={api_img_right[3]?.url_todos_img_rights} />} />
                <Route path="php" element={<Bodytodos tittle="PHP" Img={api_img_right[4]?.url_todos_img_rights} />} /> */}
            
            </Route>
        </Routes>

    );
}

export default RouterTodoRight;