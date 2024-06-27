import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getAllInvoices = async () => {
    try {
        return await axios.get(`${API_URL}/invoice`,{
            headers : {
                'Authorization' : `Bearer "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBaXNoUmF2aTA3IiwiaWF0IjoxNzE5NDc5MzQyLCJleHAiOjE3MTk0ODI5NDJ9.jIQmvz6lzInIwOx95LsDjtenyBW1gF__ANfhtyBnOGQ"`,
                'Content-Type' :'application/json',
                "Access-Control-Allow-Origin" : "*",
                'Accept' : 'application/json',
                'Method ' : 'cors'
                
                
                
            },
        });
    } catch (error) {
        console.log('Error: ', error.message);
        return error.response.data;
    }
}

export const saveInvoice = async (payload) => {
    try {
        return await axios.post(`${API_URL}/invoice`, payload, {
            headers: {
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcxOTQ3MzU1NywiZXhwIjoxNzE5NTU5OTU3fQ.j4_fj4Nks_iW-z8RUfOOhTENsUFgHAWmrn-oTt48Zv0`,
                "Content-Type": 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        });
    } catch (error) {
        console.log('Error: ', error.message);
        return error.response.data;
    }
}

export const deleteInvoice = async (id) => {
    try {
        return await axios.delete(`${API_URL}/invoice/${id}`,{
            headers: {
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcxOTQ3MzU1NywiZXhwIjoxNzE5NTU5OTU3fQ.j4_fj4Nks_iW-z8RUfOOhTENsUFgHAWmrn-oTt48Zv0`,
                "Content-Type": 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        });
    } catch (error) {
        console.log('Error: ', error.message);
        return error.response.data;
    }
}
