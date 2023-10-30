import React from 'react';
import axios from 'axios';

const readPopularityLectureList = async () => {
    return await axios({
        method: 'get',
        url: `/api/lectures/search?&status=WAITING&descending=true&sortByPopularity=true`,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response: any) => {
        return response.data;
    });
};

export default readPopularityLectureList;
