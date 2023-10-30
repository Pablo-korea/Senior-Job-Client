import styled from 'styled-components';
import KakaoLoginLargeWide from '@images/kakao_login_large_wide.png';

const LoginHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 120px;
    gap: 10px;
    width: 100%;
    height: 300px;
    & > p {
        font-size: 1.8rem;
        font-weight: 300;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 100px;

    & > button {
        width: 180px;
        height: 60px;
        font-size: 2.4rem;
        font-weight: 700;
        text-align: left;
        color: #124800;
        border-bottom: 5px solid #b5c7b0;
    }
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: auto;
`;

const TextInput = styled.input`
    width: 350px;
    height: 30px;
    padding: 25px 15px;
    border-radius: 5px;
    border: 1.2px solid #c4c4c4;
    font-size: 1.4rem;
    font-family: inherit;

    &::placeholder {
        color: #c4c4c4;
    }
`;

const signupButton = styled.button`
    width: 100%;
    height: auto;
    margin-bottom: 120px;
    font-size: 1.6rem;
    font-weight: 700;
    color: #3c64e9;
`;

const LoginButton = styled.button`
    width: 350px;
    height: 50px;
    font-weight: 400;
    font-size: 1.8rem;
    color: #ffffff;
    border-radius: 5px;
    background-color: #124800;
`;

const KakaoLoginButton = styled.button`
    width: 100%;
    height: 50px;
    background-image: url(${KakaoLoginLargeWide});
    background-repeat: no-repeat;
    background-size: 350px;
    background-position: center;
`;

export { LoginHeader, ButtonGroup, FormGroup, TextInput, signupButton, LoginButton, KakaoLoginButton };
