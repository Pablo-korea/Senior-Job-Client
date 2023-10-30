import React from 'react';
import { Link } from 'react-router-dom';

import * as s from './StyledMenuSidebar';

export default function MenuSideBar() {
    return (
        <s.body>
            <s.title>
                <Link to='/mypage'>
                    <s.titleTypo>마이페이지</s.titleTypo>
                </Link>
            </s.title>
            <s.menuGroup>
                <s.menuTitle>
                    <p>마이 프로필</p>
                    <svg width='19' height='13' viewBox='0 0 19 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M7.58491 11.7174L1.09601 4.93478C0.3057 4.1087 0.129335 3.16348 0.56692 2.09913C1.0045 1.03478 1.784 0.501739 2.90542 0.5H15.7584C16.8815 0.5 17.6618 1.03304 18.0994 2.09913C18.537 3.16522 18.3598 4.11043 17.5678 4.93478L11.0789 11.7174C10.8294 11.9783 10.559 12.1739 10.2678 12.3043C9.97665 12.4348 9.66468 12.5 9.33192 12.5C8.99916 12.5 8.68719 12.4348 8.39602 12.3043C8.10485 12.1739 7.83448 11.9783 7.58491 11.7174Z'
                            fill='#CCCCCC'
                        />
                    </svg>
                </s.menuTitle>
                <s.menuList>
                    <Link to='/mypage/profile'>
                        <s.menuElement id='profile'>내 정보</s.menuElement>
                    </Link>
                    <Link to='/mypage/resume'>
                        <s.menuElement id='resume'>이력서 관리</s.menuElement>
                    </Link>
                    <Link to='/mypage/cert'>
                        <s.menuElement id='cert'>자격 증명</s.menuElement>
                    </Link>
                </s.menuList>
            </s.menuGroup>
            <s.menuGroup>
                <s.menuTitle>
                    <p>강좌</p>
                    <svg width='19' height='13' viewBox='0 0 19 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M7.58491 11.7174L1.09601 4.93478C0.3057 4.1087 0.129335 3.16348 0.56692 2.09913C1.0045 1.03478 1.784 0.501739 2.90542 0.5H15.7584C16.8815 0.5 17.6618 1.03304 18.0994 2.09913C18.537 3.16522 18.3598 4.11043 17.5678 4.93478L11.0789 11.7174C10.8294 11.9783 10.559 12.1739 10.2678 12.3043C9.97665 12.4348 9.66468 12.5 9.33192 12.5C8.99916 12.5 8.68719 12.4348 8.39602 12.3043C8.10485 12.1739 7.83448 11.9783 7.58491 11.7174Z'
                            fill='#CCCCCC'
                        />
                    </svg>
                </s.menuTitle>
                <s.menuList>
                    <Link to='/mypage/lecture/participate'>
                        <s.menuElement id='lecture-participant'>참여 강좌</s.menuElement>
                    </Link>
                    <Link to='/mypage/lecture/apply'>
                        <s.menuElement id='lecture-apply'>신청 강좌</s.menuElement>
                    </Link>
                    <Link to='/mypage/lecture/propose'>
                        <s.menuElement id='lecture-propose'>제안 강좌</s.menuElement>
                    </Link>
                    <Link to='/mypage/lecture/open'>
                        <s.menuElement id='lecture-created'>개설 강좌</s.menuElement>
                    </Link>
                </s.menuList>
            </s.menuGroup>
            <s.menuGroup>
                <s.menuTitle>
                    <p>파트타임</p>
                    <svg width='19' height='13' viewBox='0 0 19 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M7.58491 11.7174L1.09601 4.93478C0.3057 4.1087 0.129335 3.16348 0.56692 2.09913C1.0045 1.03478 1.784 0.501739 2.90542 0.5H15.7584C16.8815 0.5 17.6618 1.03304 18.0994 2.09913C18.537 3.16522 18.3598 4.11043 17.5678 4.93478L11.0789 11.7174C10.8294 11.9783 10.559 12.1739 10.2678 12.3043C9.97665 12.4348 9.66468 12.5 9.33192 12.5C8.99916 12.5 8.68719 12.4348 8.39602 12.3043C8.10485 12.1739 7.83448 11.9783 7.58491 11.7174Z'
                            fill='#CCCCCC'
                        />
                    </svg>
                </s.menuTitle>
                <s.menuList>
                    <Link to='/mypage/parttime/apply'>
                        <s.menuElement id='parttime-apply'>신청 파트타임</s.menuElement>
                    </Link>
                    <Link to='/mypage/parttime/proposal'>
                        <s.menuElement id='parttime-propose'>제안 파트타임</s.menuElement>
                    </Link>
                </s.menuList>
            </s.menuGroup>
        </s.body>
    );
}
