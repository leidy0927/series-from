import { axiosInstance } from "../helper/axios-config";


const getProductoras = () => {
    return axiosInstance.get('productora', {
       headers: {
             'content-Type': 'application/json'
       }
    })
    
}

const crearProductora = (data) => {
    return axiosInstance.post('productora', data, {
        headers: {
              'content-Type': 'application/json'
        }
     })

}

const actualizarProductora = (productoraId, data) => {
    return axiosInstance.put(`productora/${productoraId}`, data,  {
        

        headers: {
              'content-Type': 'application/json'
        }
     })

}


export {
    getProductoras, crearProductora, actualizarProductora
}