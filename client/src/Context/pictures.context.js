const { createContext, useState } = require("react");
const picturesService = require("../Services/pictures.service");


const PicturesContext = createContext()

function PictureProviderWrapper(props) {
    const [pictures, setPictures] = useState({})

    const loadPictures = () => {
        picturesService
            .getAllPictures()
            .then(({ data }) => setPictures(data))
            .catch(err => console.log(err))
    }

    return (
        <PicturesContext.Provider value={{ loadPictures, pictures }}>
            {props.children}
        </PicturesContext.Provider>
    )
}

export { PicturesContext, PictureProviderWrapper }