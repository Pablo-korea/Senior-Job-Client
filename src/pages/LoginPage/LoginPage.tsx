import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LoginLogo } from '@images/Image-Login-Logo.svg';

import * as s from './StyledLoginPage';

export default function Login() {
    return (
        <>
            <s.LoginHeader>
                <LoginLogo />
                <p>일벗의 다양한 서비스를 이용하시려면</p>
                <p>로그인을 해주세요!</p>
            </s.LoginHeader>
            {/* <s.ButtonGroup>
                <button>개인회원</button>
                <button>기업회원</button>
            </s.ButtonGroup> */}
            <s.FormGroup>
                <s.TextInput placeholder='전화번호' />
                <s.TextInput type='password' placeholder='비밀번호' />
                <s.LoginButton>로그인</s.LoginButton>
                {/* <s.KakaoLoginButton /> */}
                <Link to={`/signup`}>
                    <s.signupButton>계정이 없으신가요?</s.signupButton>
                </Link>
            </s.FormGroup>
        </>
    );
}
