import styled from 'styled-components';

const OptionBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    height: 70px;
`;

const Option = styled.button`
    font-weight: 700;
    font-size: 18px;
    color: ${({ color }) => (color === 'true' ? '#414141' : '#cdcdcd')};
`;

const SepLine = styled.a`
    width: 2px;
    height: 30px;
    background-color: #cccccc;
`;

export { OptionBar, Option, SepLine };
