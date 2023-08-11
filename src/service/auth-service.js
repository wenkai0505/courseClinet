import axios from 'axios'
const API_URL = "http://127.0.0.1:8080/api/user"

class AuthService {

    Register(formData) {
        return axios.post(API_URL + "/register", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
    }
    Login(email, password) {
        return axios.post(API_URL + "/login", {
            email, password
        })
    }
    Logout() {
        return localStorage.removeItem("user")
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'))
    }
    getfilterInstructor() {
        return axios.get(API_URL + "/instructor")
    }
}

export default new AuthService()