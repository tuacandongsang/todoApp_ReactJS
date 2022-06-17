import { Api_userStudy } from "axios/Axios";
import { useEffect, useState } from "react";


function Nhansu() {

    const initItem = [
        {
            id: 1,
            name: "nguyen tuan",
            email: "dongsang@gmail.com",
            birthDay: "1993-01-03",
            gender: "Nam",
            code: '1',
            userName: "tuancandongsang",
            passWord: "03011993",
            repeatPassWord: "03011993"
        },
        {
            id: 2,
            name: "bui hoa",
            email: "hoaham@gmail.com",
            birthDay: "1994-10-05",
            gender: "Nu",
            code: '2',
            userName: "thanhhoa",
            passWord: "05101994",
            repeatPassWord: "03011993"
        },
        {
            id: 321,
            name: " nguyen nga",
            email: "ngaden@gmail.com",
            birthDay: "2001-12-26",
            gender: "Nu",
            code: '3',
            userName: "phuongnga",
            passWord: "28122001",
            repeatPassWord: "03011993"
        }
    ]

    useEffect(() => {
        Api_userStudy
            .getAll()
            .then((res) =>
                // console.log(res.data)
                setitems(res.data)
            )
    }, [initItem])

    const [items, setitems] = useState(initItem)
    const [modal, setmodal] = useState(false)
    const [status, setstatus] = useState('')
    const [errorName, setErrorName] = useState("")
    const [errorEamil, setErrorEamil] = useState('')
    const [errorBirthDay, setErrorBirthDay] = useState('')
    const [errorGender, setErrorGender] = useState('')
    const [errorPassWord, setErrorPassWord] = useState('')

    const [input, setinput] = useState({
        inputSearch: '',
        selecGender: '',
        inputName: '',
        inputEmail: '',
        inputBirthDay: '',
        inputGender: '',
        inputCodeId: '',
        inputPassWord: '',
        inputRepeatPassWord: '',
        indexID: '',
    })
    const onChangeInput = (e) => {
        const { name, value } = e.target
        setinput({
            ...input,
            [name]: value
        })
    }
    const handleClose = () => {
        setmodal(false)
    }
    const handleDelete = async (id) => {
        await Api_userStudy
            .delete(id)
        await Api_userStudy
            .getAll()
            .then(res => setitems(res.data))
    }
    const handleAddEdit = (id) => {
        const item = JSON.parse(JSON.stringify(items))
        const index = item.findIndex((item) => item.id === id)
        setmodal(!modal)
        setErrorBirthDay('')
        setErrorEamil('')
        setErrorName('')
        setErrorGender("")
        setErrorPassWord("")
        if (id > 0) {
            setstatus('Edit')
            input.inputName = item[index].name
            input.inputEmail = item[index].email
            input.inputBirthDay = item[index].birthDay
            input.inputGender = item[index].gender
            input.inputCodeId = item[index].code
        }
        else {
            setstatus('Add')
            input.inputName = ''
            input.inputEmail = ''
            input.inputBirthDay = ''
            input.inputGender = ''
            input.inputCodeId = ''
        }
        setinput({
            ...input,
            indexID: id,
        })
    }

    function ValidateName() {
        if (input.inputName.trim() === '') {
            setErrorName('ten khong duoc de trong')
            return false
        } else {
            setErrorName("")
            return true
        }
    }

    function ValidateEmail() {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.inputEmail)) {
            setErrorEamil("")
            return (true)
        } else if (input.inputEmail.trim() === '') {
            setErrorEamil('vui long dien Email')
            return false
        } else {
            setErrorEamil("Trường này phải là email hợp lệ!")
            return (false)
        }
    }

    function ValidateBirthDay() {
        if (input.inputBirthDay.trim() === '') {
            setErrorBirthDay("vui long nhap nam sinh")
            return false
        } else if (input.inputBirthDay.split('-')[0] < 2019) {
            setErrorBirthDay('')
            return true
        } else setErrorBirthDay('nam sinh phai lon hon 2019')
        return false
    }

    function ValidatePassword() {
        if (input.inputPassWord.trim() === '') {
            setErrorPassWord("vui long nhap pass")
            return false
        } else if (input.inputPassWord.length < 6) {
            setErrorPassWord("pass phai gom 6 ky tu")
            return false
        } else if (input.inputPassWord !== input.inputRepeatPassWord) {
            setErrorPassWord("pass khong trung nhau")
            return false
        }
        setErrorPassWord("")
        return true
    }

    function ValidateGender() {
        if (input.inputGender === '') {
            setErrorGender("vui long nhap gioi tinh")
            return false
        }
        setErrorGender("")
        return true
    }

    const handleSave = async () => {
        const item = JSON.parse(JSON.stringify(items))
        const index = item.findIndex((item) => item.id === input.indexID)
        if (ValidateBirthDay() === false || ValidateEmail() === false || ValidateName() === false || ValidatePassword() === false || ValidateGender() === false) {
            ValidateBirthDay();
            ValidateEmail();
            ValidateName();
            ValidatePassword();
            ValidateGender();
        } else {
            if (input.indexID > 0) {
                item[index].name = input.inputName
                item[index].email = input.inputEmail
                item[index].birthDay = input.inputBirthDay
                item[index].gender = input.inputGender
                item[index].code = input.inputCodeId
                // setitems(item)
                await Api_userStudy
                    .patch(input.indexID, {
                        name: input.inputName,
                        email: input.inputEmail,
                        birthDay: input.inputBirthDay,
                        gender: input.inputGender,
                        code: input.inputCodeId,
                    })
                await Api_userStudy
                    .getAll()
                    .then(res => setitems(res.data))
            } else {
                const schema = {
                    id: input.inputCodeId,
                    name: input.inputName,
                    email: input.inputEmail,
                    birthDay: input.inputBirthDay,
                    gender: input.inputGender,
                }
                // item.push(schema)

                await Api_userStudy
                    .post(schema)
                await Api_userStudy
                    .getAll()
                    .then(res => setitems(res.data))
            }
            setmodal(!modal)
            // setitems(item)
        }
    }

    return (
        <>
            <div className="chamcong_con task">
                <div className="input-group mb-3">
                    <button
                        type="button"
                        className="btn btn-primary"
                    >Search</button>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for name"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        name="inputSearch"
                        value={input.inputSearch}
                        onChange={onChangeInput}
                    />
                    <button
                        type="button"
                        className="btn btn-primary width_add"
                        value='0'
                        onClick={(id) => handleAddEdit(id.target.value)}
                    > them nhan vien</button>
                </div>
            </div>
            <div className="chamcong_con">
                <table className="table ">
                    <thead>
                        <tr>
                            <th >STT</th>
                            <th >Code</th>
                            <th >Name</th>
                            <th >Email</th>
                            <th >Birthday</th>
                            <th >
                                <div className="gender__block">
                                    Gender
                                    <div className="select_gender__block">
                                        <select
                                            className="form-select select_gender"
                                            aria-label="Default select example"
                                            name="selecGender"
                                            onChange={onChangeInput}
                                            value={input.selecGender}
                                        >
                                            <option value=''>All</option>
                                            <option value="Nam">Nam</option>
                                            <option value="Nu">Nu</option>
                                        </select>
                                    </div>
                                </div>
                            </th>
                            <th >Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items
                            .filter((item) => item.name.toLowerCase().includes(input.inputSearch))
                            .filter((item) => item.gender.includes(input.selecGender))
                            .map((item, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <th>{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.birthDay
                                        .split("-").reverse().join("/")
                                    }</td>
                                    <td>{item.gender}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary"
                                            onClick={() => handleAddEdit(item.id)}
                                        >Edit</button>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(item.id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>

                {modal && (
                    <div className="modal modal11" tabIndex="-1">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{status}</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        onClick={handleClose}
                                    ></button>
                                </div>
                                <div className="label_title">
                                    <label
                                        htmlFor="basic-url"
                                        className="htmlForm-label label_paddingLeft_20px "
                                    >Name:</label>
                                    <div className="input-group ">
                                        <input
                                            type="text"
                                            className="form-control input_Full"
                                            placeholder="Username" aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            name="inputName"
                                            value={input.inputName}
                                            onChange={onChangeInput}
                                            required
                                            autoFocus
                                        />
                                    </div>
                                    <span
                                        style={{ color: 'red', paddingLeft: '20px' }}
                                    >{errorName}</span>
                                </div>
                                <div className="label_title">
                                    <label
                                        htmlFor="basic-url"
                                        className="htmlForm-label label_paddingLeft_20px"
                                    >Email:</label>
                                    <div className="input-group ">
                                        <input
                                            type="text"
                                            className="form-control input_Full"
                                            placeholder="Username" aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            name="inputEmail"
                                            value={input.inputEmail}
                                            onChange={onChangeInput}
                                            required
                                        />
                                    </div>
                                    <span
                                        style={{ color: 'red', paddingLeft: '20px' }}
                                    >{errorEamil}</span>
                                </div>
                                <div className="nameModal">
                                    <div className="label_title_2">
                                        <label
                                            htmlFor="basic-url"
                                            className="htmlForm-label"
                                        >Birthday:</label>
                                        <div className="input-group  ">
                                            <input
                                                type="date"
                                                className="form-control"
                                                placeholder="Username"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                name="inputBirthDay"
                                                value={input.inputBirthDay}
                                                onChange={onChangeInput}
                                            />
                                        </div>
                                        <span
                                            style={{ color: 'red' }}
                                        >{errorBirthDay}</span>
                                    </div>
                                    <div className="label_title_2">
                                        <div>
                                            <label
                                                htmlFor="basic-url"
                                                className="htmlForm-label"
                                            >Gender:</label>
                                            <select
                                                className="form-select form-select-sm"
                                                aria-label=".form-select-sm example"
                                                name="inputGender"
                                                value={input.inputGender}
                                                onChange={onChangeInput}
                                            >
                                                <option value='' >-Chon gioi tinh-</option>
                                                <option value="Nam">Nam</option>
                                                <option value="Nu">Nu</option>
                                            </select>
                                        </div>
                                        <span
                                            style={{ color: 'red' }}
                                        >{errorGender}</span>
                                    </div>
                                </div>
                                <div className="label_title">
                                    <label
                                        htmlFor="basic-url"
                                        className="htmlForm-label label_paddingLeft_20px"
                                    >CODE ID NUMBER:</label>
                                    <div className="input-group  mb-3 ">
                                        <input
                                            type="number"
                                            className="form-control input_Full"
                                            placeholder="Username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            name="inputCodeId"
                                            value={input.inputCodeId}
                                            onChange={onChangeInput}
                                        />
                                    </div>
                                </div>
                                <div className="nameModal">
                                    <div className="label_title_2">
                                        <label
                                            htmlFor="basic-url"
                                            className="htmlForm-label"
                                        >Password:</label>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Username"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                name='inputPassWord'
                                                value={input.inputPassWord}
                                                onChange={onChangeInput}
                                            />
                                        </div>
                                    </div>
                                    <div className="label_title_2">
                                        <label
                                            htmlFor="basic-url"
                                            className="htmlForm-label"
                                        >Repeat Password:</label>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Username"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                name='inputRepeatPassWord'
                                                value={input.inputRepeatPassWord}
                                                onChange={onChangeInput}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <span
                                    className="errorPassWord_margin"
                                    style={{ color: 'red' }}
                                >{errorPassWord}</span>
                                <div className="button_margin_top">
                                    <button
                                        type="button"
                                        className="btn btn-primary width_button "
                                        onClick={handleSave}
                                    >Save</button>
                                    <button
                                        type="button"
                                        className="btn btn-danger width_button"
                                        onClick={handleClose}
                                    >Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
export default Nhansu;