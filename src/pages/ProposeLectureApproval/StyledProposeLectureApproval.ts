import styled from 'styled-components';

export const ListWrap = styled.div`
    margin-left: 14px;
    padding: 33px;
    border-radius: 20px;
    border: 0.667px solid #ccc;
`;

export const ListHeader = styled.div`
    padding: 10px;
    color: #000;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.5rem;
    border-bottom: 1px solid #000;
    text-align: center;
    & > span {
        display: inline-block;
    }
    :nth-child(1) {
        width: 10%;
    }

    :nth-child(2) {
        width: 20%;
    }
    :nth-child(3) {
        width: 50%;
    }
    :nth-child(4) {
        width: 20%;
    }
`;

export const ListItemWrap = styled.ol`
    padding-top: 25px;
    & > li + li {
        margin-top: 25px;
    }
`;

export const ListItem = styled.li`
    min-height: 50px;
    text-align: center;
    padding: 10px;
    display: flex;
    color: #000;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.5rem;
    & > span {
        display: inline-block;
    }
    :nth-child(1) {
        width: 10%;
    }

    :nth-child(2) {
        width: 20%;
    }
    :nth-child(3) {
        width: 50%;
    }
    :nth-child(4) {
        width: 20%;
        & > input {
            accent-color: #2a9235;
        }
    }
`;

export const StateBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 28px;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 2rem;
    :first-child {
        margin-right: 18px;
        padding: 13px 27px;
        border-radius: 33.333px;
        background: #ffedbc;
        color: #000;
    }
    :last-child {
        padding: 13px 27px;
        border-radius: 33.333px;
        background: #124800;
        color: #fff;
    }
`;
