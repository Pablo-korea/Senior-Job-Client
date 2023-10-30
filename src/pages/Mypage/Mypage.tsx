import React from 'react';

import MenuSidebar from '@components/MenuSidebar/MenuSidebar';

import * as s from './StyledMypage';

export default function Mypage(props: any) {
    return (
        <s.body>
            <MenuSidebar />
            <s.content>{props.children}</s.content>
        </s.body>
    );
}
