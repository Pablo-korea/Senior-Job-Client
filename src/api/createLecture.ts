import React from 'react';
import axios from 'axios';

const createLecture = async (isLectureInfo: LectureData) => {
    return await axios({
        method: 'post',
        url: `/api/lectures`,
        data: isLectureInfo,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export default createLecture;
