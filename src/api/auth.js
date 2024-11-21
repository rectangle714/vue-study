import { apiInstance } from "./index";
import Cookies from 'js-cookie';

const api = apiInstance();

async function login(email, password) {
    try {
        const response = await api.post('/auth/login', { 'email': email, 'password': password });
        const accessToken = response.data.accessToken;
        const refreshToken = response.data.refreshToken;
        const accessTokenExpiresIn = response.data.accessTokenExpired;
        const refreshTokenExpiresIn = response.data.refreshTokenExpired;

        if (accessToken) {
            Cookies.set('accessToken', accessToken, { expires: new Date(Date.now() + accessTokenExpiresIn), path: '/' });
        }
        if (refreshToken) {
            Cookies.set('refreshToken', refreshToken, { expires: new Date(Date.now() + refreshTokenExpiresIn), path: '/' });
        }

        this.$router.push({ name: '/' });
    } catch (error) {
        console.log(error);
    }
}

export { login };