import React from 'react';

import * as s from './StyledButton';

interface ParamProps {
    status: boolean;
    onClick: (value: any) => void;
    children: any;
}

export default function SmallButton(props: ParamProps) {
    return (
        <>
            {props.status === true ? (
                <s.SelecteButton onClick={props.onClick}>{props.children}</s.SelecteButton>
            ) : (
                <s.DefaultButton onClick={props.onClick}>{props.children}</s.DefaultButton>
            )}
        </>
    );
}
