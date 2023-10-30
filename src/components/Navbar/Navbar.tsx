import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import LogoBi from '@images/logo-bi.png';
import LogoTitle from '@images/logo-title.png';
import { ReactComponent as MypageIcon } from '@images/icon-31-mypage.svg';
import { ReactComponent as LogoutIcon } from '@images/icon-38-logout.svg';

import * as s from './StyledNavbar';

export default function Navbar() {
    const location = useLocation();
    const currentPage = location.pathname.split('/')[1];

    return (
        <>
            <s.Navbar>
                <s.Logo>
                    <Link to='/'>
                        <img src={LogoBi} width='55px' height='43px' alt='logo-bi' />
                        <img src={LogoTitle} width='80px' height='34px' alt='logo-title' />
                    </Link>
                </s.Logo>
                <s.Menu>
                    <s.MenuTypo color={currentPage === 'lecture' ? 'true' : 'false'}>
                        <Link to='/lecture'>강좌 수강</Link>
                    </s.MenuTypo>

                    <s.MenuTypo color={currentPage === 'proposal' ? 'true' : 'false'}>
                        <Link to='/proposal'>강좌 제안</Link>
                    </s.MenuTypo>

                    <s.MenuTypo color={currentPage === 'parttime' ? 'true' : 'false'}>
                        <Link to='/parttime'>파트타임</Link>
                    </s.MenuTypo>
                </s.Menu>
                <s.ButtonGroup>
                    <Link to='/mypage'>
                        <s.ButtonTypo>
                            <MypageIcon />
                            마이페이지
                        </s.ButtonTypo>
                    </Link>
                    <Link to='/signout'>
                        <s.ButtonTypo>
                            <LogoutIcon />
                            로그아웃
                        </s.ButtonTypo>
                    </Link>
                </s.ButtonGroup>
            </s.Navbar>
        </>
    );
}
