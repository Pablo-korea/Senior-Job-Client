import styled from 'styled-components';

const contentHeader = styled.h1`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 14px;
`;

const contentTypo = styled.span`
    font-weight: 500;
    font-size: 2.4rem;
    &:hover {
        font-weight: 700;
    }
`;

export { contentHeader, contentTypo };
