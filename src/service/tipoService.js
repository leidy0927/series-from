import { axiosInstance } from "../helper/axios-config";


const getTipos= () => {
    return axiosInstance.get('tipo', {
       headers: {
             'content-Type': 'application/json'
       }
    })
    
}

const crearTipo= (data) => {
    return axiosInstance.post('tipo', data, {
        headers: {
              'content-Type': 'application/json'
        }
     })

}

const actualizarTipo= (data, tipoId) => {
    return axiosInstance.put('tipo/${tipoId}', data, {
        headers: {
              'content-Type': 'application/json'
        }
     })

}


export {
    getTipos, crearTipo, actualizarTipo
}