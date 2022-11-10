import axios from 'axios';

const authToken = token => {
    if (token) {
        //apply authorization token to every request if logged in
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        //delete auth header
        delete axios.defaults.headers.common["Authotization"];
    }
};

export default authToken;