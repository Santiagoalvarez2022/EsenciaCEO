// import.meta.env.VITE_URL_API_SINERGIA

import axios from "axios"


const getaAuthors = async() =>{
    try {
        const response = await axios(`${import.meta.env.VITE_URL_API_SINERGIA}`)
    } catch (error) {
        
    }
}