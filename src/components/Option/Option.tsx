import React from 'react';

import * as s from './StyledOption';

interface ParamProps {
    value?: string;
    onChange: (value: any) => void;
}

export default function Option(props: ParamProps) {
    return (
        <s.OptionBar>
            <s.Option
                color={props.value === '최신순' ? 'true' : 'false'}
                onClick={() => {
                    props.onChange('최신순');
                }}
            >
                최신순
            </s.Option>
            <s.SepLine />
            <s.Option
                color={props.value === '오래된 순' ? 'true' : 'false'}
                onClick={() => {
                    props.onChange('오래된 순');
                }}
            >
                오래된 순
            </s.Option>
            <s.SepLine />
            <s.Option
                color={props.value === '가격 낮은 순' ? 'true' : 'false'}
                onClick={() => {
                    props.onChange('가격 낮은 순');
                }}
            >
                가격 낮은 순
            </s.Option>
            <s.SepLine />
            <s.Option
                color={props.value === '가격 높은 순' ? 'true' : 'false'}
                onClick={() => {
                    props.onChange('가격 높은 순');
                }}
            >
                가격 높은 순
            </s.Option>
            <s.SepLine />
            <s.Option
                color={props.value === '인기순' ? 'true' : 'false'}
                onClick={() => {
                    props.onChange('인기순');
                }}
            >
                인기순
            </s.Option>
        </s.OptionBar>
    );
}
