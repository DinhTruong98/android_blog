import swal from "sweetalert";

function successAlert(content, rightBtnName, callback) {
    swal({
        title: "Thành công",
        text: content,
        icon: "success",
        button: rightBtnName,
    }).then(function onConfirm() {
        if (typeof callback == "function") {
            callback();
        }
    });
}

function errorAlert(content, rightBtnName, callback) {
    swal({
        title: "Lỗi",
        text: content,
        icon: "error",
        button: rightBtnName,
    }).then(function onConfirm() {
        if (typeof callback == "function") {
            callback();
        }
    });
}

export { errorAlert, successAlert };
