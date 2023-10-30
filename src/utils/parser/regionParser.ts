import React from 'react';

const regionParser = (rawRegion: string) => {
    return rawRegion.split(' ').slice(0, 2).join(' ');
};

export default regionParser;
