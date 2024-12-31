import axios from 'axios'
export const login = async(data) =>{
    try {
        console.log('entre en login');
        
        const response = await axios.post('http://localhost:3001/auth',data);
        console.log(response);
        

    } catch (error) {
        
    }
}