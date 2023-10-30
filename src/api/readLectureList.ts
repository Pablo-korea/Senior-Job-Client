import React from 'react';
import axios from 'axios';

const readLectureList = async (props: LectureListOptions) => {
    return await axios({
        method: 'get',
        url: `/api/lectures/paging?page=${props.page - 1}&size=12`,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response: any) => {
        return response.data;
    });
};

export default readLectureList;
