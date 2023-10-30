import React, { useState } from 'react';

import * as s from './StyledDropDown';

interface ParamProps {
    menuUnit: string;
    menuItems?: string[];
    onChange: (value: any) => void;
}

export default function Dropdown(props: ParamProps) {
    const [isValue, setValue] = useState(props.menuUnit);

    return (
        <s.DropDownGroup>
            <s.DropDownSelect
                value={isValue}
                onChange={(e: any) => {
                    setValue(e.target.value);
                    props.onChange(e.target.value);
                }}
            >
                <s.DropDownItem disabled selected>
                    {props.menuUnit}
                </s.DropDownItem>
                {props.menuItems?.map((menuItem) => {
                    return (
                        <s.DropDownItem key={menuItem} value={menuItem}>
                            {menuItem}
                        </s.DropDownItem>
                    );
                })}
            </s.DropDownSelect>
        </s.DropDownGroup>
    );
}
