import { axiosInstance } from "../helper/axios-config";


const getDirectores = () => {
    return axiosInstance.get('director', {
       headers: {
             'content-Type': 'application/json'
       }
    })
    
}

const crearDirector = (data) => {
    return axiosInstance.post('director', data, {
        headers: {
              'content-Type': 'application/json'
        }
     })

}

const actualizarDirector = (data, directorId) => {
    return axiosInstance.put('director/${directorId}', data, {
        headers: {
              'content-Type': 'application/json'
        }
     })

}


export {
    getDirectores, crearDirector, actualizarDirector
}