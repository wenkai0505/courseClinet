import axios from 'axios'


// const COURSEURL = 'http://localhost:8080/api/course'
// const FILTERCOURSEAPIURL = 'http://localhost:8080/api/filterCourse'
const COURSEURL = 'https://courseserver-jxx6.onrender.com/api/course'
const FILTERCOURSEAPIURL = 'https://courseserver-jxx6.onrender.com/api/filterCourse'



class CourseService {
    //取得精選課程
    getFilterCourse() {
        return axios.get(FILTERCOURSEAPIURL)
    }

    //取得所有課程
    getCourse() {

        let token
        if (localStorage.getItem('user')) {
            token = JSON.parse(localStorage.getItem('user')).token
        }
        else {
            token = ""
        }
        return axios.get(COURSEURL, {
            headers: {
                Authorization: token
            }
        })
    }

    //新增課程
    postCourse(formData) {

        let token
        if (localStorage.getItem('user')) {
            token = JSON.parse(localStorage.getItem('user')).token
        }
        else {
            token = ""
        }
        return axios.post(COURSEURL, formData, {
            headers: {
                Authorization: token,
                "Content-Type": "multipart/form-data",
            },
        })
    }

    //刪除課程
    deleteCourse(_id) {
        let token
        if (localStorage.getItem('user')) {
            token = JSON.parse(localStorage.getItem('user')).token
        }
        else {
            token = ""
        }
        return axios.delete(COURSEURL + "/" + _id, {
            headers: {
                Authorization: token
            }
        })
    }

    //取得講師個人課程
    getInsturctorCourse(_id) {

        let token
        if (localStorage.getItem('user')) {
            token = JSON.parse(localStorage.getItem('user')).token
        }
        else {
            token = ""
        }
        return axios.get(COURSEURL + '/instructor/' + _id, {
            headers: {
                Authorization: token
            }
        })

    }

    //學生註冊課程
    addCourse(_id) {

        let token
        if (localStorage.getItem('user')) {
            token = JSON.parse(localStorage.getItem('user')).token
        }
        else {
            token = ""
        }
        return axios.post(COURSEURL + '/addCourse/' + _id, {}, {
            headers: {
                Authorization: token
            }
        })
    }

    //取得學生個人註冊的課程
    getStudnetAddCouret(_id) {

        let token
        if (localStorage.getItem('user')) {
            token = JSON.parse(localStorage.getItem('user')).token
        }
        else {
            token = ""
        }
        return axios.get(COURSEURL + '/student/' + _id, {
            headers: {
                Authorization: token
            }
        })
    }


}


export default new CourseService()