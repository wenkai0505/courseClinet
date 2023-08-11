import axios from 'axios'

const API_URL = 'http://127.0.0.1:8080/api/course'
const API_URLFILTER = 'http://127.0.0.1:8080/api/filterCourse'


class CourseService {
    getCourse() {
        let token
        if (localStorage.getItem('user')) {
            token = JSON.parse(localStorage.getItem('user')).token
        }
        else {
            token = ""
        }

        return axios.get(API_URL, {
            headers: {
                Authorization: token
            }
        })
    }
    getFilterCourse() {
        return axios.get(API_URLFILTER)
    }

    postCourse(formData) {
        let token
        if (localStorage.getItem('user')) {
            token = JSON.parse(localStorage.getItem('user')).token
        }
        else {
            token = ""
        }

        return axios.post(API_URL, formData, {
            headers: {
                "Authorization": token,
                "Content-Type": "multipart/form-data",
            }
        })
    }
    getInstructorCourse(_id) {
        let token
        if (localStorage.getItem('user')) {
            token = JSON.parse(localStorage.getItem('user')).token
        }
        else {
            token = ""
        }
        return axios.get(API_URL + "/instructor/" + _id, {
            headers: {
                Authorization: token
            }
        })
    }
    deleteCourse(_id) {
        let token
        if (localStorage.getItem('user')) {
            token = JSON.parse(localStorage.getItem('user')).token
        }
        else {
            token = ""
        }

        return axios.delete(API_URL + "/" + _id, {
            headers: {
                Authorization: token
            }
        })
    }
    getStudentAddCourse(_id) {
        let token
        if (localStorage.getItem('user')) {
            token = JSON.parse(localStorage.getItem('user')).token
        }
        else {
            token = ""
        }

        return axios.get(API_URL + "/student/" + _id, {
            headers: {
                Authorization: token
            }
        })
    }
    addCourse(_id) {
        let token
        if (localStorage.getItem('user')) {
            token = JSON.parse(localStorage.getItem('user')).token
        }
        else {
            token = ""
        }
        return axios.post(API_URL + "/addCourse/" + _id, {}, {
            headers: {
                Authorization: token
            }
        })
    }
}




export default new CourseService()