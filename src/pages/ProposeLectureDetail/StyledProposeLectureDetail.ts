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

export const LectureTitleWrap = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    margin-bottom: 32px;
`;

export const LectureTitle = styled.h2`
    text-align: center;
    font-size: 2.8rem;
    font-weight: 700;
`;

export const InstructorInfoWrap = styled.div`
    position: absolute;
    right: 50px;
    & > img {
        width: 40px;
        height: 40px;
        margin-right: 11px;
    }
    & > span {
        color: #000;
        font-size: 20px;
        font-weight: 700;
        line-height: 2.4rem;
    }
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

export const BtnWrap = styled.div`
    margin-top: 41px;
`;

export const MoveBtn = styled.button`
    padding: 14px 32px;
    border-radius: 5px;
    background: #124800;
    font-size: 2rem;
    font-weight: 500;
    color: #ffffff;
    &:last-child {
        margin-left: 17px;
        background-color: #494949;
    }
`;
