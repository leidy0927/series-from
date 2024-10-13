import { axiosInstance } from "../helper/axios-config";


const getMedias = () => {
    return axiosInstance.get('media', {
       headers: {
             'content-Type': 'application/json'
       }
    })
    
}

const crearMedia = (data) => {
    return axiosInstance.post('media', data, {
        headers: {
              'content-Type': 'application/json'
        }
     })

}



const actualizarMedia = (data, mediaId) => {
    return axiosInstance.put('media/${mediaId}', data, {
        headers: {
              'content-Type': 'application/json'
        }
     })

}

const getMediaPorId = (mediaId) => {
    return axiosInstance.get(`director/${mediaId}`, {

        header: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    getMedias, crearMedia, actualizarMedia, getMediaPorId
}
