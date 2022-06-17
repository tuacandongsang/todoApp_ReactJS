

import axios from "axios";

const axiosBaseStores = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        'Content-Type': 'application/json',
    }
})

const stores_url = "stores"

const Api_stores = {
    getAll(params) {
        const url = `${stores_url}/`
        return axiosBaseStores.get(url, { params })
    },
    get(id) {
        const url = `${stores_url}/${id}`
        return axiosBaseStores.get(url)
    },
    post(data) {
        const url = `${stores_url}/`
        return axiosBaseStores.post(url, data)
    },
    patch(id, data) {
        const url = `${stores_url}/${id}`
        return axiosBaseStores.patch(url, data)
    },
    delete(id) {
        const url = `${stores_url}/${id}`
        return axiosBaseStores.delete(url)
    }
}




const axiosBaseUser = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        'Content-Type': 'application/json',
    }
})

const userStudy_url = 'userStudy'


const Api_userStudy = {
    getAll(params) {
        const url = `${userStudy_url}/`
        return axiosBaseUser.get(url, { params })
    },
    get(id) {
        const url = `${userStudy_url}/${id}`
        return axiosBaseUser.get(url)
    },
    post(data) {
        const url = `${userStudy_url}/`
        return axiosBaseUser.post(url, data)
    },
    patch(id, data) {
        const url = `${userStudy_url}/${id}`
        return axiosBaseUser.patch(url, data)
    },
    delete(id) {
        const url = `${userStudy_url}/${id}`
        return axiosBaseUser.delete(url)
    }
}

export { Api_userStudy, Api_stores }