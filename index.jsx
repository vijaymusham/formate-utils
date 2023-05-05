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

