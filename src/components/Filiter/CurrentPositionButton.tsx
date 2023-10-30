import React from 'react';

import * as s from './StyledCurrentPositionButton';
import { ReactComponent as GpsIcon } from '@images/icon-16-gps.svg';

export default function CurrentPositionButton() {
    return (
        <s.Button>
            <GpsIcon />
            <span>현재 내 위치</span>
        </s.Button>
    );
}
