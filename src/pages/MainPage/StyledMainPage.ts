import styled from 'styled-components';
import wave from '@assets/images/wave.svg';
import search from '@assets/images/Icon-search.svg';

interface JobTypeBtnProps {
    iconimg: string;
    colortype: string;
}

export const MinPageWrap = styled.section`
    background-color: #ddf0d7;
`;

export const CardWrap = styled.section`
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 109px 0 109px 0;
`;

export const MoreInfoWrap = styled.section`
    display: flex;
    justify-content: center;
    gap: 13px;
    background: url(${wave}) center / cover no-repeat;

    & > img {
        margin-bottom: 30px;
    }
`;

export const ContentsWrap = styled.div`
    margin-top: 60px;
    & > P {
        min-width: 520px;
        margin-bottom: 27px;
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 110%;
        color: #5e6f68;
        & > span {
            margin-left: 65px;
            font-size: 4.5rem;
            background: linear-gradient(87deg, #f17228 6%, #fdc347 42%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    & > div > a:first-child {
        margin: 0 13px 0 136px;
    }
`;

export const LectureBtnWrap = styled.section`
    padding: 80px 0 76px 0;
    & > p {
        margin-bottom: 90px;
        font-size: 3.2rem;
        font-weight: 700;
        text-align: center;
        & > span {
            background: linear-gradient(87deg, #f17228 6%, #fdc347 42%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    & > div {
        display: flex;
        justify-content: center;
        gap: 29px;
    }
`;

export const SearchJobWrap = styled.section`
    display: flex;
    justify-content: center;
    gap: 83px;
    padding: 48px 0 57px;
    background-color: #add295;

    & > img {
        border-radius: 50%;
        box-shadow: -22px 7px 35px 14px rgba(0, 0, 0, 0.4);
    }
`;

export const SearchFormWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;

    & > p {
        margin-bottom: 10px;
        font-size: 3.6rem;
        font-weight: 700;
    }

    & > span {
        margin-bottom: 21px;
        font-size: 1.5rem;
        color: #504f4f;
    }
`;

export const SearchForm = styled.form`
    background-color: #ffffff;
    padding: 16px;
    border-radius: 11px;

    & > div:first-child {
        padding-bottom: 16px;
        border-bottom: 1px solid #f5f5f5;
    }

    & > div:first-child > button:first-child {
        margin-right: 5px;
    }

    & > div:nth-child(2) {
        display: flex;
        padding-top: 16px;
    }
`;

export const JobTypeBtn = styled.button<JobTypeBtnProps>`
    width: 89px;
    padding: 7px 0;
    border-radius: 5px;
    font-size: 1.7rem;
    font-weight: 700;
    color: ${(props) => (props.colortype === 'orange' ? '#f17228' : '#FF7474')};
    background-color: ${(props) => (props.colortype === 'orange' ? '#fef1e9' : '#FFF1F1')};
    &::before {
        content: '';
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-right: 7px;
        background: ${(props) => `url(${props.iconimg}) no-repeat`};
        background-size: cover;
        background-position: 50% 50%;
    }
`;

export const InputBtnWrap = styled.div`
    & > input {
        width: 404px;
        margin-right: 11px;
        padding: 15px 0px 10px 11px;
        border: none;
        border-radius: 5px;
        background-color: #f5f5f5;
        &::placeholder {
            font-family: 'Spoqa Han Sans Neo', sans-serif;
            font-weight: 400;
            font-size: 1.5rem;
            color: #9e9e9e;
        }
        &:focus {
            outline: none;
        }
    }

    & > button {
        width: 124px;
        padding: 11px 0;
        border-radius: 5px;
        font-size: 1.9rem;
        font-weight: 700;
        color: #ffffff;
        background-color: #fb6b43;
        &::before {
            content: '';
            display: inline-block;
            width: 19px;
            height: 19px;
            margin: 0 7px -3px 0;
            background: url(${search}) no-repeat;
            background-size: cover;
            background-position: 50% 50%;
        }
    }
`;
