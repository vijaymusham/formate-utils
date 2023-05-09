
import React from 'react'

export const PriceFormater = ({ price }) => {
    return Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
    }).format(price / 1)
}

export const toTitleCase = (e) => {
    e.target.value = e.target.value.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

export const CommaFormater = ({ number }) => {
    return Intl.NumberFormat("en-IN", {
        maximumFractionDigits: 2,
    }).format(number)
}

export const ordinal = (i) => {
    var j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) {
        return i + "st";
    }
    if (j === 2 && k !== 12) {
        return i + "nd";
    }
    if (j === 3 && k !== 13) {
        return i + "rd";
    }
    return i + "th";
}

export const preventNegativeValue = (e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()

export const preventSpecialChars = (e) => ['\'', ',', '`', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '\\', '{', '|', '}', '~'].includes(e.key) && e.preventDefault()


export const sortList = (list, key, order = 'asc') => {
    function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };

    return list.sort((a, b) => innerSort(a, b))
}
