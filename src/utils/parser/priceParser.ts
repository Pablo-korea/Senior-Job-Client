import React from 'react';

const priceParser = (rawPrice: number | undefined) => {
    return rawPrice ? rawPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '';
};

export default priceParser;
