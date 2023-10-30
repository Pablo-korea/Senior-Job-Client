import styled from 'styled-components';

export const NavWrap = styled.nav`
    margin-bottom: 37px;
    align-self: flex-start;
`;

export const NavList = styled.ul`
    li {
        display: inline-block;
        font-weight: 500;
        font-size: 2rem;
    }

    & > li:first-child {
        margin-right: 29px;
        position: relative;
        &::after {
            content: '>';
            position: absolute;
            top: 0;
            left: 86px;
        }
    }
`;
