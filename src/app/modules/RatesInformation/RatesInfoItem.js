import React from 'react'
import CurrencyFlag from 'react-currency-flags';
import axios from 'axios';
import uuid from 'react-uuid'

function RatesInfoItem({item, setData}) {
    const getSelectedLatest = () => {
        axios.get(`https://api.frankfurter.app/latest?from=${item.title}`)
            .then(response => {
                let ratesArray = [];
                Object.keys(response.data.rates)
                    .forEach(function eachKey(key) { 
                        ratesArray.push({id: uuid(), title: key, rate: response.data.rates[key]})
                    });
                    setData({
                        loading: false,
                        data: ratesArray,
                        base: response.data.base,
                        error: false
                    })
            })
            .catch(error => {
                console.log(error)
                setData({
                    loading: false,
                    data: [],
                    base: "",
                    error: true
                })
            })
    }
    return (
        <div className="app-info-list-item" onClick={getSelectedLatest}>
            <div className="app-info-currency-flag">
                <CurrencyFlag currency={item.title} />
                <p>{item.title}</p>
            </div>
            <span className="app-info-currency-price">{item.rate}</span>
        </div>
    )
}

export default RatesInfoItem
