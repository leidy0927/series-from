import { axiosInstance } from "../helper/axios-config";


const getGeneros = () => {
    return axiosInstance.get('genero', {
       headers: {
             'content-Type': 'application/json'
       }
    })
    
}

const crearGenero = (data) => {
    return axiosInstance.post('genero', data, {
        headers: {
              'content-Type': 'application/json'
        }
     })

}

const actualizarGenero = (data, generoId) => {
    return axiosInstance.put('genero/${generoId}', data, {
        headers: {
              'content-Type': 'application/json'
        }
     })

}


export {
    getGeneros, crearGenero, actualizarGenero
}