import styled from 'styled-components';

interface ApplyBtnProps {
    btncolor: string;
    color: string;
}

export const ApplyBtn = styled.button<ApplyBtnProps>`
    width: 437px;
    height: 79px;
    margin-top: 24px;
    background-color: ${(props) => props.btncolor};

    border-radius: 9px;
    font-size: 2.7rem;
    font-weight: 700;
    color: ${(props) => props.color};

    & > span {
        display: block;
        margin-bottom: 7px;
        font-size: 2rem;
        color: #cccccc;
    }

    &:disabled {
        cursor: default;
    }
`;
