import React, { useState } from 'react';

import * as s from './StyledDropDown';

interface ParamProps {
    menuUnit: string;
    menuItems: string[];
    onChange: (value: any) => void;
}

export default function Dropdown(props: ParamProps) {
    const [isValue, setValue] = useState('');

    return (
        <s.DropDown>
            <s.DropDownLabel>{props.menuUnit}</s.DropDownLabel>
            <s.DropDownGroup
                value={isValue}
                onChange={(e: any) => {
                    setValue(e.target.value);
                    props.onChange(e.target.value);
                }}
                MenuProps={{
                    PaperProps: {
                        style: {
                            maxHeight: 36 * 5 + 8 // item height * itemcount + padding                            width: 'auto'
                        }
                    }
                }}
            >
                {props.menuItems?.map((menuItem) => {
                    return (
                        <s.DropDownItem key={menuItem} value={menuItem}>
                            {menuItem}
                        </s.DropDownItem>
                    );
                })}
            </s.DropDownGroup>
        </s.DropDown>
    );
}
