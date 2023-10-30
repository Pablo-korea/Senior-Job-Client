import styled from 'styled-components';

export const ModalWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalContentWrap = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 666px;
    border-radius: 20px;
    padding: 76px 53px 30px;
    background-color: #fff;

    & > button:first-child {
        position: absolute;
        top: 33px;
        right: 33px;
    }
`;

export const ReasonContent = styled.p`
    margin-bottom: 19px;
    font-size: 2.3rem;
    font-weight: 700;
    color: #124800;
`;

export const ApplyBtn = styled.button`
    margin-left: 206px;
    border-radius: 33px;
    padding: 17px 27px;
    font-size: 1.6rem;
    font-weight: 500;
    color: #ffffff;
    background-color: #124800;
`;

export const SuccessContent = styled.p`
    margin-bottom: 32px;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    line-height: 120%;
    color: #124800;
`;

export const MoveList = styled.button`
    border-radius: 33px;
    padding: 13px;
    font-size: 1.7rem;
    font-weight: 700;
    color: #124800;
    box-shadow: 0px 3px 3px rgba(18, 72, 0, 0.25);
`;
