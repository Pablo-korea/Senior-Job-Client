import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ArrowIcon } from '@images/icon-24-arrow.svg';

import * as s from './StyledContentHeader';

// 대분류 > 중분류 > 소분류
export default function ContentHeader(param: CotentHeaderParam) {
    const jsonString: string = JSON.stringify(Object.keys(param));
    const stringArray: Array<string> = JSON.parse(jsonString);

    return (
        <>
            <s.contentHeader>
                {stringArray?.map((item: string, index: number) =>
                    index % 2 ? (
                        <>
                            <ArrowIcon />
                            <Link to={param[item.toString()]}>
                                <s.contentTypo key={item}>{item}</s.contentTypo>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to={param[item.toString()]}>
                                <s.contentTypo key={item}>{item}</s.contentTypo>
                            </Link>
                        </>
                    )
                )}
            </s.contentHeader>
        </>
    );
}
