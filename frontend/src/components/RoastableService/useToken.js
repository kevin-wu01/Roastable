import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        return tokenString;
    }

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        console.log(userToken);
        localStorage.setItem('token', JSON.stringify(userToken.data.token));
        setToken(userToken.data.token);
    }

    return {
        setToken: saveToken,
        token
    }
}