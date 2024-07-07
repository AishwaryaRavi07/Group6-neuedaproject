import axios from 'axios';

const API_URL = 'http://localhost:8080';

const getToken = () => localStorage.getItem("authToken");

export const getAllInvoices = async (userId = '0') => {
    try {
        const token = getToken();
        console.log(token)
        return await axios.get(`${API_URL}/get-invoices/${userId}`,{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',   
            },         
            
        });
    } catch (error) {
        console.log('Error: ', error.message);
        return error.response ? error.response.data : { error: error.message };
    }
}

export const saveInvoice = async (payload) => {
    try {
        const token = getToken();
        return await axios.post(`${API_URL}/add-invoice`, payload, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (error) {
        console.log('Error: ', error.message);
        return error.response ? error.response.data : { error: error.message };
    }
}

export const deleteInvoice = async (id) => {
    try {
        const token = getToken();
        return await axios.delete(`${API_URL}/delete-invoice`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                
            }
        });
    } catch (error) {
        console.log('Error: ', error.message);
        return error.response ? error.response.data : { error: error.message };
    }
}

export const getTransaction = async (userId = '0') => {
    try {
        const token = getToken();
        console.log(token)
        
        const response = await axios.get(`${API_URL}/get-transactions/${userId}`,{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            
        });
        console.log('Response:', response.data.income);

    } catch (error) {
        console.log('Error: ', error.message);
        return error.response ? error.response.data : { error: error.message };
    }
}

export const saveTransaction = async (payload) => {
    try {
        const token = getToken();
        console.log(token)
        console.log(payload)
        return await axios.post(`${API_URL}/add-transaction`, payload, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (error) {
        console.log('Error: ', error.message);
        return error.response ? error.response.data : { error: error.message };
    }
}
