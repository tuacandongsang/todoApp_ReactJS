

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
    },
}

const urlImg_home_Slider = "urlImg_home_Slider"
const Api_urlImg_home_Slider = {
    getAll(params) {
        const url = `${urlImg_home_Slider}/`
        return axiosBaseStores.get(url, { params })
    },
    get(id) {
        const url = `${urlImg_home_Slider}/${id}`
        return axiosBaseStores.get(url)
    },
    post(data) {
        const url = `${urlImg_home_Slider}/`
        return axiosBaseStores.post(url, data)
    },
    patch(id, data) {
        const url = `${urlImg_home_Slider}/${id}`
        return axiosBaseStores.patch(url, data)
    },
    delete(id) {
        const url = `${urlImg_home_Slider}/${id}`
        return axiosBaseStores.delete(url)
    }
}

const urlImg_home_Product = "urlImg_home_Product"
const Api_urlImg_home_Product = {
    getAll(params) {
        const url = `${urlImg_home_Product}/`
        return axiosBaseStores.get(url, { params })
    },
    get(id) {
        const url = `${urlImg_home_Product}/${id}`
        return axiosBaseStores.get(url)
    },
    post(data) {
        const url = `${urlImg_home_Product}/`
        return axiosBaseStores.post(url, data)
    },
    patch(id, data) {
        const url = `${urlImg_home_Product}/${id}`
        return axiosBaseStores.patch(url, data)
    },
    delete(id) {
        const url = `${urlImg_home_Product}/${id}`
        return axiosBaseStores.delete(url)
    }
}

const userStudy_url = 'userStudy'
const Api_userStudy = {
    getAll(params) {
        const url = `${userStudy_url}/`
        return axiosBaseStores.get(url, { params })
    },
    get(id) {
        const url = `${userStudy_url}/${id}`
        return axiosBaseStores.get(url)
    },
    post(data) {
        const url = `${userStudy_url}/`
        return axiosBaseStores.post(url, data)
    },
    patch(id, data) {
        const url = `${userStudy_url}/${id}`
        return axiosBaseStores.patch(url, data)
    },
    delete(id) {
        const url = `${userStudy_url}/${id}`
        return axiosBaseStores.delete(url)
    }
}

const urlImg_home_Product_tab_basic = "urlImg_home_Product_tab_basic"
const Api_Product_tab_basic = {
    getAll(params) {
        const url = `${urlImg_home_Product_tab_basic}/`
        return axiosBaseStores.get(url, { params })
    },
    get(id) {
        const url = `${urlImg_home_Product_tab_basic}/${id}`
        return axiosBaseStores.get(url)
    },
    post(data) {
        const url = `${urlImg_home_Product_tab_basic}/`
        return axiosBaseStores.post(url, data)
    },
    patch(id, data) {
        const url = `${urlImg_home_Product_tab_basic}/${id}`
        return axiosBaseStores.patch(url, data)
    },
    delete(id) {
        const url = `${urlImg_home_Product_tab_basic}/${id}`
        return axiosBaseStores.delete(url)
    }
}

const urlImg_home_Product_tab_height = "urlImg_home_Product_tab_height"
const Api_Product_tab_height = {
    getAll(params) {
        const url = `${urlImg_home_Product_tab_height}/`
        return axiosBaseStores.get(url, { params })
    },
    get(id) {
        const url = `${urlImg_home_Product_tab_height}/${id}`
        return axiosBaseStores.get(url)
    },
    post(data) {
        const url = `${urlImg_home_Product_tab_height}/`
        return axiosBaseStores.post(url, data)
    },
    patch(id, data) {
        const url = `${urlImg_home_Product_tab_height}/${id}`
        return axiosBaseStores.patch(url, data)
    },
    delete(id) {
        const url = `${urlImg_home_Product_tab_height}/${id}`
        return axiosBaseStores.delete(url)
    }
}

const urlImg_home_Product_tab_pro="urlImg_home_Product_tab_pro"
const Api_Product_tab_pro = {
    getAll(params) {
        const url = `${urlImg_home_Product_tab_pro}/`
        return axiosBaseStores.get(url, { params })
    },
    get(id) {
        const url = `${urlImg_home_Product_tab_pro}/${id}`
        return axiosBaseStores.get(url)
    },
    post(data) {
        const url = `${urlImg_home_Product_tab_pro}/`
        return axiosBaseStores.post(url, data)
    },
    patch(id, data) {
        const url = `${urlImg_home_Product_tab_pro}/${id}`
        return axiosBaseStores.patch(url, data)
    },
    delete(id) {
        const url = `${urlImg_home_Product_tab_pro}/${id}`
        return axiosBaseStores.delete(url)
    }
}

const urlImg_home_clothes= "urlImg_home_clothes"
const Api_Product_clothes= {
    getAll(params) {
        const url = `${urlImg_home_clothes}/`
        return axiosBaseStores.get(url, { params })
    },
    get(id) {
        const url = `${urlImg_home_clothes}/${id}`
        return axiosBaseStores.get(url)
    },
    post(data) {
        const url = `${urlImg_home_clothes}/`
        return axiosBaseStores.post(url, data)
    },
    patch(id, data) {
        const url = `${urlImg_home_clothes}/${id}`
        return axiosBaseStores.patch(url, data)
    },
    delete(id) {
        const url = `${urlImg_home_clothes}/${id}`
        return axiosBaseStores.delete(url)
    }
}

const order_url = "order_cart"
const Api_order = {
    getAll(params) {
        const url = `${order_url}/`
        return axiosBaseStores.get(url, { params })
    },
    get(id) {
        const url = `${order_url}/${id}`
        return axiosBaseStores.get(url)
    },
    post(data) {
        const url = `${order_url}/`
        return axiosBaseStores.post(url, data)
    },
    patch(id, data) {
        const url = `${order_url}/${id}`
        return axiosBaseStores.patch(url, data)
    },
    delete(id) {
        const url = `${order_url}/${id}`
        return axiosBaseStores.delete(url)
    },
}


export {
    Api_userStudy,
    Api_stores,
    Api_urlImg_home_Slider,
    Api_urlImg_home_Product,
    Api_Product_tab_basic,
    Api_Product_tab_height,
    Api_Product_tab_pro,
    Api_Product_clothes,
    Api_order
}