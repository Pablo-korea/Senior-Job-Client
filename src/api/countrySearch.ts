import React from 'react';
import axios from 'axios';

import config from '~/config/config';

const countrySearch = async (isConvinceKeyWord: string) => {
    return await axios({
        method: 'get',
        url: `https://api.vworld.kr/req/data?service=data&request=GetFeature&data=LT_C_ADSIGG_INFO&key=${config.vworld_key}&domain=http://${config.client.host}:${config.client.port}&size=50&attrFilter=full_nm:like:${isConvinceKeyWord}`,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        const data = response.data.response.result?.featureCollection.features;
        const resultData: string[] = [];

        for (let i = 0; i < data.length; i++) {
            resultData.push(data[i].properties.sig_kor_nm);
        }
        return resultData;
    });
};

export default countrySearch;
