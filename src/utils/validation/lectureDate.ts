import React from 'react';

import dayjs from 'dayjs';

interface rstObject {
    state: boolean;
    msg?: string;
}

export default function lectureDate(startDate: dayjs.ConfigType, endDate: dayjs.ConfigType): rstObject {
    if (dayjs(startDate) < dayjs()) {
        return { state: false, msg: '시작 날짜는 현재 날짜 이후로 지정해주세요.' };
    }
    if (dayjs(endDate) < dayjs(startDate).add(7, 'day')) {
        return { state: false, msg: '종료 날짜는 최소 7일 이상이어야합니다.' };
    }
    return { state: true };
}
