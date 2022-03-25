import axios from 'axios'

class PicturesService {

    constructor() {

        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/mis-imagenes` })

    }


    getAllPictures = () => {
        return this.api.get('/getAllPictures')
    }

    getOnePicture = picture_id => {
        return this.api.get(`/getOnePicture/${picture_id}`)
    }

    createPicture = picture => {
        return this.api.post(`/create`, picture)
    }

    editPicture = (picture_id, pictureInfo) => {
        return this.api.put(`/edit/${picture_id}`, pictureInfo)
    }

    deletePicture = picture_id => {
        return this.api.delete(`/delete/${picture_id}`)
    }


}

const picturesService = new PicturesService()

export default picturesService