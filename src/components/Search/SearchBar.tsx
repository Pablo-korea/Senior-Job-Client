import React, { useState } from 'react';

import { ReactComponent as IconZoom } from '@images/icon-20-zoom.svg';

import * as s from './StyledSearchBar';

interface ParamProps {
    name: string;
    value: string;
    placeholder?: string;
    onChange: (value: any) => void;
}

export default function SearchBar(props: ParamProps) {
    const [isInputValue, setIsInputValue] = useState('');

    const onChangeInputValue = (e: any) => {
        setIsInputValue(e.target.value);
    };

    const onClickSubmitButton = () => {
        props.onChange(isInputValue);
    };

    return (
        <>
            <s.SearchBarSection>
                <s.TextInput
                    name={props.name}
                    value={isInputValue}
                    placeholder={props.placeholder ? props.placeholder : ''}
                    onChange={onChangeInputValue}
                />
                <s.SubmitButton onClick={onClickSubmitButton}>
                    <IconZoom /> 검색
                </s.SubmitButton>
            </s.SearchBarSection>
        </>
    );
}
