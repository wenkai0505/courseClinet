import axios from 'axios'


// const USERAPIURL = "http://localhost:8080/api/user"
const USERAPIURL = "https://courseserver-jxx6.onrender.com/api/user"


class UserService {
    //取得精選講師
    getFilterInstructor() {
        return axios.get(USERAPIURL + "/instructor")
    }

    //註冊用戶
    register(formData) {
        return axios.post(USERAPIURL + "/register", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
    }

    //用戶登入
    login(email, password) {
        return axios.post(USERAPIURL + "/login", { email, password })
    }

    //用戶登出
    logout() {
        return localStorage.removeItem('user')
    }

    //獲取用戶資訊
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'))
    }

    //取得所有用戶
    getUserList() {
        return axios.get(USERAPIURL + '/userList')
    }


}


export default new UserService()