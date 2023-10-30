import styled from 'styled-components';
import locationGrey from '../../assets/images/icon-location-grey.svg';

export const Infowrap = styled.section`
    margin-bottom: 62px;

    & > P {
        font-size: 2rem;
        line-height: 128%;
    }
`;

export const QuestionWrap = styled.section`
    & > P {
        font-size: 2rem;
        line-height: 128%;
    }
`;

export const Line = styled.hr`
    height: 1px;
    margin: 14px 0 9px 0;
    border: 0;
    background-color: #bebdbd;
`;

export const Map = styled.div`
    width: 920px;
    height: 222px;
    margin-bottom: 9px;
    border-radius: 13px;
    background-color: #d8d8d8;
    overflow: hidden;
`;

export const LocationWrap = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    font-weight: 700;
    color: #9e9e9e;

    & > span:nth-child(2) {
        font-size: 2rem;

        &::before {
            content: '';
            display: inline-block;
            width: 16px;
            height: 20px;
            margin: 0 3px -1px 0;
            background: url(${locationGrey}) no-repeat 16px 20px;
            background-position: 50% 50%;
            background-size: cover;
        }
    }
`;
