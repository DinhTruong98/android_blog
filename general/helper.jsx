import moment from "moment";
import "moment/locale/vi";
import { func } from "prop-types";
moment.locale("vi");

const formatMoney = (number) => {
    if (number) {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "VND",
        });
    }
};

const timeAgo = (rawDate) => {
    if (rawDate) {
        return moment(rawDate).fromNow();
    }
};

const slugify = (str) => {
    str = str.replace(/^\s+|\s+$/g, ""); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
    var to = "aaaaaeeeeeiiiiooooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }

    str = str
        .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
        .replace(/\s+/g, "-") // collapse whitespace and replace by -
        .replace(/-+/g, "-"); // collapse dashes

    return str;
};
export function displayDate(date, format = "DD/MM/YYYY") {
    return date ? moment(date).format(format) : "-";
}
export function displayFullDate(date) {
    return moment(date).format("DD/MM/YYYY HH:mm:ss");
}
export function displayDateTime(date) {
    return moment(date).format("DD/MM/YYYY HH:mm");
}
export function isEmptyOrNullObject(obj) {
    return !obj || Object.keys(obj).length == 0;
}

export function formatDate(dateTime) {
    return format(new Date(dateTime), Format.date);
}

export function formatCustomDate(dateTime) {
    return format(new Date(dateTime), Format.customDate);
}

export function formatDateTime(dateTime) {
    return format(new Date(dateTime), Format.dateTime);
}

export function formatDateTime24h(dateTime) {
    return format(new Date(dateTime), Format.dateTime24h);
}

export function formatTime24h(dateTime) {
    return format(new Date(dateTime), Format.time24h);
}

export function isMobile() {
    if (!process.browser)
        return (isMobile = {
            Android: function () {
                return false;
            },
            BlackBerry: function () {
                return false;
            },
            iOS: function () {
                return false;
            },
            Opera: function () {
                return false;
            },
            Windows: function () {
                return false;
            },
            any: function () {
                return false;
            },
        });
    return (isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return (
                navigator.userAgent.match(/IEMobile/i) ||
                navigator.userAgent.match(/WPDesktop/i)
            );
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows()
            );
        },
    });
}

export { formatMoney, slugify, timeAgo };
