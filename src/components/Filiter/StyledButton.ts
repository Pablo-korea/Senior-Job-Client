import styled from 'styled-components';

const DefaultButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    border: 2px solid #b5c7b0;
    border-radius: 35px;
    font-size: 1.8rem;
    font-weight: 700;
    color: #2b4800;
`;

const SelecteButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: #2b4800;
    border-radius: 35px;
    font-size: 1.8rem;
    font-weight: 700;
    color: #fff;
    path {
        fill: rgba(255, 255, 255);
    }
`;

export { DefaultButton, SelecteButton };
