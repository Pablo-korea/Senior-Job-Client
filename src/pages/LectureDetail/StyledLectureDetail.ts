import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LectureDetailWrap = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 53px 140px;
    background-color: #e4ece2;
`;

export const NavWrap = styled.div`
    align-self: flex-start;
`;

export const LectureTitle = styled.h2`
    margin-bottom: 32px;
    text-align: center;
    font-size: 2.8rem;
    font-weight: 700;
`;

export const LecturePostWrap = styled.section`
    width: 1000px;
`;

export const LectureInfoWrap = styled.div`
    padding: 40px;
    background-color: white;
    border-radius: 20px;
`;

export const LectureCardWrap = styled.section`
    display: flex;
    gap: 37px;
    margin-bottom: 66px;

    & > img {
        width: 457px;
        height: 285px;
        border-radius: 11px;
        object-fit: cover;
    }

    & > div > div:nth-child(2) {
        margin-bottom: 26px;
    }

    & > div > div:nth-child(3) {
        margin-bottom: 16px;
    }
`;

export const InstructorWrap = styled.div`
    display: flex;
    gap: 11px;
    align-items: center;
    margin-bottom: 20px;

    & > img {
        width: 40px;
        height: 40px;
        border-radius: 7px;
        object-fit: cover;
    }

    & > span {
        font-size: 2rem;
        font-weight: 700;
    }
`;

export const MoveListLink = styled(Link)`
    width: 192px;
    margin-top: 53px;
    padding: 17px 20px;
    background-color: #494949;
    border-radius: 5px;
    font-size: 2rem;
    font-weight: 700;
    color: #ffffff;
`;
