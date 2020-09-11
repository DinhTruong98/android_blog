import axios from "axios";
import { errorAlert } from "./AlertManager";

let serviceIP = process.env.SERVICE_IP_ADDRESS;
let token = ""
if (process.browser) {
    token = localStorage.getItem("token");
}
let getData = async (path, successCallback, errorCallback) => {
    try {
        const res = await axios.get(serviceIP + path, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
            },
        });
        if (res.data.isSuccess == true) {
            if (typeof successCallback == "function") {
                successCallback(res.data);
            }
        } else {
            if (typeof errorCallback == "function") {
                errorCallback(res.data);
            }
        }
    } catch (error) {
        if (typeof errorCallback == "function") {
            errorAlert("loi")
        }
    }
};
let postData = async (path, payload, successCallback, errorCallback) => {
    try {
        const res = await axios.post(serviceIP + path, payload, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
            },
        });
        if (res.data.isSuccess == true) {
            if (typeof successCallback == "function") {
                successCallback(res.data);
            }
        } else {
            if (typeof errorCallback == "function") {
                errorCallback(res.data);
            }
        }
    } catch (error) {
        if (typeof errorCallback == "function") {
            errorCallback(error);
        }
    }
};
export { getData, postData };
