import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getAllInvoices = async () => {
    try {
        console.log("Getting invoices");
        return await axios.get(`${API_URL}/invoice`, {
            // Token is hardcoded from /auth/login API
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

// export const SaveUser = async (payload) => {
//     try {
//         return await axios.post(`${API_URL}/user`, payload);
//     } catch (error) {
//         console.log('Error: ', error.message);
//         return error.response.data;
//     }
// }